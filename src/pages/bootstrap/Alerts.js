import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckCircle,
  faExclamationTriangle,
  faInfoCircle,
  faExclamationCircle,
  faTimes
} from '@fortawesome/free-solid-svg-icons';

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
          <li>Close icon hover states? Talk to Abby</li>
        </ul>

        <h2>Notes</h2>
        <ul>
          <li>The four below are representative samples.  The various buttons/links are optional.</li>
        </ul>

        <div className="alert alert-success d-flex alert-dismissible fade show" role="alert">
          <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <FontAwesomeIcon aria-hidden="true" className="fa-xs" icon={faTimes} />
          </button>
          <div className="d-flex">
            <div className="flex-grow-0 mr-2">
              <FontAwesomeIcon icon={faCheckCircle} />
            </div>
            <div className="flex-grow-1">
              <div>Well done!</div>
              <p>You've successfully read this important alert message.</p>
              <button className="btn btn-outline-primary">Do the thing</button>
            </div>
          </div>
        </div>

        <div className="alert alert-danger d-flex" role="alert">
          <div className="flex-grow-0 mr-2">
            <FontAwesomeIcon icon={faExclamationCircle} />
          </div>
          <div className="flex-grow-1">
            <div>Oh snap!</div>
            <p>Change a few things up and try submitting again.</p>
            <ul>
              <li>You forgot to tell me I'm handsome.</li>
              <li>Please upload a copy of your house key.</li>
              <li>The cat requires that you compliment him.</li>
            </ul>
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
            <p>This alert needs your attention, but not urgently.</p>
            <button className="btn btn-outline-primary mr-3">Do the thing</button>
            <a href="#">Need help?</a>
          </div>
        </div>
      </main>
    );
  }
}
