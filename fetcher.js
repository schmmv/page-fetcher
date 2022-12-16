const request = require('request');
const fs = require('fs');

const input = process.argv.slice(2);
const uRL = input[0];
const fileName = input[1];

request(uRL, (error, response, body) => {
  fs.writeFile(fileName, body, (err) => {
    if (err) {
      console.log('WriteFile error:', err);
      return;
    }
    fs.stat(fileName, (err, stats) => {
      if (err) {
        console.log('stats error:', err);
        return;
      }
      console.log(`Downloaded and saved ${stats.size} bytes to ${fileName}`);
    });
  });
});