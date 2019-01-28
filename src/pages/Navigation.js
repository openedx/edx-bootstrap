import React from 'react';
import DocSection from '../DocSection';

export default class Navigation extends React.Component {
  render() {
    return (
      <main className="col-12 col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content" role="main">
        <h3>Navigation</h3>
        <p className="bd-lead">Examples and usage guidelines for navigation elements.</p>

        <DocSection id="links" title="Links">
          <p className="bd-lead">Examples and usage guidelines for links.</p>
        </DocSection>

        <DocSection id="breadcrumbs" title="Breadcrumbs">
          <p className="bd-lead">Examples and usage guidelines for breadcrumbs.</p>
        </DocSection>

        <DocSection id="tabs" title="Tabs">
          <p className="bd-lead">Examples and usage guidelines for tabs.</p>
        </DocSection>

        <DocSection id="search" title="Search">
          <p className="bd-lead">Examples and usage guidelines for search interfaces.</p>
        </DocSection>
      </main>
    );
  }
}
