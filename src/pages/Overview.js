import React from 'react';
import DocSection from '../DocSection';

export default class Overview extends React.Component {
  render() {
    return (
      <main className="col-12 col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content" role="main">

        <h1 className="display-4 mt-5">edX Styles & Patterns</h1>
        <p className="lead">This documentation serves as a visual expression of our visual styles and patterns built and extended from <a href="getbootstrap.com">Bootstrap</a>. Components here that are simple customizations of Bootstrap's components will link to the Bootstrap documentation where you can find markup and css documentation.</p>


      </main>
    );
  }
}