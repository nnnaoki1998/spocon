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

insert into grade (id, name)
values (1, '小学生'),
       (2, '中学生'),
       (3, '高校生'),
       (4, '大学生'),
       (5, '社会人');

insert into team (id, uuid, name, sport_id, grade_id, icon_path, description, address_state, address_city)
values ( 1, 'b6d8a45d-ed81-f229-27dc-4a216b239740',  'チーム1', 1, 1,  'path1',  '説明1', '福岡県', '福岡市'),
       ( 2, 'c028f2d0-efcc-e377-6e35-45589804212d',  'チーム2', 2, 2,  'path2',  '説明2', '福岡県', '福岡市'),
       ( 3, '8f4f26bc-3417-7b4c-6cc6-d4b296df316b',  'チーム3', 3, 3,  'path3',  '説明3', '北海道', '札幌市'),
       ( 4, '54333672-bbf9-610c-07d9-7768af1598c0',  'チーム4', 4, 4,  'path4',  '説明4', '岩手県', '盛岡市'),
       ( 5, 'af770aec-f891-b9fa-4249-d2c6f30384dc',  'チーム5', 5, 5,  'path5',  '説明5', '宮城県', '仙台市'),
       ( 6, '78fab89c-c30e-eb0b-e9f4-a02d8d8f0a1b',  'チーム6', 1, 1,  'path6',  '説明6', '秋田県', '秋田市'),
       ( 7, '7f7acbe8-e84a-9cbc-5f59-293db1366310',  'チーム7', 2, 2,  'path7',  '説明7', '山形県', '山形市'),
       ( 8, 'ad544684-b99f-bd91-d419-f6d5b4966c22',  'チーム8', 3, 3,  'path8',  '説明8', '福島県', '福島市'),
       ( 9, '1ffde5d6-681f-aa2e-5716-e042fa83b245',  'チーム9', 4, 4,  'path9',  '説明9', '茨城県', '稲敷郡'),
       (10, '4b40aacb-86ad-ac8b-4623-ce82724254ad', 'チーム10', 5, 5, 'path10', '説明10', '栃木県', '宇都宮'),
       (11, 'bf210c93-345d-dc8e-1b3b-89e7b2f6f0e3', 'チーム11', 1, 1, 'path11', '説明11', '群馬県', '高崎市'),
       (12, 'e6a1f8e4-9c79-9e3b-b795-df1e65f3f6e8', 'チーム12', 2, 2, 'path12', '説明12', '埼玉県', 'さいたま市'),
       (13, 'ec456a4d-f8d3-3b65-067f-827d3b3acb5e', 'チーム13', 3, 3, 'path13', '説明13', '千葉県', '千葉市'),
       (14, '16dc494f-5941-9bdb-d467-c051aba1aa45', 'チーム14', 4, 4, 'path14', '説明14', '東京都', '千代田区'),
       (15, 'f0cc1b44-ecc6-c36e-2ac0-1912327122d0', 'チーム15', 5, 5, 'path15', '説明15', '東京都', '港区'),
       (16, '8c118c08-6d29-0eb3-96cb-5f08ed879cff', 'チーム16', 1, 1, 'path16', '説明16', '東京都', '港区'),
       (17, 'ee3c0024-ac4e-fb7f-97d5-602c039ccf75', 'チーム17', 2, 2, 'path17', '説明17', '神奈川県', '川崎市'),
       (18, 'e9ff4e8c-29eb-6321-0e09-f9e31cd82a59', 'チーム18', 3, 3, 'path18', '説明18', '神奈川県', '川崎市'),
       (19, 'e4293247-c95d-45da-0b4c-6e4daa9c7d3c', 'チーム19', 4, 4, 'path19', '説明19', '新潟県', '糸魚川市'),
       (20, '3ceb7d9b-2b0a-7057-9693-84b9ce1c7c87', 'チーム20', 5, 5, 'path20', '説明20', '富山県', '中新川郡'),
       (21, 'e9ee8b91-fe15-38cd-716e-e8738775ed12', 'チーム21', 1, 1, 'path21', '説明21', '富山県', '中新川郡'),
       (22, '243c620a-ecc9-680e-5ceb-12acdf34a297', 'チーム22', 2, 2, 'path22', '説明22', '富山県', '黒部市'),
       (23, 'd3fb555c-dac1-017c-418d-cd6dd4913c4f', 'チーム23', 3, 3, 'path23', '説明23', '山梨県', '甲府市'),
       (24, '1550c8b2-d922-7020-ab82-939649c80355', 'チーム24', 4, 4, 'path24', '説明24', '岐阜県', '岐阜市'),
       (25, '801c5766-b5e9-8f71-4b9a-f7a470603b82', 'チーム25', 5, 5, 'path25', '説明25', '静岡県', '富士宮市');