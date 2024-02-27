CREATE TABLE service_category (
  id smallserial PRIMARY KEY,
  name varchar(20) UNIQUE
);

CREATE TABLE connection_type (
  id smallserial PRIMARY KEY,
  name varchar(20) UNIQUE 
);

CREATE TABLE internet_customer (
  id serial PRIMARY KEY,
  first_name varchar(20) NOT NULL,
  last_name varchar(40) NOT NULL,
  email varchar(40) NOT NULL UNIQUE,
  password text NOT NULL,
  phone varchar(10) NOT NULL UNIQUE,
  credit_card_company varchar(20),
  credit_card_number varchar(20),
  billing_street varchar(30),
  billing_city varchar(30),
  billing_province varchar(20),
  billing_postal_code varchar(6),
  service_street varchar(30),
  service_city varchar(30),
  service_province varchar(20),
  service_postal_code varchar(6),
  create_date timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
  update_date timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE internet_service (
  id smallserial PRIMARY KEY,
  name varchar(40) UNIQUE,
  label varchar(40),
  description varchar(80),
  service_category_id smallserial REFERENCES service_category (id),
  connection_type_id smallserial REFERENCES connection_type (id),
  bandwidth_down smallint,
  bandwidth_up smallint,
  price smallserial,
  ideal_num_users varchar(10),
  ideal_num_devices varchar(10)
);

CREATE TABLE internet_order (
  id serial PRIMARY KEY,
  service_id smallserial REFERENCES internet_service (id),
  customer_id serial REFERENCES internet_customer (id),
  order_date timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);

