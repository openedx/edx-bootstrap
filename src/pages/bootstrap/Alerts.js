import React from 'react';

export default class Alerts extends React.Component {
  render() {
    return (
<main className="col-12 col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content" role="main">
  <h1 className="bd-title" id="content">Alerts</h1>
  <p className="bd-lead">Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.</p>
  
  <div className="bd-example">
    <div className="alert alert-success" role="alert">
      A simple success alert—check it out!
    </div>
    <div className="alert alert-danger" role="alert">
      A simple danger alert—check it out!
    </div>
    <div className="alert alert-warning" role="alert">
      A simple warning alert—check it out!
    </div>
    <div className="alert alert-info" role="alert">
      A simple info alert—check it out!
    </div>
  </div>
  <h3 id="link-color"><span className="bd-content-title">Link color</span></h3>
  <div className="bd-example">
    <div className="alert alert-success" role="alert">
      A simple success alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
    </div>
    <div className="alert alert-danger" role="alert">
      A simple danger alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
    </div>
    <div className="alert alert-warning" role="alert">
      A simple warning alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
    </div>
    <div className="alert alert-info" role="alert">
      A simple info alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
    </div>
  </div>
  <h3 id="additional-content"><span className="bd-content-title">Additional content</span></h3>

  <div className="bd-example">
    <div className="alert alert-success" role="alert">
      <h4 className="alert-heading">Well done!</h4>
      <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
      <hr />
      <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
    </div>
  </div>
  <h3 id="dismissing"><span className="bd-content-title">Dismissing</span></h3>
  
  <div className="bd-example">
    <div className="alert alert-warning alert-dismissible fade show" role="alert">
      <strong>Holy guacamole!</strong> You should check in on some of those fields below.
      <button type="button" className="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">×</span>
      </button>
    </div>
  </div>
  
</main>

    );
  }
}