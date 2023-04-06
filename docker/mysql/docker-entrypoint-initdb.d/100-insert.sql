use spocon_db;

insert into user (id, name, email)
values (1, '範馬刃牙' ,'baki@baki.com'),
       (2, '範馬勇次郎' ,'yujiro@baki.com'),
       (3, '愚地独歩' ,'doppo@baki.com'),
       (4, '花山薫' ,'kaoru@baki.com'),
       (5, '烈海王' ,'kaio@baki.com');

insert into sport (id, name)
values (1, 'バスケットボール'),
       (2, 'サッカー'),
       (3, '野球'),
       (4, 'テニス'),
       (5, '卓球');

insert into team (id, name)
values (1, '柏高校OB会'),
       (2, '中央高校OB会');
