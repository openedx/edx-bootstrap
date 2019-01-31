import React from 'react';

export default class Modal extends React.Component {
  render() {
    return (
<main className="col-12 col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content" role="main">
  <h1 className="bd-title" id="content">Modal</h1>
  <p className="bd-lead">Use Bootstrap’s JavaScript modal plugin to add dialogs to your site for lightboxes, user notifications, or completely custom content.</p>

  <h2>To do</h2>
  <ul>
    <li>Abby: to provide design.</li>
    <li>Make buttons left aligned. Primary first. Secondary mostly likely a tertiary (link) style.</li>
  </ul>

  <h2 id="examples"><span className="bd-content-title">Examples</span></h2>
  <h3 id="modal-components"><span className="bd-content-title">Modal components</span></h3>
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
          <button type="button" className="btn btn-primary mr-2">Save changes</button>
          <button type="button" className="btn btn-link" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <h3 id="live-demo"><span className="bd-content-title">Live demo</span></h3>
  <div id="exampleModalLive" className="modal fade" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLiveLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLiveLabel">Modal title</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
          <p>Woohoo, you're reading this text in a modal!</p>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-primary mr-2">Save changes</button>
          <button type="button" className="btn btn-link" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
  <div className="bd-example">
    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalLive">
      Launch demo modal
    </button>
  </div>
  
  <h3 id="scrolling-long-content"><span className="bd-content-title">Scrolling long content</span></h3>
  <div id="exampleModalLong" className="modal fade" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-primary mr-2">Save changes</button>
          <button type="button" className="btn btn-link" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
  <div className="bd-example">
    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
      Launch demo modal
    </button>
  </div>
  
  <h3 id="vertically-centered"><span className="bd-content-title">Vertically centered</span></h3>
  <div id="exampleModalCenter" className="modal fade" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalCenterTitle">Modal title</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-primary mr-2">Save changes</button>
          <button type="button" className="btn btn-link" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
  <div className="bd-example">
    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
      Launch demo modal
    </button>
  </div>
  
  <h3 id="tooltips-and-popovers"><span className="bd-content-title">Tooltips and popovers</span></h3>
  <p><a href="/docs/4.2/components/tooltips/">Tooltips</a> and <a href="/docs/4.2/components/popovers/">popovers</a> can be placed within modals as needed. When modals are closed, any tooltips and popovers within are also automatically dismissed.</p>
  <div id="exampleModalPopovers" className="modal fade" tabIndex={-1} role="dialog" aria-labelledby="exampleModalPopoversLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalPopoversLabel">Modal title</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
          <h5>Popover in a modal</h5>
          <p>This <a href="#" role="button" className="btn btn-secondary popover-test" title data-content="Popover body content is set in this attribute." data-container="#exampleModalPopovers" data-original-title="Popover title">button</a> triggers a popover on click.</p>
          <hr />
          <h5>Tooltips in a modal</h5>
          <p><a href="#" className="tooltip-test" title data-container="#exampleModalPopovers" data-original-title="Tooltip">This link</a> and <a href="#" className="tooltip-test" title data-container="#exampleModalPopovers" data-original-title="Tooltip">that link</a> have tooltips on hover.</p>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-primary mr-2">Save changes</button>
          <button type="button" className="btn btn-link" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
  <div className="bd-example">
    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalPopovers">
      Launch demo modal
    </button>
  </div>
  
  <h3 id="using-the-grid"><span className="bd-content-title">Using the grid</span></h3>
  <div id="gridSystemModal" className="modal fade" tabIndex={-1} role="dialog" aria-labelledby="gridModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="gridModalLabel">Grids in modals</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
        </div>
        <div className="modal-body">
          <div className="container-fluid bd-example-row">
            <div className="row">
              <div className="col-md-4">.col-md-4</div>
              <div className="col-md-4 ml-auto">.col-md-4 .ml-auto</div>
            </div>
            <div className="row">
              <div className="col-md-3 ml-auto">.col-md-3 .ml-auto</div>
              <div className="col-md-2 ml-auto">.col-md-2 .ml-auto</div>
            </div>
            <div className="row">
              <div className="col-md-6 ml-auto">.col-md-6 .ml-auto</div>
            </div>
            <div className="row">
              <div className="col-sm-9">
                Level 1: .col-sm-9
                <div className="row">
                  <div className="col-8 col-sm-6">
                    Level 2: .col-8 .col-sm-6
                  </div>
                  <div className="col-4 col-sm-6">
                    Level 2: .col-4 .col-sm-6
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" className="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
  <div className="bd-example">
    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#gridSystemModal">
      Launch demo modal
    </button>
  </div>
  
  <h3 id="varying-modal-content"><span className="bd-content-title">Varying modal content</span></h3>
  <div className="bd-example">
    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Open modal for @mdo</button>
    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@fat">Open modal for @fat</button>
    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@getbootstrap">Open modal for @getbootstrap</button>
    <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">New message</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <label htmlFor="recipient-name" className="col-form-label">Recipient:</label>
                <input type="text" className="form-control" id="recipient-name" />
              </div>
              <div className="form-group">
                <label htmlFor="message-text" className="col-form-label">Message:</label>
                <textarea className="form-control" id="message-text" defaultValue={""} />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Send message</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div className="bd-example">
    <button type="button" className="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-xl">Extra large modal</button>
    <button type="button" className="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Large modal</button>
    <button type="button" className="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-sm">Small modal</button>
  </div>
  
  <div className="modal fade bd-example-modal-xl" tabIndex={-1} role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-xl">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title h4" id="myExtraLargeModalLabel">Extra large modal</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
          ...
        </div>
      </div>
    </div>
  </div>
  <div className="modal fade bd-example-modal-lg" tabIndex={-1} role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title h4" id="myLargeModalLabel">Large modal</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
          ...
        </div>
      </div>
    </div>
  </div>
  <div className="modal fade bd-example-modal-sm" tabIndex={-1} role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-sm">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title h4" id="mySmallModalLabel">Small modal</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
          ...
        </div>
      </div>
    </div>
  </div>  
</main>

    );
  }
}