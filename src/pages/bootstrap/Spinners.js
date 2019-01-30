import React from 'react';

export default class Spinners extends React.Component {
  render() {
    return (
<main className="col-12 col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content" role="main">
  <h1 className="bd-title" id="content">Spinners</h1>
  <p className="bd-lead">Indicate the loading state of a component or page with Bootstrap spinners, built entirely with HTML, CSS, and no JavaScript.</p>
  
  <h2>To do</h2>
  <ul>
    <li>UX to provide</li>
    <li>Trim to one</li>
  </ul>


  <div className="bd-example">
    <div className="spinner-border" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div>
  
  <h3 id="colors"><span className="bd-content-title">Colors</span></h3>
  
  <div className="bd-example">
    <div className="spinner-border text-primary" role="status">
      <span className="sr-only">Loading...</span>
    </div>
    <div className="spinner-border text-secondary" role="status">
      <span className="sr-only">Loading...</span>
    </div>
    <div className="spinner-border text-success" role="status">
      <span className="sr-only">Loading...</span>
    </div>
    <div className="spinner-border text-danger" role="status">
      <span className="sr-only">Loading...</span>
    </div>
    <div className="spinner-border text-warning" role="status">
      <span className="sr-only">Loading...</span>
    </div>
    <div className="spinner-border text-info" role="status">
      <span className="sr-only">Loading...</span>
    </div>
    <div className="spinner-border text-light" role="status">
      <span className="sr-only">Loading...</span>
    </div>
    <div className="spinner-border text-dark" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div>
  
  
  <h2 id="growing-spinner"><span className="bd-content-title">Growing spinner</span></h2>
  
  <div className="bd-example">
    <div className="spinner-grow" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div>
  
  
  <div className="bd-example">
    <div className="spinner-grow text-primary" role="status">
      <span className="sr-only">Loading...</span>
    </div>
    <div className="spinner-grow text-secondary" role="status">
      <span className="sr-only">Loading...</span>
    </div>
    <div className="spinner-grow text-success" role="status">
      <span className="sr-only">Loading...</span>
    </div>
    <div className="spinner-grow text-danger" role="status">
      <span className="sr-only">Loading...</span>
    </div>
    <div className="spinner-grow text-warning" role="status">
      <span className="sr-only">Loading...</span>
    </div>
    <div className="spinner-grow text-info" role="status">
      <span className="sr-only">Loading...</span>
    </div>
    <div className="spinner-grow text-light" role="status">
      <span className="sr-only">Loading...</span>
    </div>
    <div className="spinner-grow text-dark" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div>
  
  <h2 id="alignment"><span className="bd-content-title">Alignment</span></h2>
  
  <h3 id="margin"><span className="bd-content-title">Margin</span></h3>
  <p>Use <a href="/docs/4.2/utilities/spacing/">margin utilities</a> like <code className="highlighter-rouge">.m-5</code> for easy spacing.</p>
  <div className="bd-example">
    <div className="spinner-border m-5" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div>
  
  <h3 id="placement"><span className="bd-content-title">Placement</span></h3>
  
  <h4 id="flex"><span className="bd-content-title">Flex</span></h4>
  <div className="bd-example">
    <div className="d-flex justify-content-center">
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  </div>
  
  <div className="bd-example">
    <div className="d-flex align-items-center">
      <strong>Loading...</strong>
      <div className="spinner-border ml-auto" role="status" aria-hidden="true" />
    </div>
  </div>
  
  <h4 id="floats"><span className="bd-content-title">Floats</span></h4>
  <div className="bd-example">
    <div className="clearfix">
      <div className="spinner-border float-right" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  </div>
  
  <h4 id="text-align"><span className="bd-content-title">Text align</span></h4>
  <div className="bd-example">
    <div className="text-center">
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  </div>
  
  <h2 id="size"><span className="bd-content-title">Size</span></h2>
  <p>Add <code className="highlighter-rouge">.spinner-border-sm</code> and <code className="highlighter-rouge">.spinner-grow-sm</code> to make a smaller spinner that can quickly be used within other components.</p>
  <div className="bd-example">
    <div className="spinner-border spinner-border-sm" role="status">
      <span className="sr-only">Loading...</span>
    </div>
    <div className="spinner-grow spinner-grow-sm" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div>
  
  <p>Or, use custom CSS or inline styles to change the dimensions as needed.</p>
  <div className="bd-example">
    <div className="spinner-border" style={{width: '3rem', height: '3rem'}} role="status">
      <span className="sr-only">Loading...</span>
    </div>
    <div className="spinner-grow" style={{width: '3rem', height: '3rem'}} role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div>
  
  <h2 id="buttons"><span className="bd-content-title">Buttons</span></h2>
  <p>Use spinners within buttons to indicate an action is currently processing or taking place. You may also swap the text out of the spinner element and utilize button text as needed.</p>
  <div className="bd-example">
    <button className="btn btn-primary" type="button" disabled>
      <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
      <span className="sr-only">Loading...</span>
    </button>
    <button className="btn btn-primary" type="button" disabled>
      <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
      Loading...
    </button>
  </div>
  
  <div className="bd-example">
    <button className="btn btn-primary" type="button" disabled>
      <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true" />
      <span className="sr-only">Loading...</span>
    </button>
    <button className="btn btn-primary" type="button" disabled>
      <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true" />
      Loading...
    </button>
  </div>
  
</main>

    );
  }
}