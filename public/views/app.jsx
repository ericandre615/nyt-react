'use strict';

import Layout from './layout.jsx';
import React from 'react';
import { RouteHandler } from 'react-router';

export default React.createClass({

  render() {
    return (
      <Layout {...this.props}>
        <RouteHandler {...this.props}/>
      </Layout>
    );
  }
});
