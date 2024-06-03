create database test default character set utf8mb4 default collate utf8mb4_general_ci;
use test;

CREATE USER 'sesac'@'%' IDENTIFIED BY '1234';
GRANT ALL PRIVILEGES ON *.* TO 'sesac'@'%' WITH GRANT OPTION;
FLUSH PRIVILEGES;
select host, user, plugin, authentication_string from mysql.user;
ALTER USER 'sesac'@'%' IDENTIFIED WITH mysql_native_password BY '1234';

create table user (
	id bigint primary key not null auto_increment,
	username varchar(20) not null,
    email varchar(100) not null,
    password varchar(255) not null
);