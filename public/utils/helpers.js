'use strict';

let axios = require('axios');
let config = require('../config');

const searchArticles = (query) => {
  return axios.get(`${config.nytApi}&q=${query}`);
};

const getRecentArticles = () => {
  return axios.get(`${config.nytApi}&sort=newest`)
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
