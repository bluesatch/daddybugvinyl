DROP DATABASE IF EXISTS daddybugvinylDB;
CREATE DATABASE daddybugvinylDB;
USE daddybugvinylDB;

CREATE TABLE user (
    user_id INT UNSIGNED AUTO_INCREMENT NOT NULL,
    firstName VARCHAR(40) NOT NULL,
    lastName VARCHAR(40) NOT NULL,
    email VARCHAR(60) UNIQUE NOT NULL,
    phone VARCHAR(10) NOT NULL,
    password VARCHAR(20) NOT NULL,
    CONSTRAINT pk_user PRIMARY KEY (user_id)
);

ALTER TABLE user 
    ADD COLUMN isActive BOOLEAN DEFAULT true,
    ADD COLUMN date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ADD COLUMN date_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;

CREATE TABLE candle (
    candle_id TINYINT UNSIGNED AUTO_INCREMENT NOT NULL,
    candle VARCHAR(30) NOT NULL,
    size ENUM('8', '10', '12') DEFAULT '8',
    price FLOAT(4, 2),
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    date_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT pk_candle PRIMARY KEY (candle_id)
);

ALTER TABLE candle 
    ADD COLUMN imgUrl VARCHAR(40);

ALTER TABLE candle 
    ADD COLUMN description TEXT;

CREATE TABLE artist (
    artist_id INT UNSIGNED AUTO_INCREMENT NOT NULL,
    firstName VARCHAR(40),
    lastName VARCHAR(40),
    band VARCHAR(60),
    alias VARCHAR(40),
    imgUrl VARCHAR(40),
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    date_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT pk_artist PRIMARY KEY (artist_id)
);

CREATE TABLE label (
    label_id TINYINT UNSIGNED AUTO_INCREMENT NOT NULL,
    label VARCHAR(40),
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    date_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT pk_label PRIMARY KEY (label_id)
);

CREATE TABLE genre (
    genre_id TINYINT UNSIGNED AUTO_INCREMENT NOT NULL,
    genre VARCHAR(40),
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    date_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT pk_genre PRIMARY KEY (genre_id)
);

CREATE TABLE apparel (
    apparel_id TINYINT UNSIGNED AUTO_INCREMENT NOT NULL,
    apparel VARCHAR(40) NOT NULL,
    color ENUM('white', 'black', 'gray', 'blue', 'red', 'pink', 'green') DEFAULT 'black',
    size ENUM('s', 'm', 'l', 'xl', 'xxl', 'xxxl'),
    price FLOAT (4, 2),
    imgUrl VARCHAR(40),
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    date_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT pk_apparel PRIMARY KEY (apparel_id)
);

CREATE TABLE product (
    product_id TINYINT UNSIGNED AUTO_INCREMENT NOT NULL,
    product VARCHAR(20),
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    date_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT pk_product PRIMARY KEY (product_id)
);

CREATE TABLE album (
    album_id INT UNSIGNED AUTO_INCREMENT NOT NULL,
    serial_no VARCHAR(20) UNIQUE NOT NULL,
    title VARCHAR(60),
    artist_id INT UNSIGNED NOT NULL,
    label_id TINYINT UNSIGNED NOT NULL,
    speed ENUM('33 rpm', '45 rpm', '78 rpm') DEFAULT '33 rpm',
    size ENUM('7"', '12"', '10"') DEFAULT '12"',
    sound ENUM('mono', 'stereo') DEFAULT 'stereo',
    yr_released YEAR NOT NULL,
    price FLOAT(5, 2),
    rating ENUM('1', '2', '3', '4', '5') DEFAULT '3',
    imgUrl VARCHAR(40),
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    date_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT pk_album PRIMARY KEY (album_id),
    CONSTRAINT fk_artist FOREIGN KEY (artist_id) REFERENCES artist (artist_id),
    CONSTRAINT fk_label FOREIGN KEY (label_id) REFERENCES label (label_id)
);

CREATE TABLE album_to_genre (
    album_id INT UNSIGNED NOT NULL,
    genre_id TINYINT UNSIGNED NOT NULL,
    CONSTRAINT fk_album FOREIGN KEY (album_id) REFERENCES album (album_id),
    CONSTRAINT fk_genre FOREIGN KEY (genre_id) REFERENCES genre (genre_id)
);