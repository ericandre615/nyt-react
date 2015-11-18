'use strict';

let axios = require('axios');
let config = require('../config');

const searchArticles = (query) => {
  return axios.get(`${config.nytApi}&q=${query}`);
};

const getRecentArticles = () => {
  let today = new Date();
  let month = (today.getMonth().toString().length > 1) ? today.getMonth() + 1 : '0'+today.getMonth()+1;
  let year = today.getFullYear();
  let day = (today.getDate().toString().length > 1) ? today.getDate() : '0'+today.getDate();

  let formattedDate = ''+ year + month + day + ''; // having the empty '' with + forces values to string so they are concatenated rather than addition

  return axios.get(`${config.nytApi}&sort=newest&end_date=${formattedDate}`)
    .then(response => {
      return response;
    })
    .then(null, err => {
      throw new Error(err);
    });
};

const getArticlesByDays = (day) => {
  return axios.get(`${config.nytApi}&begin_date=20140101&end_date=20141231&fq=day_of_week:${day}`)
  .then(response => {
    return response;
  })
  .then(null, err => {
    throw new Error(err);
  });
};

const helpers = {
  searchArticles: searchArticles,
  getRecentArticles: getRecentArticles,
  getArticlesByDays: getArticlesByDays
};

module.exports = helpers;
