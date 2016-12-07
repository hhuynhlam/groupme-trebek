const question = require('./lib/question');
const sendMessage = require('./lib/sendMessage');

function respond() {
  const input = JSON.parse(this.req.chunks[0]).text;

  this.res.writeHead(200);

  if (/^\/trebek tell.*$/.test(input)) {
    sendMessage(input);
  } else if (/^\/trebek question.*$/.test(input)) {
    question(input);
  } else {
    console.log('No match for request. Doing nothing.');
  }

  this.res.end();
}

exports.respond = respond;
