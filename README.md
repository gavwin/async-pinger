# async-pinger
Ping a website asynchronously with async-pinger.

# Example
```js
const ping = require('async-pinger');

ping('google.com', function(err, ms) {
  if (err) console.error(err);
  console.log('took', ms);
});
```
