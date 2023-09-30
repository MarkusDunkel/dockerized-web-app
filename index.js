import pg from 'pg';
import express from 'express';
import bodyParser from 'body-parser';

const { Client } = pg;

const client = new Client({
  user: 'postgres',
  host: 'db',
  database: 'postgres',
  password: '1234',
  port: 5432,
});
client.connect();