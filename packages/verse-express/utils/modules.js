const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

module.exports = {
  createError,
  express,
  path,
  cookieParser,
  logger,
  cors,
};
