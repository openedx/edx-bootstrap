import React from 'react';

export default class Navigation extends React.Component {
  render() {
    return (
      <main className="col-12 col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content" role="main">
        <h3>
        Navigation
        </h3>
        <p className="bd-lead">Examples and usage guidelines for navigation elements.</p>

        <a href="#links" id="links"><h3>Links</h3></a>
        <p className="bd-lead">Examples and usage guidelines for links.</p>

        <a href="#breadcrumbs" id="breadcrumbs"><h3>Breadcrumbs</h3></a>
        <p className="bd-lead">Examples and usage guidelines for breadcrumbs.</p>

        <a href="#tabs" id="tabs"><h3>Tabs</h3></a>
        <p className="bd-lead">Examples and usage guidelines for tabs.</p>

        <a href="#search" id="search"><h3>Search</h3></a>
        <p className="bd-lead">Examples and usage guidelines for search interfaces.</p>

      </main>
    );
  }
}
