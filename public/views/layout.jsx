'use strict';

import React from 'react';
import Header from '../components/header.jsx';

export default React.createClass({
  render() {
    return (
      <html>
        <head>
          <meta charSet='utf-8' />
          <title>
            {this.props.title}
          </title>
          <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" />
        </head>
        <body id="app">
          <Header />
          <main role="main" className="container" style={{'paddingTop': '8em'}}>
            {this.props.children}
          </main>
        </body>
        <script src='/bundle.js'></script>
      </html>
    );
  }
});
