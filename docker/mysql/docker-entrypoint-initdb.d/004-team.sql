use spocon_db;

create table team
(
  id int unsigned not null auto_increment,
  uuid char(36) not null unique,
  name varchar(255) not null,
  sport_id int unsigned not null,
  grade_id int unsigned not null,
  reception_status enum('on','off') default 'on',
  icon_path varchar(255) not null,
  description varchar(1023) not null,
  zip_code char(8) not null,
  address varchar(255) not null,
  longitude decimal(12, 8) not null,
  latitude decimal(12, 8) not null,
  created_at TIMESTAMP not null default CURRENT_TIMESTAMP,
  updated_at TIMESTAMP not null default CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP,
  primary key (id),
  foreign key (sport_id) references sport(id),
  foreign key (grade_id) references grade(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
