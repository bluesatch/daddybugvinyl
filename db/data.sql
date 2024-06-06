INSERT INTO user (firstName, lastName, email, phone, password)
VALUES (
    'satchel',
    'page',
    'satchwerk@gmail.com',
    '6017779311',
    'Test123!'
);

INSERT INTO product (product) VALUES ('apparel'), ('candle'), ('vinyl');

INSERT INTO candle (candle, size, price, imgUrl, description) 
VALUES (
    "king's friday",
    '8',
    15.00,
    '2kingsfriday.jpg',
    'palo santo and suede & smoke scented'
);

INSERT INTO label (label) VALUES 
('arista'), ('a&m'), ('blue note'), ('impulse'), ('elektra'), ('columbia'), ('sony'), ('warner bros'), ('universal'), ('def jam'), ('milestone'), ('aftermath'), ('interscope'), ('geffen'), ('mca'), ('tommy boy'), ('death row'), ('polydor'), ('mercury'), ('casablanca'), ('prestige'), ('king'), ('malaco'), ('stax'), ('motown'), ('flying dutchman'), ('solar'), ('jive'), ('knitting factory'), ('t-neck'), ('capitol'), ('rawkus'), ('mgm'), ('cti'), ('kudu'), ('verve');

INSERT INTO genre (genre) VALUES 
('jazz'), ('rock'), ('blues'), ('hip hop'), ('rap'), ('metal'), ('country'), ('classical'), ('swing'), ('bebop'), ('post-bop'), ('vocal'), ('pop'), ('electronic'), ('r&b'), ('soul'), ('bluegrass'), ('alternative'), ('afrobeat'), ('world'), ('folk'),  ('avant garde'), ('comedy'), ('spoken word'), ('disco'), ('funk'), ('dance'), ('gospel');

INSERT INTO label (label) VALUES ('fantasy'), ('chiaroscuro records');

INSERT INTO artist (
    firstName,
    lastName,
    band,
    alias,
    imgUrl
)
VALUES (
    'horace',
    'silver',
    NULL,
    NULL,
    'horacesilver.jpg'
),
(
    'aretha',
    'franklin',
    NULL,
    NULL,
    'arethafranklin.jpg'
),
(
    NULL,
    NULL,
    'outkast',
    NULL,
    'outkast.jpg'
),
(
    NULL,
    NULL,
    'tribe called quest',
    NULL,
    'tribecalledquest.jpg'
),
(
    'antwon',
    'patton',
    NULL,
    'big boi',
    'bigboi.jpg'
),
(
    'christopher',
    'wallace',
    NULL,
    'notorious b.i.g.',
    'notoriousbig.jpg'
),
(
    NULL,
    NULL,
    'wu-tang clan',
    NULL,
    'wutang.jpg'
),
(
    NULL,
    NULL,
    'TLC',
    NULL,
    'tlc.jpg'
),
(
    'anderson',
    'cohen',
    NULL,
    'mayer hawthorne',
    'mayerhawthorne.jpg'
),
(
    'otis',
    'jackson',
    NULL,
    'madlib',
    'madlib.jpg'
),
(
    'minnie',
    'riperton',
    NULL,
    NULL,
    'minnieriperton.jpg'
),
(
    'janet',
    'jackson',
    NULL,
    NULL,
    'janetjackson.jpg'
),
(
    NULL,
    NULL,
    'SAULT',
    NULL,
    'sault.jpg'
);

INSERT INTO album (
    serial_no,
    title,
    artist_id,
    label_id,
    speed,
    size,
    sound,
    yr_released,
    price,
    rating,
    imgUrl
) VALUES (
    'JIVE-01241-41490-1',
    "midnight marauders",
    17,
    28,
    '33 rpm',
    '12"',
    'stereo',
    1993,
    19.99,
    5,
    'midnightmarauders.jpeg'
);

INSERT INTO album_to_genre (album_id, genre_id)
VALUES 
(1, 1), (1, 16), (1, 26),
(2, 1), (2, 14), (2, 15), (2, 26),
(3, 1), (3, 10),
(4, 15), (4, 16), (4, 4), (4, 27),
(5, 1), (5, 26),
(6, 1), (6, 11),
(7, 15), (7, 16), (7, 26), (7, 2),
(8, 4), (8, 15), (8, 16),
(9, 15), (9, 16), (9, 26),
(10, 4), (10, 5);