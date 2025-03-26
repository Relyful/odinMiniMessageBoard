#! /usr/bin/env node

const { Client } = require("pg");
require('dotenv').config();

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR (255),
  text VARCHAR (255),
  added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (username, text, added) 
VALUES
  ('Relyful', 'First', '2025-03-05 14:30:00'),
  ('hiq', 'hi', '2025-03-05 14:30:00'),
  ('CB', 'Good job!', '2025-03-06 14:30:00'),
  ('MD Munna Hasan Leon', '741348', '2025-03-06 14:30:00'),
  ('h', 'mr robot', '2025-03-07 14:30:00'),
  ('RelyDB', 'We on remote DB now bros!', '2025-03-25 20:30:06')
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.CONNECTION_STRING,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();