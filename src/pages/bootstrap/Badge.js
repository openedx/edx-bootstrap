import React from 'react';

export default class Badge extends React.Component {
  render() {
    return (
<main className="col-12 col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content" role="main">
  <h1 className="bd-title" id="content">Badges</h1>
  <p className="bd-lead">Documentation and examples for badges, our small count and labeling component.</p>
  
  <h2>Todo:</h2>
  <ul>
    <li>Make default .badge class be pills</li>
    <li>Abby: to provide design</li>
  </ul>

  <h2 id="pill-badges"><span className="bd-content-title">Pill badges /tags</span></h2>
  <div className="bd-example">
    <span className="badge badge-pill badge-primary">Primary</span>
    <span className="badge badge-pill badge-secondary">Secondary</span>
    <span className="badge badge-pill badge-success">Success</span>
    <span className="badge badge-pill badge-danger">Danger</span>
    <span className="badge badge-pill badge-warning">Warning</span>
    <span className="badge badge-pill badge-info">Info</span>
    <span className="badge badge-pill badge-light">Light</span>
    <span className="badge badge-pill badge-dark">Dark</span>
  </div>
</main>

    );
  }
}