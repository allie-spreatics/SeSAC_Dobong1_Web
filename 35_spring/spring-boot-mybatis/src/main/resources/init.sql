CREATE DATABASE test DEFAULT CHARACTER SET utf8mb4 DEFAULT COLLATE utf8mb4_general_ci;

create table user (
    id int not null primary key auto_increment,
    name varchar(10) not null,
    nickname varchar(20) not null
);

create table board(
	id int not null primary key auto_increment,
    title varchar(20) not null,
    content varchar(100) not null,
    writer varchar(10) not null,
    registered timestamp default current_timestamp
);