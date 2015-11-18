import React from 'react';
import { searchArticles } from '../utils/helpers';

export default React.createClass({
  componentWillMount() {
    this.state = {
      search_query: this.props.params.search_query,
      searchResults: []
    }
  },
  componentWillReceiveProps() {
    this.search_query = this.props.params.search_query;
    searchArticles(this.search_query)
      .then((data) => {
        this.setState({
          searchResults: data.data.response.docs
        });
      });
  },
  componentDidMount() {
    this.search_query = this.props.params.search_query;
    searchArticles(this.search_query)
      .then((data) => {
        this.setState({
          searchResults: data.data.response.docs
        });
      });
  },
  render() {
    let results = this.state.searchResults.map((result, index) => {
      return(
        <li className="article" key={index}>
          <h3>{result.headline.main} {(result.headline.name) ? `- ${article.headline.name}`: null}</h3>
          <p>{result.snippet}</p>
        </li>
      );
    });
    return(
      <div className="container">
        <h3>Search Results</h3>
          <ul className="articles">
            {(this.state.searchResults) ? results : 'No Results Found.'}
          </ul>
      </div>
    );
  }
});
