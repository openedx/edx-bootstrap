import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import Basics from './pages/Basics';
import Navigation from './pages/Navigation';
import Forms from './pages/Forms';
import Miscellaneous from './pages/Miscellaneous';
import Overview from './pages/Overview';
import Examples from './pages/Examples';
import GettingStarted from './pages/GettingStarted';

import Alerts from './pages/bootstrap/Alerts';
import Badge from './pages/bootstrap/Badge';
import Cards from './pages/bootstrap/Cards';
import Collapse from './pages/bootstrap/Collapse';
import Dropdowns from './pages/bootstrap/Dropdowns';
import Grid from './pages/bootstrap/Grid';
import Modal from './pages/bootstrap/Modal';
import Pagination from './pages/bootstrap/Pagination';
import Popovers from './pages/bootstrap/Popovers';
import Progress from './pages/bootstrap/Progress';
import Tables from './pages/bootstrap/Tables';

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div>
          <div className="container-fluid m-0">
            <div className="row flex-xl-no-wrap">
              <div className="col-12 col-md-3 col-xl-2 bd-sidebar">
                <h5 className="bd-toc-link mt-0 pt-0">
                  <NavLink to="/">edX Bootstrap</NavLink>
                </h5>
                <ul className="nav flex-column">
                  <li>
                    <HashLink to="/">Overview</HashLink>
                  </li>
                  <li>
                    <HashLink to="/GettingStarted">Getting Started</HashLink>
                  </li>
                </ul>

                <h5 className="bd-toc-link mt-5">
                  <NavLink to="/Basics#top">Basics</NavLink>
                </h5>
                <ul className="nav flex-column">
                  <li>
                    <HashLink to="/Basics#colors">Colors</HashLink>
                  </li>
                  <li>
                    <HashLink to="/Basics#typography">Typography</HashLink>
                  </li>
                  <li>
                    <HashLink to="/Basics#buttons">Buttons</HashLink>
                  </li>
                  <li>
                    <HashLink to="/Basics#links">Links</HashLink>
                  </li>
                  <li>
                    <HashLink to="/Basics#icons">Icons</HashLink>
                  </li>
                </ul>
                <h5 className="bd-toc-link mt-4">
                  <NavLink to="/Navigation">Navigation</NavLink>
                </h5>
                <ul className="nav flex-column">
                  <li>
                    <HashLink to="/Navigation#breadcrumbs">Breadcrumbs</HashLink>
                  </li>
                  <li>
                    <HashLink to="/Navigation#navs">Navs</HashLink>
                  </li>
                  <li>
                    <HashLink to="/Navigation#tabs">Tabs</HashLink>
                  </li>
                  <li>
                    <HashLink to="/Navigation#search">Search</HashLink>
                  </li>
                </ul>
                <h5 className="bd-toc-link mt-4">Content</h5>
                <ul className="nav flex-column">
                  <li>
                    <HashLink to="/Forms">Forms</HashLink>
                  </li>
                  <li>
                    <HashLink to="/Cards">Cards</HashLink>
                  </li>
                  <li>
                    <NavLink to="/Alerts">Alerts</NavLink>
                  </li>
                  <li>
                    <NavLink to="/Badge">Badge</NavLink>
                  </li>
                  <li>
                    <NavLink to="/Dropdowns">Dropdowns</NavLink>
                  </li>
                  <li>
                    <NavLink to="/Modal">Modal</NavLink>
                  </li>
                  <li>
                    <NavLink to="/Pagination">Pagination</NavLink>
                  </li>
                  <li>
                    <NavLink to="/Tables">Tables</NavLink>
                  </li>
                </ul>
                <h5 className="bd-toc-link mt-4">
                  <NavLink to="/Miscellaneous">Miscellaneous</NavLink>
                </h5>
                <ul className="nav flex-column">
                  <li>
                    <HashLink to="/Miscellaneous#loaders">Spinners / Loaders</HashLink>
                  </li>
                </ul>
                <h5 className="bd-toc-link mt-4">
                  <NavLink to="/Examples">Examples</NavLink>
                </h5>
                <ul className="nav flex-column">
                  <li>
                    <HashLink to="/Examples#example1">Example 1</HashLink>
                  </li>
                </ul>

                <h5 className="bd-toc-link mt-4">In Progress Components</h5>
                <ul className="nav flex-column">
                  <li>
                    <NavLink to="/Bootstrap/Grid">Grid</NavLink>
                  </li>
                  <li>
                    <NavLink to="/Bootstrap/Popovers">Popovers</NavLink>
                  </li>
                  <li>
                    <NavLink to="/Bootstrap/Collapse">Collapse</NavLink>
                  </li>
                  <li>
                    <NavLink to="/Bootstrap/Progress">Progress</NavLink>
                  </li>
                </ul>

                <h5 className="bd-toc-link mt-4">External Links</h5>
                <ul className="nav flex-column">
                  <li>
                    <a href="https://getbootstrap.com/docs/4.2/getting-started/introduction/">Bootstrap Docs</a>
                  </li>
                  <li>
                    <a
                      className="nav-link "
                      href="https://github.com/edx/edx-bootstrap/tree/update-with-documentation-site"
                    >
                      This project on Github
                    </a>
                  </li>
                </ul>
              </div>

              <Route exact path="/" component={Overview} />
              <Route exact path="/GettingStarted" component={GettingStarted} />
              <Route exact path="/Basics" component={Basics} />

              {/* Basics */}
              <Route path="/Basics#colors" component={Basics} />
              <Route path="/Basics#typography" component={Basics} />
              <Route path="/Basics#buttons" component={Basics} />
              <Route path="/Basics#icons" component={Basics} />
              <Route path="/Basics#themes" component={Basics} />

              {/* Navigation */}
              <Route exact path="/Navigation" component={Navigation} />
              <Route path="/Navigation#links" component={Navigation} />
              <Route path="/Navigation#breadcrumbs" component={Navigation} />
              <Route path="/Navigation#tabs" component={Navigation} />
              <Route path="/Navigation#search" component={Navigation} />

              {/* Content */}
              <Route path="/Forms" component={Forms} />
              <Route path="/Cards" component={Cards} />
              <Route path="/Alerts" component={Alerts} />
              <Route path="/Badge" component={Badge} />
              <Route path="/Dropdowns" component={Dropdowns} />
              <Route path="/Modal" component={Modal} />
              <Route path="/Pagination" component={Pagination} />
              <Route path="/Tables" component={Tables} />

              {/* Miscellaneous */}
              <Route exact path="/Miscellaneous" component={Miscellaneous} />
              <Route path="/Miscellaneous#loaders" component={Miscellaneous} />

              {/* Examples */}
              <Route path="/Examples" component={Examples} />

              {/* Bootstrap documentation pages */}
              <Route path="/Bootstrap/Collapse" component={Collapse} />
              <Route path="/Bootstrap/Grid" component={Grid} />
              <Route path="/Bootstrap/Popovers" component={Popovers} />
              <Route path="/Bootstrap/Progress" component={Progress} />
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
