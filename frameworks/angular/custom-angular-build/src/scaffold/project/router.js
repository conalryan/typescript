// router.js

const express = require('express');
const router = require('express').Router();
const compression = require('compression');
const config = require('./ngs.config.js');

module.exports = function(app) {
  'use strict';

// ROUTER CONFIG

  app.use(function(req, res, next) {

    // CAUTION: Wide open CORS!
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type');

    if (req.method == 'OPTIONS' ) {
      res.send(200);
    }
    else {
      next();
    }

  });

  // Middleware

  app.use(compression({
    zlib: {
      level: 9
    }
  }));


 // ROUTES

  app.use('/', express.static( process.cwd() + '/' + config.build ));

  app.get('*', function (req, res) {
    res.sendFile('index.html', { root: process.cwd() + '/' + config.build });
  });

  return router;

};
