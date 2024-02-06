CREATE TABLE IF NOT EXISTS users(
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
);

CREATE TABLE IF NOT EXISTS apartements(
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    price INT NOT NULL,
    location VARCHAR(255) NOT NULL,
    developer VARCHAR(255) NOT NULL,
    bedrooms INT NOT NULL,
    bathrooms INT NOT NULL,
    type VARCHAR(255) NOT NULL,
    area INT NOT NULL,
);

CREATE INDEX ON products(user_id);

