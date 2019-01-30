import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faExclamationTriangle, faInfoCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

export default class Alerts extends React.Component {
  render() {
    return (
      <main className="col-12 col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content" role="main">
        <h1 className="bd-title" id="content">
          Alerts
        </h1>
        <p className="bd-lead">
          Provide contextual feedback messages for typical user actions with the handful of available and flexible alert
          messages.
        </p>

        <h2>Todo:</h2>
        <ul>
          <li>Update to match Abby's designs</li>



          <li>Buttons in here should always be secondary button (outline-primary)</li>
          <li>Close icon should be font awesome and black.</li>
          <li>Close icon hover states? Talk to Abby</li>
        </ul>

        <div className="alert alert-success d-flex" role="alert">
          <div className="flex-grow-0 mr-2">
            <FontAwesomeIcon icon={faCheckCircle} />
          </div>
          <div className="flex-grow-1">
            <div>Well done!</div>
            <div>You've successfully read this important alert message.</div>
            <button className="btn btn-secondary">Do the thing</button>
          </div>
        </div>

        <div className="alert alert-danger d-flex" role="alert">
          <div className="flex-grow-0 mr-2">
            <FontAwesomeIcon icon={faExclamationCircle} />
          </div>
          <div className="flex-grow-1">
            <div>Oh snap!</div>
            <p>Change a few things up and try submitting again.</p>
            <a href="#">Need help?</a>
          </div>
        </div>

        <div className="alert alert-warning d-flex" role="alert">
          <div className="flex-grow-0 mr-2">
            <FontAwesomeIcon icon={faExclamationTriangle} />
          </div>
          <div className="flex-grow-1">
            <div>Warning!</div>
            <div>Better check yourself before you wreck yourself.</div>
          </div>
        </div>

        <div className="alert alert-info d-flex" role="alert">
          <div className="flex-grow-0 mr-2">
            <FontAwesomeIcon icon={faInfoCircle} />
          </div>
          <div className="flex-grow-1">
            <div>Heads up!</div>
            <div>This alert needs your attention, but not urgently.</div>
          </div>
        </div>

        <div className="bd-example">
          <div className="alert alert-success" role="alert">
            Success: Text should be black.{' '}
            <a href="#" className="alert-link">
              An example link
            </a>
            .
          </div>
          <div className="alert alert-danger" role="alert">
            Danger: Text should be black.{' '}
            <a href="#" className="alert-link">
              An example link
            </a>
            .
          </div>
          <div className="alert alert-warning" role="alert">
            Warning: Text should be black.{' '}
            <a href="#" className="alert-link">
              An example link
            </a>
            .
          </div>
          <div className="alert alert-info" role="alert">
            Info: Text should be black.{' '}
            <a href="#" className="alert-link">
              An example link
            </a>
            .
          </div>
        </div>
        <h3 id="additional-content">
          <span className="bd-content-title">Additional content</span>
        </h3>

        <div className="bd-example">
          <div className="alert alert-success" role="alert">
            <h4 className="alert-heading">Well done!</h4>
            <p>
              Aww yeah, you successfully read this important alert message. This example text is going to run a bit
              longer so that you can see how spacing within an alert works with this kind of content.
            </p>
            <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
          </div>
        </div>
        <h3 id="dismissing">
          <span className="bd-content-title">Dismissing</span>
        </h3>

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
