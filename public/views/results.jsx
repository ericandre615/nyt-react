import React from 'react';
import { searchArticles } from '../utils/helpers';

export default React.createClass({
  getInitialState() {
    return {
      search_query: this.props.params.search_query,
      searchResults: []
    }
  },
  componentWillReceiveProps(nextProps) {
    this.search_query = nextProps.params.search_query;
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
      let headline = (result.headline.name) ? result.headline.main += ' - ' + result.headline.name : result.headline.main;
      return(
        <li className="article" key={index}>
          <h3 dangerouslySetInnerHTML={{__html: headline}} />
          <p dangerouslySetInnerHTML={{__html: result.snippet}} />
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
