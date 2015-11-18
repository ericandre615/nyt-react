'use strict';

import React from 'react';
import { getRecentArticles } from '../utils/helpers';
import Articles from './articles.jsx';

export default React.createClass({
  componentWillMount() {
    this.state = {
      recentArticles: []
    }
  },

  componentDidMount() {
    getRecentArticles()
      .then((data) => {
        this.setState({
          recentArticles: data.data.response.docs
        });
      });
  },

  render() {
    return (
      <div>
        <h2>Recent Articles</h2>
        <Articles recentArticles={this.state.recentArticles} />
      </div>
    );
  }
});
