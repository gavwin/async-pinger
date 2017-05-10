"use strict";
const dns = require('dns');
const ping = require('net-ping');

module.exports = (host, cb) => {
  dns.lookup(host, (err, ip, fam) => {
    if (err) return cb(err);
    let session = ping.createSession();
    session.pingHost(ip, (err, target, sent, rcvd) => {
      if (err) return cb(err);
      let ms = rcvd - sent;
      cb(null, ms);
      session.close();
    });
  });
};
