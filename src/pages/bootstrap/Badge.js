import React from 'react';

export default class Badge extends React.Component {
  render() {
    return (
<main className="col-12 col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content" role="main">
  <h1 className="bd-title" id="content">Badges</h1>
  <p className="bd-lead">Documentation and examples for badges, our small count and labeling component.</p>
  
  <h2 id="example"><span className="bd-content-title">Example</span></h2>
  <div className="bd-example">
    <h1>Example heading <span className="badge badge-secondary">New</span></h1>
    <h2>Example heading <span className="badge badge-secondary">New</span></h2>
    <h3>Example heading <span className="badge badge-secondary">New</span></h3>
    <h4>Example heading <span className="badge badge-secondary">New</span></h4>
    <h5>Example heading <span className="badge badge-secondary">New</span></h5>
    <h6>Example heading <span className="badge badge-secondary">New</span></h6>
  </div>
  <div className="bd-example">
    <button type="button" className="btn btn-primary">
      Notifications <span className="badge badge-light">4</span>
    </button>
  </div>
  <div className="bd-example">
    <button type="button" className="btn btn-primary">
      Profile <span className="badge badge-light">9</span>
      <span className="sr-only">unread messages</span>
    </button>
  </div>
  <h2 id="contextual-variations"><span className="bd-content-title">Contextual variations</span></h2>
  <div className="bd-example">
    <span className="badge badge-primary">Primary</span>
    <span className="badge badge-secondary">Secondary</span>
    <span className="badge badge-success">Success</span>
    <span className="badge badge-danger">Danger</span>
    <span className="badge badge-warning">Warning</span>
    <span className="badge badge-info">Info</span>
    <span className="badge badge-light">Light</span>
    <span className="badge badge-dark">Dark</span>
  </div>
  <div className="bd-callout bd-callout-warning">
    <h5 id="conveying-meaning-to-assistive-technologies">Conveying meaning to assistive technologies</h5>
    </div>
  <h2 id="pill-badges"><span className="bd-content-title">Pill badges</span></h2>
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
  <h2 id="links"><span className="bd-content-title">Links</span></h2>
  <div className="bd-example">
    <a href="#" className="badge badge-primary">Primary</a>
    <a href="#" className="badge badge-secondary">Secondary</a>
    <a href="#" className="badge badge-success">Success</a>
    <a href="#" className="badge badge-danger">Danger</a>
    <a href="#" className="badge badge-warning">Warning</a>
    <a href="#" className="badge badge-info">Info</a>
    <a href="#" className="badge badge-light">Light</a>
    <a href="#" className="badge badge-dark">Dark</a>
  </div>
</main>

    );
  }
}