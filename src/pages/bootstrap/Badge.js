import React from 'react';

export default class Badge extends React.Component {
  render() {
    return (
<main className="col-12 col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content" role="main">
  <h1 className="bd-title" id="content">Badges / Tags</h1>
  
  <h2>Notes</h2>
  <ul>
    <li>Our default badges are pills.  There's no need to use the 'badge-pill' class.</li>
  </ul>
  
  <h2>Todo:</h2>
  <ul>
    <li>Abby: to provide design</li>
  </ul>

  <div className="bd-example d-flex justify-content-between">
    <span className="badge badge-primary">Primary</span>
    <span className="badge badge-secondary">Secondary</span>
    <span className="badge badge-success">Success</span>
    <span className="badge badge-danger">Danger</span>
    <span className="badge badge-warning">Warning</span>
    <span className="badge badge-info">Info</span>
    <span className="badge badge-light">Light</span>
    <span className="badge badge-dark">Dark</span>
  </div>
</main>

    );
  }
}