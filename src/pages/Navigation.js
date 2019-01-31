import React from 'react';
import DocSection from '../DocSection';

export default class Navigation extends React.Component {
  render() {
    return (
      <main className="col-12 col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content" role="main">
        <h3>Navigation</h3>
        <p className="bd-lead">Examples and usage guidelines for navigation elements.</p>

        <DocSection id="breadcrumbs" title="Breadcrumbs">
          <div className="bd-example">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item active" aria-current="page">
                  Home
                </li>
              </ol>
            </nav>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Library
                </li>
              </ol>
            </nav>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Library</a>
                </li>
              </ol>
            </nav>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Library</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Data
                </li>
              </ol>
            </nav>
          </div>
        </DocSection>

        <DocSection id="navs" title="Navs">
          <p>
            Navigation available in Bootstrap share general markup and styles, from the base{' '}
            <code className="highlighter-rouge">.nav</code> class to the active and disabled states. Swap modifier
            classes to switch between each style.
          </p>

          <div className="bd-example">
            <ul className="nav">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Active
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">
                  Disabled
                </a>
              </li>
            </ul>
          </div>
        </DocSection>

        <DocSection id="tabs" title="Tabs">
          <p className="bd-lead">Examples and usage guidelines for tabs.</p>
          <p>
            Takes the basic nav from above and adds the <code className="highlighter-rouge">.nav-tabs</code> class to
            generate a tabbed interface. Use them to create tabbable regions with our{' '}
            <a href="#javascript-behavior">tab JavaScript plugin</a>.
          </p>
          <div className="bd-example">
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Active
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">
                  Disabled
                </a>
              </li>
            </ul>
          </div>
        </DocSection>

        <DocSection id="search" title="Search">
          <p className="bd-lead">Examples and usage guidelines for search interfaces.</p>
        </DocSection>
      </main>
    );
  }
}
