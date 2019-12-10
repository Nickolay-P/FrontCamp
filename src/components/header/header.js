import React, { Component } from 'react';

import {Search} from "./search/search.js"
import {FilmInfo} from "./filmInfo/filmInfo.js"
export class Header extends Component {
    render() {
      return (
        <div className="header">
            <Search />
        </div>
        // <div className="header">
        //      <FilmInfo />    
        // </div>
      );
    }
  }

