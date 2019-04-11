import React from 'react';

export default class Modal extends React.Component {
  render() {
    return (
      <main className="col-12 col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content" role="main">
        <h1 className="bd-title" id="content">
          Modal
        </h1>
        <p className="bd-lead">
          Use Bootstrap’s JavaScript modal plugin to add dialogs to your site for lightboxes, user notifications, or
          completely custom content.
        </p>

        <h2>To do</h2>
        <ul>
          <li>Abby: to provide design.</li>
        </ul>

        <h2 id="examples">
          <span className="bd-content-title">Examples</span>
        </h2>
        <h3 id="modal-components">
          <span className="bd-content-title">Modal components</span>
        </h3>
        <div className="bd-example bd-example-modal">
          <div className="modal" tabIndex={-1} role="dialog">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Modal title</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <p>Modal body text goes here.</p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-primary mr-2">
                    Save changes
                  </button>
                  <button type="button" className="btn btn-link" data-dismiss="modal">
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3 id="live-demo">
          <span className="bd-content-title">Live demo</span>
        </h3>
        <div
          id="exampleModalLive"
          className="modal fade"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalLiveLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLiveLabel">
                  Modal title
                </h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <p>Woohoo, you're reading this text in a modal!</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary mr-2">
                  Save changes
                </button>
                <button type="button" className="btn btn-link" data-dismiss="modal">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bd-example">
          <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalLive">
            Launch demo modal
          </button>
        </div>
      </main>
    );
  }
}
