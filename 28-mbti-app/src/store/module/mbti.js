const initialState = {
  mbtiResult: "",
  page: 0,
  survey: [
    {
      question:
        "퇴근 직전에 동료로부터 개발자 모임에 초대를 받은 나!\n\n퇴근 시간에 나는?",
      answer: [
        {
          text: "그런 모임을 왜 이제서야 알려 준거야! 당장 모임으로 출발한다",
          result: "E",
        },
        {
          text: "1년 전에 알려줬어도 안갔을 건데 뭔... 더 빠르게 집으로 간다",
          result: "I",
        },
      ],
    },
    {
      question:
        "새로운 서비스 개발 중에, 동료가 새로 나온 신기술을 쓰는게 더 편할거라고 추천을 해준다!\n\n나의 선택은!?",
      answer: [
        {
          text: "뭔소리여, 그냥 하던 대로 개발하면 되는거지! 기존 생각대로 개발한다",
          result: "S",
        },
        {
          text: "오호? 그런게 있어? 일단 구글을 찾아본다",
          result: "N",
        },
      ],
    },
    {
      question:
        "서비스 출시 이틀 전 야근 시간, 갑자기 동료가 어!? 를 외쳤다!\n\n나의 선택은?",
      answer: [
        {
          text: "무슨 버그가 발생한 거지? 아마 DB 관련 버그가 아닐까? 빠르게 동료의 자리로 달려간다",
          result: "T",
        },
        {
          text: "아... 내일도 야근 각이구나 ㅠㅠ! 일단 동료의 자리로 가 본다",
          result: "F",
        },
      ],
    },
    {
      question:
        "팀장님이 xx씨 그전에 말한 기능 내일 오후까지 완료 부탁해요라고 말했다!\n\n나의 선택은?",
      answer: [
        {
          text: "일단 빠르게 개발 완료하고, 나머지 시간에 논다",
          result: "J",
        },
        {
          text: "그거 내일 아침에 와서 개발해도 충분 하겠는데? 일단 논다",
          result: "P",
        },
      ],
    },
  ],
  explanations: {
    ESTJ: {
      text: "무리한 개발 일정만 아니라면 일정을 철저하게 지킬 당신의 MBTI 는!",
      img: "/assets/estj.jpg",
    },
    ISTJ: {
      text: "스스로 하고싶은 분야를 끝까지 파고 들어서 끝내 성공 시킬 당신의 MBTI 는!",
      img: "/assets/istj.jpg",
    },
    ENTJ: {
      text: "미래의 능력 쩌는 개발 팀장님으로 개발팀을 이끌 당신의 MBTI 는!",
      img: "/assets/entj.jpg",
    },
    INTJ: {
      text: "혼자서 모든 것을 다 해내는 원맨 캐리의 표본! 당신의 MBTI 는!",
      img: "/assets/intj.jpg",
    },
    ESFJ: {
      text: "개발팀의 분위기 메이커이자 아이디어 뱅크가 될 당신의 MBTI 는!",
      img: "/assets/esfj.jpg",
    },
    ISFJ: {
      text: "개발팀의 마더 테레사, 고민 상담소 역할을 자처하는 당신의 MBTI 는!",
      img: "/assets/isfj.jpg",
    },
    ENFJ: {
      text: "당신이 있는 팀은 언제나 올바른 곳을 향하고 있습니다! 팀원은 물론 팀의 방향을 챙기는 당신의 MBTI 는!",
      img: "/assets/enfj.jpg",
    },
    INFJ: {
      text: "예리한 통찰력으로 모든 것을 내다보면서 완벽하게 개발을 할 당신의 MBTI 는!",
      img: "/assets/infj.jpg",
    },
    ESTP: {
      text: "쿨하게 자신이 할 것을 하면서 논리적인 개발을 할 당신의 MBTI 는!",
      img: "/assets/estp.jpg",
    },
    ISTP: {
      text: "단시간에도 효율적으로 개발하여 모든 것을 완성할 당신의 MBTI 는!",
      img: "/assets/istp.jpg",
    },
    ENTP: {
      text: "스스로 흥미만 생긴다면 당장에 페이스북도 만들어 버릴 당신의 MBTI 는!",
      img: "/assets/entp.jpg",
    },
    INTP: {
      text: "확실한 주관과 뛰어난 지능을 바탕으로 논리적 개발을 할 당신의 MBTI 는!",
      img: "/assets/intp.jpg",
    },
    ESFP: {
      text: "개발팀의 에너자이저! 개발팀 특유의 서먹함을 깨는 당신! 당신의 MBTI 는!",
      img: "/assets/esfp.jpg",
    },
    ISFP: {
      text: "뛰어난 호기심과 예술적 감각으로 개발팀의 부족함을 채워갈 당신! 당신의 MBTI 는!",
      img: "/assets/isfp.jpg",
    },
    ENFP: {
      text: "자유로운 영혼으로 개발팀의 윤활유 및 활력소가 되어줄 당신의 MBTI 는!",
      img: "/assets/enfp.jpg",
    },
    INFP: {
      text: "개발팀의 그 어떤 트러블도 당신 앞에서는 사르르 녹을뿐, 팀의 근간을 다져주는 당신의 MBTI 는!",
      img: "/assets/infp.jpg",
    },
  },
};

const CHECK = "mbti/CHECK";
const NEXT = "mbti/NEXT";
const RESET = "mbti/RESET";

export function check(result) {
  return {
    type: CHECK,
    payload: { result },
  };
}

export function next() {
  return {
    type: NEXT,
  };
}
export function reset() {
  return {
    type: RESET,
  };
}
export function mbti(state = initialState, action) {
  switch (action.type) {
    case CHECK:
      return {
        ...state,
        mbtiResult: state.mbtiResult + action.payload.result, // 'IS'+ 'F'
      };
    case NEXT:
      return {
        ...state,
        page: state.page + 1,
      };
    case RESET:
      return {
        ...state,
        page: 0,
        mbtiResult: "",
      };
    default:
      return state;
  }
}
