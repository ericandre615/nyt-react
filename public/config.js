'use strict';

const nytApiKey = '312441b1ecc59dfe407191a5560c534a:19:73435856';

const nytApiBaseUrl = 'http://api.nytimes.com/svc/search/v2/articlesearch.json';

const nytApi = `${nytApiBaseUrl}?api-key=${nytApiKey}`;

const config = {
  nytApi: nytApi
};

module.exports = config;
