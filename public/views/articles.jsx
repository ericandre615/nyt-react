'use strict';

import React from 'react';

export default React.createClass({
  propTypes: {
    recentArticles: React.PropTypes.array.isRequired
  },

  render() {
    let articles = this.props.recentArticles.map((article, index) => {
      let headline = (article.headline.name) ? article.headline.main += ' - ' + article.headline.name : article.headline.main;
      return(
        <li className="article" key={index}>
          <h3 dangerouslySetInnerHTML={{__html: headline}} />
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
