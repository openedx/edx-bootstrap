import React from 'react';

export default class Dropdowns extends React.Component {
  render() {
    return (
<main className="col-12 col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content" role="main">
  <h1 className="bd-title" id="content">Dropdowns</h1>
  <p className="bd-lead">Toggle contextual overlays for displaying lists of links and more with the Bootstrap dropdown plugin.</p>
  
  <div className="bd-example">
    <div className="dropdown">
      <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Dropdown button
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a className="dropdown-item" href="#">Action</a>
        <a className="dropdown-item" href="#">Another action</a>
        <a className="dropdown-item" href="#">Something else here</a>
      </div>
    </div>
  </div>
  
  <div className="bd-example">
    <div className="dropdown">
      <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Dropdown link
      </a>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
        <a className="dropdown-item" href="#">Action</a>
        <a className="dropdown-item" href="#">Another action</a>
        <a className="dropdown-item" href="#">Something else here</a>
      </div>
    </div>
  </div>
  <div className="bd-example">
    <div className="btn-group">
      <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Primary</button>
      <div className="dropdown-menu">
        <a className="dropdown-item" href="#">Action</a>
        <a className="dropdown-item" href="#">Another action</a>
        <a className="dropdown-item" href="#">Something else here</a>
        <div className="dropdown-divider" />
        <a className="dropdown-item" href="#">Separated link</a>
      </div>
    </div>{/* /btn-group */}
    <div className="btn-group">
      <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Secondary</button>
      <div className="dropdown-menu">
        <a className="dropdown-item" href="#">Action</a>
        <a className="dropdown-item" href="#">Another action</a>
        <a className="dropdown-item" href="#">Something else here</a>
        <div className="dropdown-divider" />
        <a className="dropdown-item" href="#">Separated link</a>
      </div>
    </div>{/* /btn-group */}
    <div className="btn-group">
      <button type="button" className="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Success</button>
      <div className="dropdown-menu">
        <a className="dropdown-item" href="#">Action</a>
        <a className="dropdown-item" href="#">Another action</a>
        <a className="dropdown-item" href="#">Something else here</a>
        <div className="dropdown-divider" />
        <a className="dropdown-item" href="#">Separated link</a>
      </div>
    </div>{/* /btn-group */}
    <div className="btn-group">
      <button type="button" className="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Info</button>
      <div className="dropdown-menu">
        <a className="dropdown-item" href="#">Action</a>
        <a className="dropdown-item" href="#">Another action</a>
        <a className="dropdown-item" href="#">Something else here</a>
        <div className="dropdown-divider" />
        <a className="dropdown-item" href="#">Separated link</a>
      </div>
    </div>{/* /btn-group */}
    <div className="btn-group">
      <button type="button" className="btn btn-warning dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Warning</button>
      <div className="dropdown-menu">
        <a className="dropdown-item" href="#">Action</a>
        <a className="dropdown-item" href="#">Another action</a>
        <a className="dropdown-item" href="#">Something else here</a>
        <div className="dropdown-divider" />
        <a className="dropdown-item" href="#">Separated link</a>
      </div>
    </div>{/* /btn-group */}
    <div className="btn-group">
      <button type="button" className="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Danger</button>
      <div className="dropdown-menu">
        <a className="dropdown-item" href="#">Action</a>
        <a className="dropdown-item" href="#">Another action</a>
        <a className="dropdown-item" href="#">Something else here</a>
        <div className="dropdown-divider" />
        <a className="dropdown-item" href="#">Separated link</a>
      </div>
    </div>{/* /btn-group */}
  </div>
  <h3 id="split-button"><span className="bd-content-title">Split button</span></h3>
  
  <div className="bd-example">
    <div className="btn-group">
      <button type="button" className="btn btn-primary">Primary</button>
      <button type="button" className="btn btn-primary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span className="sr-only">Toggle Dropdown</span>
      </button>
      <div className="dropdown-menu">
        <a className="dropdown-item" href="#">Action</a>
        <a className="dropdown-item" href="#">Another action</a>
        <a className="dropdown-item" href="#">Something else here</a>
        <div className="dropdown-divider" />
        <a className="dropdown-item" href="#">Separated link</a>
      </div>
    </div>{/* /btn-group */}
    <div className="btn-group">
      <button type="button" className="btn btn-secondary">Secondary</button>
      <button type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span className="sr-only">Toggle Dropdown</span>
      </button>
      <div className="dropdown-menu">
        <a className="dropdown-item" href="#">Action</a>
        <a className="dropdown-item" href="#">Another action</a>
        <a className="dropdown-item" href="#">Something else here</a>
        <div className="dropdown-divider" />
        <a className="dropdown-item" href="#">Separated link</a>
      </div>
    </div>{/* /btn-group */}
    <div className="btn-group">
      <button type="button" className="btn btn-success">Success</button>
      <button type="button" className="btn btn-success dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span className="sr-only">Toggle Dropdown</span>
      </button>
      <div className="dropdown-menu">
        <a className="dropdown-item" href="#">Action</a>
        <a className="dropdown-item" href="#">Another action</a>
        <a className="dropdown-item" href="#">Something else here</a>
        <div className="dropdown-divider" />
        <a className="dropdown-item" href="#">Separated link</a>
      </div>
    </div>{/* /btn-group */}
    <div className="btn-group">
      <button type="button" className="btn btn-info">Info</button>
      <button type="button" className="btn btn-info dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span className="sr-only">Toggle Dropdown</span>
      </button>
      <div className="dropdown-menu">
        <a className="dropdown-item" href="#">Action</a>
        <a className="dropdown-item" href="#">Another action</a>
        <a className="dropdown-item" href="#">Something else here</a>
        <div className="dropdown-divider" />
        <a className="dropdown-item" href="#">Separated link</a>
      </div>
    </div>{/* /btn-group */}
    <div className="btn-group">
      <button type="button" className="btn btn-warning">Warning</button>
      <button type="button" className="btn btn-warning dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span className="sr-only">Toggle Dropdown</span>
      </button>
      <div className="dropdown-menu">
        <a className="dropdown-item" href="#">Action</a>
        <a className="dropdown-item" href="#">Another action</a>
        <a className="dropdown-item" href="#">Something else here</a>
        <div className="dropdown-divider" />
        <a className="dropdown-item" href="#">Separated link</a>
      </div>
    </div>{/* /btn-group */}
    <div className="btn-group">
      <button type="button" className="btn btn-danger">Danger</button>
      <button type="button" className="btn btn-danger dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span className="sr-only">Toggle Dropdown</span>
      </button>
      <div className="dropdown-menu">
        <a className="dropdown-item" href="#">Action</a>
        <a className="dropdown-item" href="#">Another action</a>
        <a className="dropdown-item" href="#">Something else here</a>
        <div className="dropdown-divider" />
        <a className="dropdown-item" href="#">Separated link</a>
      </div>
    </div>{/* /btn-group */}
  </div>
  <h2 id="sizing"><span className="bd-content-title">Sizing</span></h2>
  
  <div className="bd-example">
    <div className="btn-toolbar" role="toolbar">
      <div className="btn-group">
        <button className="btn btn-secondary btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Large button
        </button>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <a className="dropdown-item" href="#">Something else here</a>
          <div className="dropdown-divider" />
          <a className="dropdown-item" href="#">Separated link</a>
        </div>
      </div>{/* /btn-group */}
      <div className="btn-group ml-2">
        <button type="button" className="btn btn-lg btn-secondary">Large split button</button>
        <button type="button" className="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <span className="sr-only">Toggle Dropdown</span>
        </button>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <a className="dropdown-item" href="#">Something else here</a>
          <div className="dropdown-divider" />
          <a className="dropdown-item" href="#">Separated link</a>
        </div>
      </div>{/* /btn-group */}
    </div>{/* /btn-toolbar */}
    <div className="btn-toolbar" role="toolbar">
      <div className="btn-group">
        <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Small button
        </button>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <a className="dropdown-item" href="#">Something else here</a>
          <div className="dropdown-divider" />
          <a className="dropdown-item" href="#">Separated link</a>
        </div>
      </div>{/* /btn-group */}
      <div className="btn-group ml-2">
        <button type="button" className="btn btn-sm btn-secondary">Small split button</button>
        <button type="button" className="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <span className="sr-only">Toggle Dropdown</span>
        </button>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <a className="dropdown-item" href="#">Something else here</a>
          <div className="dropdown-divider" />
          <a className="dropdown-item" href="#">Separated link</a>
        </div>
      </div>{/* /btn-group */}
    </div>{/* /btn-toolbar */}
  </div>
  {/* /example */}
  <h2 id="directions"><span className="bd-content-title">Directions</span></h2>
  <h3 id="dropup"><span className="bd-content-title">Dropup</span></h3>
  
  <div className="bd-example">
    <div className="btn-group dropup">
      <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Dropup
      </button>
      <div className="dropdown-menu">
        <a className="dropdown-item" href="#">Action</a>
        <a className="dropdown-item" href="#">Another action</a>
        <a className="dropdown-item" href="#">Something else here</a>
        <div className="dropdown-divider" />
        <a className="dropdown-item" href="#">Separated link</a>
      </div>
    </div>
    <div className="btn-group dropup">
      <button type="button" className="btn btn-secondary">
        Split dropup
      </button>
      <button type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span className="sr-only">Toggle Dropdown</span>
      </button>
      <div className="dropdown-menu">
        <a className="dropdown-item" href="#">Action</a>
        <a className="dropdown-item" href="#">Another action</a>
        <a className="dropdown-item" href="#">Something else here</a>
        <div className="dropdown-divider" />
        <a className="dropdown-item" href="#">Separated link</a>
      </div>
    </div>
  </div>
  <h3 id="dropright"><span className="bd-content-title">Dropright</span></h3>
  <div className="bd-example">
    <div className="btn-group dropright">
      <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Dropright
      </button>
      <div className="dropdown-menu">
        <a className="dropdown-item" href="#">Action</a>
        <a className="dropdown-item" href="#">Another action</a>
        <a className="dropdown-item" href="#">Something else here</a>
        <div className="dropdown-divider" />
        <a className="dropdown-item" href="#">Separated link</a>
      </div>
    </div>
    <div className="btn-group dropright">
      <button type="button" className="btn btn-secondary">
        Split dropright
      </button>
      <button type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span className="sr-only">Toggle Dropright</span>
      </button>
      <div className="dropdown-menu">
        <a className="dropdown-item" href="#">Action</a>
        <a className="dropdown-item" href="#">Another action</a>
        <a className="dropdown-item" href="#">Something else here</a>
        <div className="dropdown-divider" />
        <a className="dropdown-item" href="#">Separated link</a>
      </div>
    </div>
  </div>
  <h3 id="dropleft"><span className="bd-content-title">Dropleft</span></h3>
  <div className="bd-example">
    <div className="btn-group dropleft">
      <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Dropleft
      </button>
      <div className="dropdown-menu">
        <a className="dropdown-item" href="#">Action</a>
        <a className="dropdown-item" href="#">Another action</a>
        <a className="dropdown-item" href="#">Something else here</a>
        <div className="dropdown-divider" />
        <a className="dropdown-item" href="#">Separated link</a>
      </div>
    </div>
    <div className="btn-group">
      <div className="btn-group dropleft" role="group">
        <button type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <span className="sr-only">Toggle Dropleft</span>
        </button>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <a className="dropdown-item" href="#">Something else here</a>
          <div className="dropdown-divider" />
          <a className="dropdown-item" href="#">Separated link</a>
        </div>
      </div>
      <button type="button" className="btn btn-secondary">
        Split dropleft
      </button>
    </div>
  </div>
  <h2 id="menu-items"><span className="bd-content-title">Menu items</span></h2>
    <div className="bd-example">
    <div className="dropdown">
      <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Dropdown
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
        <button className="dropdown-item" type="button">Action</button>
        <button className="dropdown-item" type="button">Another action</button>
        <button className="dropdown-item" type="button">Something else here</button>
      </div>
    </div>
  </div>
  
  <div className="bd-example">
    <div className="dropdown-menu">
      <span className="dropdown-item-text">Dropdown item text</span>
      <a className="dropdown-item" href="#">Action</a>
      <a className="dropdown-item" href="#">Another action</a>
      <a className="dropdown-item" href="#">Something else here</a>
    </div>
  </div>
  <h3 id="active"><span className="bd-content-title">Active</span></h3>
  
  <div className="bd-example">
    <div className="dropdown-menu">
      <a className="dropdown-item" href="#">Regular link</a>
      <a className="dropdown-item active" href="#">Active link</a>
      <a className="dropdown-item" href="#">Another link</a>
    </div>
  </div>
  <h3 id="disabled"><span className="bd-content-title">Disabled</span></h3>
    <div className="bd-example">
    <div className="dropdown-menu">
      <a className="dropdown-item" href="#">Regular link</a>
      <a className="dropdown-item disabled" href="#" tabIndex={-1} aria-disabled="true">Disabled link</a>
      <a className="dropdown-item" href="#">Another link</a>
    </div>
  </div>
  <h2 id="menu-alignment"><span className="bd-content-title">Menu alignment</span></h2>
  
  <div className="bd-callout bd-callout-info">
    <p><strong>Heads up!</strong> Dropdowns are positioned thanks to Popper.js (except when they are contained in a navbar).</p>
  </div>
  <div className="bd-example">
    <div className="btn-group">
      <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Right-aligned menu
      </button>
      <div className="dropdown-menu dropdown-menu-right">
        <button className="dropdown-item" type="button">Action</button>
        <button className="dropdown-item" type="button">Another action</button>
        <button className="dropdown-item" type="button">Something else here</button>
      </div>
    </div>
  </div>
  <h3 id="responsive-alignment"><span className="bd-content-title">Responsive alignment</span></h3>
  
  <div className="bd-example">
    <div className="btn-group">
      <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" data-display="static" aria-haspopup="true" aria-expanded="false">
        Left-aligned but right aligned when large screen
      </button>
      <div className="dropdown-menu dropdown-menu-lg-right">
        <button className="dropdown-item" type="button">Action</button>
        <button className="dropdown-item" type="button">Another action</button>
        <button className="dropdown-item" type="button">Something else here</button>
      </div>
    </div>
  </div>
  <div className="bd-example">
    <div className="btn-group">
      <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" data-display="static" aria-haspopup="true" aria-expanded="false">
        Right-aligned but left aligned when large screen
      </button>
      <div className="dropdown-menu dropdown-menu-right dropdown-menu-lg-left">
        <button className="dropdown-item" type="button">Action</button>
        <button className="dropdown-item" type="button">Another action</button>
        <button className="dropdown-item" type="button">Something else here</button>
      </div>
    </div>
  </div>
  <h2 id="menu-content"><span className="bd-content-title">Menu content</span></h2>
  <h3 id="headers"><span className="bd-content-title">Headers</span></h3>
  <div className="bd-example">
    <div className="dropdown-menu">
      <h6 className="dropdown-header">Dropdown header</h6>
      <a className="dropdown-item" href="#">Action</a>
      <a className="dropdown-item" href="#">Another action</a>
    </div>
  </div>
  <h3 id="dividers"><span className="bd-content-title">Dividers</span></h3>
  <div className="bd-example">
    <div className="dropdown-menu">
      <a className="dropdown-item" href="#">Action</a>
      <a className="dropdown-item" href="#">Another action</a>
      <a className="dropdown-item" href="#">Something else here</a>
      <div className="dropdown-divider" />
      <a className="dropdown-item" href="#">Separated link</a>
    </div>
  </div>
  <h3 id="text"><span className="bd-content-title">Text</span></h3>
  <div className="bd-example">
    <div className="dropdown-menu p-4 text-muted" style={{maxWidth: 200}}>
      <p>
        Some example text that's free-flowing within the dropdown menu.
      </p>
      <p className="mb-0">
        And this is more example text.
      </p>
    </div>
  </div>
  <h3 id="forms"><span className="bd-content-title">Forms</span></h3>

  <div className="bd-example">
    <div className="dropdown-menu">
      <form className="px-4 py-3">
        <div className="form-group">
          <label htmlFor="exampleDropdownFormEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com" autoComplete="off" style={{backgroundImage: 'url("data:image/png', backgroundRepeat: 'no-repeat', backgroundAttachment: 'scroll', backgroundSize: '16px 18px', backgroundPosition: '98% 50%'}} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleDropdownFormPassword1">Password</label>
          <input type="password" className="form-control" id="exampleDropdownFormPassword1" placeholder="Password" autoComplete="off" style={{backgroundImage: 'url("data:image/png', backgroundRepeat: 'no-repeat', backgroundAttachment: 'scroll', backgroundSize: '16px 18px', backgroundPosition: '98% 50%'}} />
        </div>
        <div className="form-group">
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="dropdownCheck" />
            <label className="form-check-label" htmlFor="dropdownCheck">
              Remember me
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Sign in</button>
      </form>
      <div className="dropdown-divider" />
      <a className="dropdown-item" href="#">New around here? Sign up</a>
      <a className="dropdown-item" href="#">Forgot password?</a>
    </div>
  </div>
  <div className="bd-example">
    <form className="dropdown-menu p-4">
      <div className="form-group">
        <label htmlFor="exampleDropdownFormEmail2">Email address</label>
        <input type="email" className="form-control" id="exampleDropdownFormEmail2" placeholder="email@example.com" autoComplete="off" style={{backgroundImage: 'url("data:image/png', backgroundRepeat: 'no-repeat', backgroundAttachment: 'scroll', backgroundSize: '16px 18px', backgroundPosition: '98% 50%'}} />
      </div>
      <div className="form-group">
        <label htmlFor="exampleDropdownFormPassword2">Password</label>
        <input type="password" className="form-control" id="exampleDropdownFormPassword2" placeholder="Password" autoComplete="off" style={{backgroundImage: 'url("data:image/png', backgroundRepeat: 'no-repeat', backgroundAttachment: 'scroll', backgroundSize: '16px 18px', backgroundPosition: '98% 50%'}} />
      </div>
      <div className="form-group">
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="dropdownCheck2" />
          <label className="form-check-label" htmlFor="dropdownCheck2">
            Remember me
          </label>
        </div>
      </div>
      <button type="submit" className="btn btn-primary">Sign in</button>
    </form>
  </div>
  <h2 id="dropdown-options"><span className="bd-content-title">Dropdown options</span></h2>

  <div className="bd-example">
    <div className="d-flex">
      <div className="dropdown mr-1">
        <button type="button" className="btn btn-secondary dropdown-toggle" id="dropdownMenuOffset" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-offset="10,20">
          Offset
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuOffset">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </div>
      <div className="btn-group">
        <button type="button" className="btn btn-secondary">Reference</button>
        <button type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split" id="dropdownMenuReference" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-reference="parent">
          <span className="sr-only">Toggle Dropdown</span>
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuReference">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <a className="dropdown-item" href="#">Something else here</a>
          <div className="dropdown-divider" />
          <a className="dropdown-item" href="#">Separated link</a>
        </div>
      </div>
    </div>
  </div>
</main>

    );
  }
}