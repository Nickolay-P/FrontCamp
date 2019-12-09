import React, { Component } from 'react';

import ErrorBoudaries from './ErrorBoundaries';

import {Header} from "./header/header.js"
import {SortPanel} from "./sortPanel/sortPanel.js"
import {Main} from "./main/main.js"
import {Footer} from "./footer/footer.js"


export class Wrapper extends Component {
  render() {
    return (
      <div className="wrapper">
        <ErrorBoudaries>
          <Header />
          <SortPanel />
          <Main />
          <Footer />
        </ErrorBoudaries>
      </div>
    );
  }
}

export const App = (
    <Wrapper />
);