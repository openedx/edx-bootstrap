import React from 'react';
import DocSection from '../DocSection';

export default class Miscellaneous extends React.Component {
  render() {
    return (
      <main className="col-12 col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content" role="main">
        <h3>Miscellaneous</h3>
        <p className="bd-lead">Examples and usage guidelines for various styles.</p>

        <DocSection id="loaders" title="Spinners / Loaders">
          <p className="bd-lead">Examples and usage guidelines for loaders.</p>
        </DocSection>
      </main>
    );
  }
}
