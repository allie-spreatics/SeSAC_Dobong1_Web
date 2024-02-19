-- Active: 1707101281210@@127.0.0.1@3306@sesac
show tables;

-- 테이블 구조 확인
DESC Player;
DESC Profile;
Desc Team;
Desc Game;
Desc TeamGame;

insert into team(name, createdAt, updatedAt) values 
  ('sk', now(), now()), 
  ('kt', now(), now()), 
  ('nc', now(), now()), 
  ('lg', now(), now());

insert into player(name, age, createdAt, updatedAt, teamid) values 
  ('홍길동', 20, now(), now(), 1), 
  ('성춘향', 21, now(), now(), 3), 
  ('김첨지', 22, now(), now(), 2), 
  ('김수지', 23, now(), now(), 4), 
  ('강민재', 19, now(), now(), 1), 
  ('황찬수', 28, now(), now(), 1), 
  ('이장우', 24, now(), now(), 2), 
  ('박나래', 30, now(), now(), 3);

insert into profile(position, salary, createdAt, updatedAt, player_id) values
  ('1B', 100, now(), now(), 1),
  ('2B', 150, now(), now(), 2),
  ('3B', 80, now(), now(), 3),
  ('LF', 200, now(), now(), 4),
  ('1B', 170, now(), now(), 5),
  ('2B', 130, now(), now(), 6),
  ('3B', 90, now(), now(), 7),
  ('LF', 250, now(), now(), 8);

insert into game(date, location, createdAt, updatedAt) values
  ('2023-10-1', 'seoul', now(), now()),
  ('2023-10-3', 'london', now(), now()),
  ('2023-10-5', 'la', now(), now());

insert into teamgame(team_id, game_id, createdAt, updatedAt) values
  (1, 1, now(), now()), 
  (2, 1, now(), now()), 
  (2, 2, now(), now()), 
  (3, 1, now(), now()), 
  (1, 3, now(), now()), 
  (3, 3, now(), now());
  
select * from player;
select * from profile;
select * from team;
select * from game;
select * from teamgame;

