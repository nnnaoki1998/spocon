use spocon_db;

create table team
(
  id char(36) not null unique,
  name varchar(255) not null,
  sport_id int not null,
  reception_status enum(on,off) default on,
  icon_path varchar(255) not null,
  description varchar(1023) not null,
  zip_code char(8) not null,
  address varchar(255) not null,
  longitude decimal not null,
  latitude decimal not null,
  created_at TIMESTAMP not null default CURRENT_TIMESTAMP,
  updated_at TIMESTAMP not null default CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP,
  primary key (id),
  foreign key (sport_id) references sport(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
