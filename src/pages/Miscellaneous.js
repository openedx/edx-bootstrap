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

          <div class="mr-5 spinner-border text-primary" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <div class="mr-5 spinner-border text-dark" role="status">
            <span class="sr-only">Loading...</span>
          </div>

          <div className="p-3 d-inline-block bg-dark">
            <div class="spinner-border text-light" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
          <br />
          <br />
          <button className="btn btn-primary mr-2" role="button">
            <div class="spinner-border spinner-border-sm text-light" role="status">
              <span class="sr-only">Loading...</span>
            </div>
            Saving
          </button>
          <button className="btn btn-outline-primary" role="button">
            <div class="spinner-border spinner-border-sm text-primary" role="status">
              <span class="sr-only">Loading...</span>
            </div>
            Saving
          </button>
        </DocSection>
        
      </main>
    );
  }
}
