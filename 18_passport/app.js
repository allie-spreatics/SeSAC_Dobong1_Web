const express = require("express");

const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const NaverStrategy = require("passport-naver").Strategy;
const models = require("./models"); //model 불러오기
require("dotenv").config();
const app = express();
const PORT = 8080;

app.set("views", "./views");
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Session middleware
// 한시간짜리 세션 생성
app.use(
  session({
    secret: "secretkey",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60,
    },
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// local 전략 세우기
passport.use(
  // req.body로 넘어오는 키값과 일치해야 함
  new LocalStrategy(
    { usernameField: "inputId", passwordField: "inputPw" },

    //cb(); // 성공, 실패, 에러에 대한 값을 넘길 수 있음
    async (inputId, inputPw, cb) => {
      // 1. DB에서 id와 pw를 찾아서
      //   못찾으면 null
      // 2. input으로 들어오는 inputId inputPw 를 찾아 비교하는 작업
      const id = await models.User.findOne({
        where: {
          id: inputId,
        },
      });
      if (id) {
        // null이 아니라면 일단 아이디는 있는 것, >> pw 비교하기
        const result = await models.User.findOne({
          where: {
            id: inputId,
            password: inputPw,
          },
        });
        // 로그인 성공
        if (result !== null) cb(null, result);
        else cb(null, false, { message: "비밀번호가 달라요" });
      } else {
        // null? >> id없음
        cb(null, false, {
          message: "해당 id가 존재하지 않습니다. id를 다시 확인해주세요",
        });
      }
    }
  )
);

// naver 간편로그인 전략 세우기
passport.use(
  new NaverStrategy(
    {
      clientID: process.env.NAVER_CLIENT,
      clientSecret: process.env.NAVER_CLIENT_SECRET,
      callbackURL: "/login/auth/naver/callback",
    },
    async (accessToken, refreshToken, profile, cb) => {
      // profile은 sns마다 제공하는 종류가 달라서 어떤 것 사용할지 확인해보기
      console.log(profile);
      const result = await models.User.findOne({
        where: {
          id: profile.id,
        },
      });

      if (result) {
        // 이미 가입된 유저라면, 로그인작업
        cb(null, result);
      } else {
        // 가입되지 않은 유저라면 회원가입시키기
        const newNaverUser = profile;
        const dbresult = await models.User.create({
          id: newNaverUser.id,
          provider: "naver",
        });
        if (dbresult) {
          // insert성공 > 회원가입 작업
          cb(null, newNaverUser);
        } else {
          //
          cb(null, false, { message: "네이버 회원 생성 에러" });
        }
      }
    }
  )
);

// 로그인 여부 판단
// cb 함수에 담긴 내용은 serializeUser 메소드가 받음
// serializeUser: 정보를 받고 세션을 만들어서 전달받은 유저 정보를 세션에 저장
passport.serializeUser((user, cb) => {
  console.log(user);
  cb(null, user.id);
  // user.id 를 이용해 세션에 저장하고 있음
  // 추후 req.user 를 이용해서 정보를 확인할 수 있음
});

// 로그인 여부 판단2
// 하나의 페이지가 아니고 다른 페이지에 접근하려고 할 때에도 passport 는 계속 인증을 요구
passport.deserializeUser(async (inputId, cb) => {
  try {
    const result = await models.User.findOne({
      where: { id: inputId },
    });

    if (result) cb(null, result);
  } catch (err) {
    console.log("deserial..", err);
  }
});

// 라우팅 및 컨트롤러 코드
// 2. 로그인 여부를 사용하는 페이지
app.get("/", async (req, res) => {
  // passport 로그인을 이용하면
  // 로그인 세션 정보가 req.user에 담김
  if (req.user) {
    // 로그인한 유저라면?
    res.render("index", { isLogin: true, userid: req.user.id });
  } else {
    res.render("index", { isLogin: false });
  }
});

// 3. 로그인한 사람 > 로그인페이지 진입불가
app.get("/login", (req, res) => {
  if (req.user) {
    // 로그인된 유저가 /login 에 진입하려고 할 때 메인페이지 보여주기
    res.redirect("/");
  } else {
    res.render("login");
  }
});

// 1. 로그인 작업
app.post("/login", (req, res, next) => {
  passport.authenticate("local", (authErr, user, info) => {
    if (authErr) next(authErr);
    if (!user) {
      return res.send({ loginSuccess: false, message: info.message });
    }
    req.logIn(user, (loginErr) => {
      if (loginErr) {
        next(loginErr);
      }
      console.log("로그인 성공");
      res.send({ loginSuccess: true });
      /*
        res.redirect("/");
         axios,ajax, fetch 사용시 redirect 불가,
        redirect 처럼 페이지 전환을 하고 싶다면, 프론트에서 처리
        */
      //
    });
  })(req, res, next);
});

// 4. 로그아웃 작업
app.get("/logout", (req, res, next) => {
  // passport 의 logout 메소드가 로그아웃 처리
  // (세션 종료시키기)
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    return res.redirect("/");
  });
});

// 5. naver 간편 로그인
app.get("/login/auth/naver", passport.authenticate("naver")); // naver전략을 쓴다고 알려주는 것
// 실제적인로그인 처리는 여기서 진행됨
app.get(
  "/login/auth/naver/callback",
  passport.authenticate("naver", {
    successRedirect: "/", // 로그인 성공하면 /로 redirect
    failureRedirect: "/login",
  })
);

// ** 회원가입
app.get("/register", (req, res) => {
  res.render("register");
});
app.post("/register", async (req, res) => {
  // 중복 아이디 체크해보기
  const duplicated = await models.User.findOne({
    where: { id: req.body.id },
  });
  console.log(duplicated); //결과확인
  if (duplicated) {
    // 중복 아이디라면

    res.redirect("/register");
  } else {
    const result = await models.User.create({
      id: req.body.id,
      password: req.body.pw,
      // provider: "local",
    });
    console.log(result);

    res.redirect("/login");
  }
});
// sequelize 설정
models.sequelize
  .sync({ force: false })
  .then(() => {
    app.listen(PORT, () => {
      console.log("Database connection succeeded!");
      console.log(`http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("sequelize Err!", error);
  });
