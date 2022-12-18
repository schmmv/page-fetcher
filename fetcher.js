const request = require('request');
const fs = require('fs');
// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin, 
//   output: process.stdout,
// });

const writeFile = function(fileName, body, callback) {
  fs.writeFile(fileName, body, (err) => {
    if (err) {
      callback(`WriteFile error: ${err}`, null);
      return;
    }
    fs.stat(fileName, (err, stats) => {
      if (err) {
        callback(`Stats error: ${err}`, null);
        return;
      }
      callback(null, `Downloaded and saved ${stats.size} bytes to ${fileName}`);
    });
  });
};

const fetchPage = function(url, callback) {
  request(url, (error, response, body) => {
      if (error) {
        callback(`Request error: ${error}`, null);
        return;
      }
      callback(null, body);
    });
};

const fetchPageAndWrite = function(url, fileName, callback) {
  fetchPage(url, (error, data) => {
    if (error) {
      return callback(error, null)
    }
    writeFile(fileName, data, (error, data) => {
      if (error) {
        return callback(error, null) 
      }
      callback(null, data);
    });
  });
};

module.exports = { fetchPageAndWrite };


//if the file does exist:
// if (fs.existsSync(fileName)) {
//   rl.question('Do you want to overwrite the file? Y/N', (answer) => {
//       console.log('answer:', answer);
//       if (answer.toLowerCase() === 'n') {
//         console.log('Exiting the program..');
//         rl.close();
//         return;
//       }
//         request(uRL, (error, response, body) => {
//           if (error) {
//             console.log(error);
//             return;
//           }
//           writeFile(body);
//           rl.close();
//         });
//   });
// } else {  //if file doesn't exist
//   rl.close();
//   request(uRL, (error, response, body) => {
//     if (error) {
//       console.log(error);
//       return;
//     }
//     writeFile(body);
//   })
// };
  


