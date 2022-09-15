import React from 'react';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
<header className="navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar">
  <a className="navbar-brand mr-0 mr-md-2" href="/" aria-label="Bootstrap">edX Bootstrap
  </a>
  <div className="navbar-nav-scroll">
    <ul className="navbar-nav bd-navbar-nav flex-row">
      <li className="nav-item">
        <a className="nav-link active" href="/">Documentation</a>
      </li>
    </ul>
  </div>

  <ul className="navbar-nav flex-row ml-md-auto d-none d-md-flex">
    <li className="nav-item">
      <a className="nav-link " href="https://github.com/openedx/edx-bootstrap/tree/update-with-documentation-site">This github branch</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="https://getbootstrap.com/docs/4.2/getting-started/introduction/">Original Bootstrap Docs</a>
    </li>
  </ul>
</header>

    );
  }
}