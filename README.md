# async-pinger
Ping a website asynchronously with async-pinger.

[![downloads](https://img.shields.io/npm/dt/async-pinger.svg)](https://www.npmjs.com/package/async-pinger)
[![npm](https://img.shields.io/npm/v/async-pinger.svg)](https://www.npmjs.com/package/async-pinger)

[![npm](https://nodei.co/npm/async-pinger.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/async-pinger)

# Example
```js
const ping = require('async-pinger');

ping('google.com', (err, ms) => {
  if (err) console.error(err);
  console.log(`took ${ms}ms to ping google.com`);
});
```
