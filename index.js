"use strict";
const dns = require('dns');
const ping = require('net-ping');

module.exports = function(host, cb) {
  dns.lookup(host, function(err, ip, fam) {
    if (err) return cb(err);
    let session = ping.createSession();
    session.pingHost(ip, function(err, target, sent, rcvd){
      if (err) return cb(err);
      let ms = rcvd - sent;
      cb(null, ms);
      session.close();
    });
  });
};
