#!/usr/bin/node

const request = require('request');

const url = process.argv[2];

request(url, (error, response, body) => {
  if (error) {
    console.error(error);
  } else {
    const todos = JSON.parse(body);
    const completedTasks = todos.filter(todo => todo.completed);
    const completedTasksByUserId = {};
    completedTasks.forEach(todo => {
      const userId = todo.userId;
      if (!completedTasksByUserId[userId]) {
        completedTasksByUserId[userId] = 0;
      }
      completedTasksByUserId[userId]++;
    });
    console.log(completedTasksByUserId);
  }
});
