'use strict';

import React from 'react';
import { Router, Route, DefaultRoute } from 'react-router';
import App from './views/app.jsx';
import Recent from './views/recent.jsx';
import Average from './views/average.jsx';
import Results from './views/results.jsx';
import FourOhFour from './views/404.jsx';

export default (
  <Route name="app" path='/' handler={App} >
    <Route name="results" path="results/:search_query" handler={Results} />
    <Route name="recent" path="articles/recent" handler={Recent} />
    <Route name="average" path="articles/average" handler={Average} />
    <Route name="404" handler={FourOhFour} />
    <DefaultRoute handler={Recent} />
  </Route>
);
