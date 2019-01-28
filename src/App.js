import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

import ScrollToTop from './ScrollToTop';
import './App.scss';

import Header from './Header';
import Basics from './pages/Basics';
import Navigation from './pages/Navigation';
import Content from './pages/Content';
import Miscellaneous from './pages/Miscellaneous';
import Overview from './pages/Overview';

class App extends Component {
  render() {
    return (
      <Router basename="edx-bootstrap/">
      {/* <ScrollToTop>  - this was interfering with anchor tags, unfortunately.  Commenting out for now so nav works decently.  */}
      <div>
        <div className="container-fluid">
        <div className="row flex-xl-no-wrap">
          <div className="col-12 col-md-3 col-xl-2 bd-sidebar">
            <h3 className="bd-toc-link mt-0 pt-0"><NavLink to="/">edX Bootstrap</NavLink></h3>
            <h5 className="bd-toc-link mt-5"><NavLink to="/Basics#top">Basics</NavLink></h5>
            <ul className="nav flex-column">
              <li><HashLink to="/Basics#colors">Colors</HashLink></li>
              <li><HashLink to="/Basics#typography">Typography</HashLink></li>
              <li><HashLink to="/Basics#buttons">Buttons</HashLink></li>
              <li><HashLink to="/Basics#icons">Icons</HashLink></li>
              <li><HashLink to="/Basics#themes">Themes</HashLink></li>
            </ul>
            <h5 className="bd-toc-link mt-4"><NavLink to="/Navigation">Navigation</NavLink></h5>
            <ul className="nav flex-column">
              <li><HashLink to="/Navigation#links">Links</HashLink></li>
              <li><HashLink to="/Navigation#breadcrumbs">Breadcrumbs</HashLink></li>
              <li><HashLink to="/Navigation#tabs">Tabs</HashLink></li>
              <li><HashLink to="/Navigation#search">Search</HashLink></li>
            </ul>
            <h5 className="bd-toc-link mt-4"><NavLink to="/Content">Content</NavLink></h5>
            <ul className="nav flex-column">
              <li><HashLink to="/Content#forms">Forms</HashLink></li>
              <li><HashLink to="/Content#cards">Cards</HashLink></li>
              <li><HashLink to="/Content#heroes">Heroes</HashLink></li>
              <li><HashLink to="/Content#tables">Tables</HashLink></li>
              <li><HashLink to="/Content#dialogs">Dialogs</HashLink></li>
              <li><HashLink to="/Content#factSheet">Fact Sheet</HashLink></li>
              <li><HashLink to="/Content#quizzes">Quizzes</HashLink></li>
              <li><HashLink to="/Content#accordions">Accordions</HashLink></li>
            </ul>
            <h5 className="bd-toc-link mt-4"><NavLink to="/Miscellaneous">Miscellaneous</NavLink></h5>
            <ul className="nav flex-column">
              <li><HashLink to="/Miscellaneous#loaders">Spinners / Loaders</HashLink></li>
            </ul>

            <h5 className="bd-toc-link mt-4">External Links</h5>
            <ul className="nav flex-column">
              <li><a href="https://getbootstrap.com/docs/4.2/getting-started/introduction/">Bootstrap Docs</a></li>
              <li><a className="nav-link " href="https://github.com/edx/edx-bootstrap/tree/update-with-documentation-site">This project on Github</a></li>
            </ul>
          </div>

          <Route exact path="/" component={Overview} />
          <Route exact path="/Basics" component={Basics} />
          <Route path="/Basics#colors" component={Basics} />
          <Route path="/Basics#typography" component={Basics} />
          <Route path="/Basics#buttons" component={Basics} />
          <Route path="/Basics#icons" component={Basics} />
          <Route path="/Basics#themes" component={Basics} />
          <Route exact path="/Navigation" component={Navigation} />
          <Route path="/Navigation#links" component={Navigation} />
          <Route path="/Navigation#breadcrumbs" component={Navigation} />
          <Route path="/Navigation#tabs" component={Navigation} />
          <Route path="/Navigation#search" component={Navigation} />
          <Route exact path="/Content" component={Content} />
          <Route path="/Content#forms" component={Content} />
          <Route path="/Content#cards" component={Content} />
          <Route path="/Content#heroes" component={Content} />
          <Route path="/Content#tables" component={Content} />
          <Route path="/Content#dialogs" component={Content} />
          <Route path="/Content#factSheets" component={Content} />
          <Route path="/Content#quizzes" component={Content} />
          <Route path="/Content#accordions" component={Content} />
          <Route exact path="/Miscellaneous" component={Miscellaneous} />
          <Route path="/Miscellaneous#loaders" component={Miscellaneous} />
          </div>
        </div>
      </div>
      {/* </ScrollToTop> */}
      </Router>
    );
  }
}

export default App;
