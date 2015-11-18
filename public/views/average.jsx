'use strict';

import React from 'react';
import { getArticlesByDays } from '../utils/helpers';

export default React.createClass({

  getAverage(total, occurrences) {
    return Math.floor(total / occurrences);
  },

  getInitialState() {
    return {
      days: [
        {'day': 'monday', 'occurrences': 52, 'average': 0},
        {'day': 'tuesday', 'occurrences': 52, 'average': 0},
        {'day': 'wednesday', 'occurrences': 53, 'average': 0},
        {'day': 'thursday', 'occurrences': 52, 'average': 0},
        {'day': 'friday', 'occurrences': 52, 'average': 0},
        {'day': 'saturday', 'occurrences': 52, 'average': 0},
        {'day': 'sunday', 'occurrences': 52, 'average': 0}
      ]
    };
  },

  componentDidMount() {
    let days = this.state.days;

    days.forEach((day) => {
      getArticlesByDays(day.day)
        .then((data) => {
          let total = data.data.response.meta.hits;
          let average = this.getAverage(total, day.occurrences);

          day.average = average;

          this.setState({days: days});
        })
        .then(null, (err) => {
          throw new Error(err);
        });
    });
  },

  render() {
    let averagesHeaders = this.state.days.map((day, index) => {
      return (
        <th>
          {day.day}
        </th>
      )
    });
    let averages = this.state.days.map((day, index) => {
      return(
        <td key={index}>
          {day.average}
        </td>
      );
    });

    return(
      <section>
        <h2>Average articles per day for 2014</h2>
        <table className="table">
          <thead>
              <tr>
                {averagesHeaders}
              </tr>
          </thead>
          <tbody>
            <tr>
              {averages}
            </tr>
          </tbody>
          <tfoot>
          </tfoot>
        </table>
      </section>
    );
  }
});
