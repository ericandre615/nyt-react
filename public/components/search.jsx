'use strict';

import React from 'react';
import { Router } from 'react-router';

export default React.createClass({
  searchStyles: {
    'border': 'none',
    'outline': 'none'
  },
  formStyles: {
    'display': 'inline-block',
    'verticalAlign': 'middle'
  },
  contextTypes: {
    router: React.PropTypes.func.isRequired
  },

  handleSubmit(e) {
    e.preventDefault();
    var router = this.context.router;
    var search_query = this.refs.search_query.getDOMNode().value;
    router.transitionTo('results', {search_query: search_query});
  },

  render() {
    return (
      <form className="pull-right"
        onSubmit={this.handleSubmit}
        style={this.formStyles}>
        <input className="form-control"
          type="search"
          name="search_query"
          style={this.searchStyles}
          placeholder="Search Articles"
          ref="search_query" />
      </form>
    );
  }
});
