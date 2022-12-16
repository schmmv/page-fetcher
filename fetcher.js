const request = require('request');
const fs = require('fs');
const args = process.argv.slice(2);
request(args[0], (error, response, body) => {
  console.log(response.statusCode);
  fs.writeFile(args[1], body, (err) => {
    if (err) {
      console.log(err);
    }
    fs.stat(args[1], (err, stats) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(`Downloaded and saved ${stats.size} bytes to ${args[1]}`);
    })
  });
})