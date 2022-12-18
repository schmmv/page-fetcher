const { fetchPageAndWrite } = require('./fetcher');

const input = process.argv.slice(2);
const url = input[0];
const fileName = input[1];

fetchPageAndWrite(url, fileName, (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Success!', data);
  }
});

