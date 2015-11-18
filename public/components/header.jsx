'use strict';

import React from 'react';
import Search from './search.jsx';
import { Router, Link } from 'react-router';

export default React.createClass({
  styles: {
    'backgroundColor': '#2D2A2A',
    'color': 'white',
    'padding': '12px 0',
    'boxShadow': '0 0 6px 1px rgba(0,0,0,0.5)'
  },
  h1Styles: {
    'display': 'inline-block',
    'verticalAlign': 'middle',
    'margin': 0,
    'fontSize': '2em'
  },
  liStyles: {
    'display': 'inline-block',
    'listStyle': 'none'
  },

  render() {
    return (
      <header role="banner" style={this.styles} className="navbar navbar-fixed-top">
        <div className="container" style={this.containerStyles}>
          <h1 className="text-left" style={this.h1Styles}>NYT Article API</h1>
          <Search />
            <ul className="nav nav-pills">
              <li><Link to="recent">Recent</Link></li>
              <li><Link to="average">Average</Link></li>
            </ul>
        </div>
      </header>
    );
  }
});
