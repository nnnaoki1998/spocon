use spocon_db;

create table user
(
  id int unsigned not null auto_increment,
  name varchar(255) not null,
  email varchar(255) not null unique,
  team_id int unsigned not null,
  created_at TIMESTAMP not null default CURRENT_TIMESTAMP,
  updated_at TIMESTAMP not null default CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP,
  primary key (id),
  foreign key (team_id) references team(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
