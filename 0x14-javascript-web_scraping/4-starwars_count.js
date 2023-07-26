#!/usr/bin/node

const request = require('request');

const url = process.argv[2];
const characterId = 18;

request(url, (error, response, body) => {
  if (error) {
    console.error(error);
  } else {
    const films = JSON.parse(body);
    const count = films.filter(film => film.characters.includes(characterId)).length;
    console.log(count);
  }
});
