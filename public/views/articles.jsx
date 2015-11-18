'use strict';

import React from 'react';

export default React.createClass({
  propTypes: {
    recentArticles: React.PropTypes.array.isRequired
  },

  render() {
    let articles = this.props.recentArticles.map((article, index) => {
      return(
        <li className="article" key={index}>
          <h3>{article.headline.main} {(article.headline.name) ? `- ${article.headline.name}`: null}</h3>
        </li>
      );
    });

    return (
      <ul className="articles">
        {articles}
      </ul>
    );
  }
});
