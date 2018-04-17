#!/usr/local/bin/node
const request = require('then-request');

request('GET', 'https://keicat.com:3001/meal').done(function (res) {
  const meal = JSON.parse(res.getBody())
  console.log(`아침 : ${meal.조식.join(', ')} \n`)
  console.log(`점심 : ${meal.중식.join(', ')} \n`)
  console.log(`저녁 : ${meal.석식.join(', ')} \n`)
})
