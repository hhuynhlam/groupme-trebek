const http = require('sync-request');
const sendMessage = require('./sendMessage');

function question() {
  const request = http('GET', 'http://jservice.io/api/random?count=1');

  const response = JSON.parse(request.getBody())[0];
  const category = response.category.title;
  const prompt = response.question;
  const value = response.value || 200;

  const categoryMessage = (category) ? ` in the category: ${category}` : '';

  sendMessage(`For $${value}${categoryMessage}\n${prompt}`);
}

module.exports = question;
