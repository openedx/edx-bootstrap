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
      <Router history={this.props.history} basename="edx-bootstrap/">
      {/* <ScrollToTop>  - this was interfering with anchor tags, unfortunately.  Commenting out for now so nav works decently.  */}
      <div>
        <Header />
        <div className="container-fluid">
        <div className="row flex-xl-no-wrap">
          <div className="col-12 col-md-3 col-xl-2 bd-sidebar">
            <h5 className="bd-toc-link mt-5"><NavLink to="/Basics">Basics</NavLink></h5>
            <ul className="nav flex-column">
              <li><HashLink to="/Basics#colors">Colors</HashLink></li>
              <li><HashLink to="/Basics#typography">Typography</HashLink></li>
              <li><HashLink to="/Basics#buttons">Buttons</HashLink></li>
              <li><HashLink to="/Basics#icons">Icons</HashLink></li>
              <li><HashLink to="/Basics#themes">Themes</HashLink></li>
            </ul>
            <h5 className="bd-toc-link mt-4"><NavLink to="/Navigation">Navigation</NavLink></h5>
            <ul className="nav flex-column">
              <li><NavLink to="/Navigation#links">Links</NavLink></li>
              <li><NavLink to="/Navigation#breadcrumbs">Breadcrumbs</NavLink></li>
              <li><NavLink to="/Navigation#tabs">Tabs</NavLink></li>
              <li><NavLink to="/Navigation#search">Search</NavLink></li>
            </ul>
            <h5 className="bd-toc-link mt-4"><NavLink to="/Content">Content</NavLink></h5>
            <ul className="nav flex-column">
              <li><NavLink to="/Content#forms">Forms</NavLink></li>
              <li><NavLink to="/Content#cards">Cards</NavLink></li>
              <li><NavLink to="/Content#heroes">Heroes</NavLink></li>
              <li><NavLink to="/Content#tables">Tables</NavLink></li>
              <li><NavLink to="/Content#dialogs">Dialogs</NavLink></li>
              <li><NavLink to="/Content#factSheet">Fact Sheet</NavLink></li>
              <li><NavLink to="/Content#quizzes">Quizzes</NavLink></li>
            </ul>
            <h5 className="bd-toc-link mt-4"><NavLink to="/Miscellaneous">Miscellaneous</NavLink></h5>
            <ul className="nav flex-column">
              <li><NavLink to="/Miscellaneous#loaders">Spinners / Loaders</NavLink></li>
            </ul>

            <h5 className="bd-toc-link mt-4">External Links</h5>
            <ul className="nav flex-column">
              <li><a href="https://getbootstrap.com/docs/4.1/getting-started/introduction/">Bootstrap Docs</a></li>
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
          <Route path="/Content#factSheet" component={Content} />
          <Route path="/Content#quizzes" component={Content} />
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
