-- Active: 1706610649205@@127.0.0.1@3306@sesac
show tables;

create table passportUser(
    id INT PRIMARY KEY,
    password VARCHAR(20)
    
);

desc passportUser;
insert into passportuser VALUES('cocoa','12345')