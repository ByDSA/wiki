#!/usr/bin/env node
const { AppBackup, getLastPartOf, logSection } = require("datils");

const PROJECT_FOLDER = __dirname;
const DEST = process.argv[2] || PROJECT_FOLDER;
require("dotenv").config({path: `${PROJECT_FOLDER}/.env`});

const appBackup = new AppBackup({
  path: PROJECT_FOLDER,
  dest: DEST
});
appBackup.addDB({
  type: 'postgres',
  host: process.env.DB_HOST,
  name: process.env.DB_NAME,
  password: process.env.DB_PASS,
  username: process.env.DB_USER
});
appBackup.addFile(".env");
appBackup.make();