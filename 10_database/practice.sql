SHOW DATABASES;
SHOW TABLES;

use dobong;

-- 실습문제1: DDL
CREATE TABLE member(
    id VARCHAR(20) PRIMARY KEY,
    name VARCHAR(5) NOT NULL,
    age INT,
    gender VARCHAR(2) NOT NULL,
    email VARCHAR(50),
    promotion VARCHAR(2) DEFAULT 'x'
);

desc member;

-- 실습문제2:DDL
-- id 컬럼 값 형식 변경 VARCHAR(20) > VARCHAR(10)
ALTER TABLE member MODIFY id VARCHAR(10);
-- age 컬럼 삭제
ALTER TABLE member DROP age;
-- interest 컬럼 추가(VARCHAR(100))
ALTER TABLE member ADD interest VARCHAR(100);

-- 실습문제3:DDL
CREATE TABLE user(
    id VARCHAR(10) NOT NULL PRIMARY KEY,
    pw VARCHAR(20) NOT NULL,
    name VARCHAR(5) NOT NULL,
    gender ENUM('F','M','') DEFAULT '',
    birthday DATE NOT NULL,
    age INT(3) NOT NULL DEFAULT 0
)

DESC user;

-- 실습문제4:DML insert into
INSERT INTO user(id, pw, name, gender, birthday, age) 
VALUES('hong1234', '8o4bkg','홍길동','M','1990-01-31',33);
INSERT INTO user(id, pw, name, gender, birthday, age) 
VALUES('sexysung', '87awjkdf', '성춘향', 'F', '1992-03-31', 31);
INSERT INTO user(id, pw, name, gender, birthday, age) 
VALUES('power70', 'qxur8sda', '변사또', 'M', '1970-05-02', 53);
INSERT INTO user(id, pw, name, gender, birthday, age) 
VALUES('hanjo', 'jk48fn4', '한조', 'M', '1984-10-18', 39 );
INSERT INTO user
VALUES('widowmaker', '38ewifh3', '위도우', '', '1986-06-27', 47);
INSERT INTO user
VALUES('dvadva', 'k3f3ah', '송하나', 'F', '1994-06-03', 22 );
INSERT INTO user
VALUES('jungkrat', '4ifha7f', '정크랫', 'M', '1975-11-11', 24);


select * from user;

-- 실습5.DDL 데이터 조회, 수정, 삭제

select * from user ORDER BY birthday ASC;
-- 모든 회원목록, birthday 컬럼을 기준으로 오름차순 정렬

select * from user where gender='M' ORDER BY name DESC;
-- gender='M'인값 가져오는데 name기준으로 내림차순 정렬

select id, name from user where birthday LIKE '199%';
-- 1990년대 태어난 회원의 id, name 컬럼을 가져와 목록으로 보여주세요

select * from user WHERE birthday LIKE '%-06-%' ORDER BY birthday;
-- 6월생 회원목록, bithday 기준으로 오름차순 정렬

select * from user WHERE gender='M' AND birthday LIKE '197%';
-- gender값이 M이고 1970년대 태어난 회원 목록

select * from user ORDER BY age DESC LIMIT 3;
-- 모든 회원중 age기준으로 내림차순 정렬, 그런데 처음 3개의 레코드만 가져오기

select * from user where age BETWEEN 25 and 50; 
select * from user where age >=25 AND age<=50; 
-- 모든 회원 중 나이가 25 이상 50이하

UPDATE user SET pw='12345678' where id='hong1234';
select pw from user where id='hong1234';
-- id가 hong1234인 pw를 12345678로 "변경"

DELETE FROM user WHERE id='jungkrat'
-- id컬럼이 jungkrat인 레코드 "삭제"

select * from user;

-- select >> from >> where >> group by >> having >> order by >> limit
