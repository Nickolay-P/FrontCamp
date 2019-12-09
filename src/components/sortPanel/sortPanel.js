
import React, { Component } from 'react';

export class SortPanel extends Component {
    render() {
      return (
        <div className="sortPanel">
          <div className="foundLabel">7 movie found</div>
          <div className="sortByLabel">Sort by</div>
          <button className="releaseButton">release date</button>
          <button className="ratingButton">rating</button>
        </div>
      );
    }
  }

  
  