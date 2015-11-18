'use strict';

import Layout from './layout.jsx';
import React from 'react';

export default React.createClass({

  render() {
    return (
      <Layout {...this.props}>
        <h3>URL: {this.props.url} - Not Found(404)</h3>
      </Layout>
    );
  }
});
