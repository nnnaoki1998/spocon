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

insert into team (id, uuid, name, sport_id, icon_path, description, zip_code, address, longitude, latitude)
values (1, 'b6d8a45d-ed81-f229-27dc-4a216b239740', '柏陵高校OB会', 1, 'aaaa', 'abcdefgh', "811-1353", '福岡市南区柏原4-47-1', 1.1, 1.1),
       (2, 'c028f2d0-efcc-e377-6e35-45589804212d', '福岡中央高校OB会', 2, 'bbbb', 'ijklmnop', "810-0014", '福岡市中央区平尾3-20-57', 2.2, 2.2);
