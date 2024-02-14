-- Active: 1707101281210@@127.0.0.1@3306@sesac
show tables;

CREATE TABLE visitor(
    id int PRIMARY KEY AUTO_INCREMENT,
    name varchar(10) NOT NULL,
    comment MEDIUMTEXT
);

drop table visitor;

DESC visitor;

INSERT INTO visitor(name, comment) VALUES('allie','hi~');
INSERT INTO visitor VALUES(null, '홍길동',"홍길동입니다.");

select * from visitor;

############[DCL]###############

-- ------새로운 user 만들기1
CREATE USER 'sesac'@'%' IDENTIFIED BY '1234';

ALTER USER 'sesac'@'%' IDENTIFIED WITH mysql_native_password BY '1234';
-- 비밀번호 바꾸고 싶다면!


-- ------새로운 user만들기2
CREATE USER 'sesac'@'%' IDENTIFIED WITH mysql_native_password BY'1234';

GRANT ALL PRIVILEGES ON *.* TO 'sesac'@'%' WITH GRANT OPTION;
-- 모든 DB에 접근 가능하도록, sesac 계정에 DB접근 권한을 부여

FLUSH PRIVILEGES;
-- 현재 사용중인 mysql 캐시를 지우고 새로운 설정 적용

select * from mysql.user;

SELECT host, user from mysql.user;