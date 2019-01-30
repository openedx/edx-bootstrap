import React from 'react';

export default class Card extends React.Component {
  render() {
    return (
<main className="col-12 col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content" role="main">
  <h1 className="bd-title" id="content">Cards</h1>
  <p className="bd-lead">Bootstrap’s cards provide a flexible and extensible content container with multiple variants and options.</p>
  
  <h2 id="about"><span className="bd-content-title">About</span></h2>
  <h2 id="example"><span className="bd-content-title">Example</span></h2>
  <div className="bd-example">
    <div className="card" style={{width: '18rem'}}>
      <svg className="bd-placeholder-img card-img-top" width="100%" height={180} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Image cap"><title>Placeholder</title><rect fill="#868e96" width="100%" height="100%" /><text fill="#dee2e6" dy=".3em" x="50%" y="50%">Image cap</text></svg>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <h2 id="content-types"><span className="bd-content-title">Content types</span></h2>
  <h3 id="body"><span className="bd-content-title">Body</span></h3>
  <div className="bd-example">
    <div className="card">
      <div className="card-body">
        This is some text within a card body.
      </div>
    </div>
  </div>
  <h3 id="titles-text-and-links"><span className="bd-content-title">Titles, text, and links</span></h3>
  <div className="bd-example">
    <div className="card" style={{width: '18rem'}}>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="card-link">Card link</a>
        <a href="#" className="card-link">Another link</a>
      </div>
    </div>
  </div>
  <h3 id="images"><span className="bd-content-title">Images</span></h3>
  <div className="bd-example">
    <div className="card" style={{width: '18rem'}}>
      <svg className="bd-placeholder-img card-img-top" width="100%" height={180} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Image cap"><title>Placeholder</title><rect fill="#868e96" width="100%" height="100%" /><text fill="#dee2e6" dy=".3em" x="50%" y="50%">Image cap</text></svg>
      <div className="card-body">
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
  </div>
  <h3 id="list-groups"><span className="bd-content-title">List groups</span></h3>
  <div className="bd-example">
    <div className="card" style={{width: '18rem'}}>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Cras justo odio</li>
        <li className="list-group-item">Dapibus ac facilisis in</li>
        <li className="list-group-item">Vestibulum at eros</li>
      </ul>
    </div>
  </div>
  <div className="bd-example">
    <div className="card" style={{width: '18rem'}}>
      <div className="card-header">
        Featured
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Cras justo odio</li>
        <li className="list-group-item">Dapibus ac facilisis in</li>
        <li className="list-group-item">Vestibulum at eros</li>
      </ul>
    </div>
  </div>
  <h3 id="kitchen-sink"><span className="bd-content-title">Kitchen sink</span></h3>
  <div className="bd-example">
    <div className="card" style={{width: '18rem'}}>
      <svg className="bd-placeholder-img card-img-top" width="100%" height={180} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Image cap"><title>Placeholder</title><rect fill="#868e96" width="100%" height="100%" /><text fill="#dee2e6" dy=".3em" x="50%" y="50%">Image cap</text></svg>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Cras justo odio</li>
        <li className="list-group-item">Dapibus ac facilisis in</li>
        <li className="list-group-item">Vestibulum at eros</li>
      </ul>
      <div className="card-body">
        <a href="#" className="card-link">Card link</a>
        <a href="#" className="card-link">Another link</a>
      </div>
    </div>
  </div>
  <h3 id="header-and-footer"><span className="bd-content-title">Header and footer</span></h3>
  <div className="bd-example">
    <div className="card">
      <div className="card-header">
        Featured
      </div>
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div className="bd-example">
    <div className="card">
      <h5 className="card-header">Featured</h5>
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div className="bd-example">
    <div className="card">
      <div className="card-header">
        Quote
      </div>
      <div className="card-body">
        <blockquote className="blockquote mb-0">
                  <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
        </blockquote>
      </div>
    </div>
  </div>
  <div className="bd-example">
    <div className="card text-center">
      <div className="card-header">
        Featured
      </div>
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
      <div className="card-footer text-muted">
        2 days ago
      </div>
    </div>
  </div>
  <h2 id="sizing"><span className="bd-content-title">Sizing</span></h2>
  <h3 id="using-grid-markup"><span className="bd-content-title">Using grid markup</span></h3>
  <div className="bd-example">
    <div className="row">
      <div className="col-sm-6">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      <div className="col-sm-6">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <h3 id="using-utilities"><span className="bd-content-title">Using utilities</span></h3>
  <div className="bd-example">
    <div className="card w-75">
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="btn btn-primary">Button</a>
      </div>
    </div>
    <div className="card w-50">
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="btn btn-primary">Button</a>
      </div>
    </div>
  </div>
  <h3 id="using-custom-css"><span className="bd-content-title">Using custom CSS</span></h3>
  <div className="bd-example">
    <div className="card" style={{width: '18rem'}}>
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <h2 id="text-alignment"><span className="bd-content-title">Text alignment</span></h2>
  <div className="bd-example">
    <div className="card" style={{width: '18rem'}}>
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    <div className="card text-center" style={{width: '18rem'}}>
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    <div className="card text-right" style={{width: '18rem'}}>
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <h2 id="navigation"><span className="bd-content-title">Navigation</span></h2>
  <div className="bd-example">
    <div className="card text-center">
      <div className="card-header">
        <ul className="nav nav-tabs card-header-tabs">
          <li className="nav-item">
            <a className="nav-link active" href="#">Active</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">Disabled</a>
          </li>
        </ul>
      </div>
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div className="bd-example">
    <div className="card text-center">
      <div className="card-header">
        <ul className="nav nav-pills card-header-pills">
          <li className="nav-item">
            <a className="nav-link active" href="#">Active</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">Disabled</a>
          </li>
        </ul>
      </div>
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <h2 id="images-1"><span className="bd-content-title">Images</span></h2>
  <h3 id="image-caps"><span className="bd-content-title">Image caps</span></h3>
  <div className="bd-example">
    <div className="card mb-3">
      <svg className="bd-placeholder-img card-img-top" width="100%" height={180} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Image cap"><title>Placeholder</title><rect fill="#868e96" width="100%" height="100%" /><text fill="#dee2e6" dy=".3em" x="50%" y="50%">Image cap</text></svg>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
      <svg className="bd-placeholder-img card-img-bottom" width="100%" height={180} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Image cap"><title>Placeholder</title><rect fill="#868e96" width="100%" height="100%" /><text fill="#dee2e6" dy=".3em" x="50%" y="50%">Image cap</text></svg>
    </div>
  </div>
  <h3 id="image-overlays"><span className="bd-content-title">Image overlays</span></h3>
  <div className="bd-example">
    <div className="card bg-dark text-white">
      <svg className="bd-placeholder-img bd-placeholder-img-lg card-img" width="100%" height={270} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Card image"><title>Placeholder</title><rect fill="#868e96" width="100%" height="100%" /><text fill="#dee2e6" dy=".3em" x="50%" y="50%">Card image</text></svg>
      <div className="card-img-overlay">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text">Last updated 3 mins ago</p>
      </div>
    </div>
  </div>
  <div className="bd-callout bd-callout-info">
    </div>
  <h2 id="card-styles"><span className="bd-content-title">Card styles</span></h2>
  <h3 id="background-and-color"><span className="bd-content-title">Background and color</span></h3>
  <div className="bd-example">
    <div className="card text-white bg-primary mb-3" style={{maxWidth: '18rem'}}>
      <div className="card-header">Header</div>
      <div className="card-body">
        <h5 className="card-title">Primary card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
    <div className="card text-white bg-secondary mb-3" style={{maxWidth: '18rem'}}>
      <div className="card-header">Header</div>
      <div className="card-body">
        <h5 className="card-title">Secondary card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
    <div className="card text-white bg-success mb-3" style={{maxWidth: '18rem'}}>
      <div className="card-header">Header</div>
      <div className="card-body">
        <h5 className="card-title">Success card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
    <div className="card text-white bg-danger mb-3" style={{maxWidth: '18rem'}}>
      <div className="card-header">Header</div>
      <div className="card-body">
        <h5 className="card-title">Danger card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
    <div className="card text-white bg-warning mb-3" style={{maxWidth: '18rem'}}>
      <div className="card-header">Header</div>
      <div className="card-body">
        <h5 className="card-title">Warning card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
    <div className="card text-white bg-info mb-3" style={{maxWidth: '18rem'}}>
      <div className="card-header">Header</div>
      <div className="card-body">
        <h5 className="card-title">Info card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
    <div className="card bg-light mb-3" style={{maxWidth: '18rem'}}>
      <div className="card-header">Header</div>
      <div className="card-body">
        <h5 className="card-title">Light card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
    <div className="card text-white bg-dark mb-3" style={{maxWidth: '18rem'}}>
      <div className="card-header">Header</div>
      <div className="card-body">
        <h5 className="card-title">Dark card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
  </div>
  <div className="bd-callout bd-callout-warning">
    <h5 id="conveying-meaning-to-assistive-technologies">Conveying meaning to assistive technologies</h5>
    </div>
  <h3 id="border"><span className="bd-content-title">Border</span></h3>
  <div className="bd-example">
    <div className="card border-primary mb-3" style={{maxWidth: '18rem'}}>
      <div className="card-header">Header</div>
      <div className="card-body text-primary">
        <h5 className="card-title">Primary card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
    <div className="card border-secondary mb-3" style={{maxWidth: '18rem'}}>
      <div className="card-header">Header</div>
      <div className="card-body text-secondary">
        <h5 className="card-title">Secondary card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
    <div className="card border-success mb-3" style={{maxWidth: '18rem'}}>
      <div className="card-header">Header</div>
      <div className="card-body text-success">
        <h5 className="card-title">Success card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
    <div className="card border-danger mb-3" style={{maxWidth: '18rem'}}>
      <div className="card-header">Header</div>
      <div className="card-body text-danger">
        <h5 className="card-title">Danger card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
    <div className="card border-warning mb-3" style={{maxWidth: '18rem'}}>
      <div className="card-header">Header</div>
      <div className="card-body text-warning">
        <h5 className="card-title">Warning card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
    <div className="card border-info mb-3" style={{maxWidth: '18rem'}}>
      <div className="card-header">Header</div>
      <div className="card-body text-info">
        <h5 className="card-title">Info card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
    <div className="card border-light mb-3" style={{maxWidth: '18rem'}}>
      <div className="card-header">Header</div>
      <div className="card-body">
        <h5 className="card-title">Light card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
    <div className="card border-dark mb-3" style={{maxWidth: '18rem'}}>
      <div className="card-header">Header</div>
      <div className="card-body text-dark">
        <h5 className="card-title">Dark card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
  </div>
  <h3 id="mixins-utilities"><span className="bd-content-title">Mixins utilities</span></h3>
  <div className="bd-example">
    <div className="card border-success mb-3" style={{maxWidth: '18rem'}}>
      <div className="card-header bg-transparent border-success">Header</div>
      <div className="card-body text-success">
        <h5 className="card-title">Success card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      <div className="card-footer bg-transparent border-success">Footer</div>
    </div>
  </div>
  <h2 id="card-layout"><span className="bd-content-title">Card layout</span></h2>
  <h3 id="card-groups"><span className="bd-content-title">Card groups</span></h3>
  <div className="bd-example">
    <div className="card-group">
      <div className="card">
        <svg className="bd-placeholder-img card-img-top" width="100%" height={180} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Image cap"><title>Placeholder</title><rect fill="#868e96" width="100%" height="100%" /><text fill="#dee2e6" dy=".3em" x="50%" y="50%">Image cap</text></svg>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
      <div className="card">
        <svg className="bd-placeholder-img card-img-top" width="100%" height={180} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Image cap"><title>Placeholder</title><rect fill="#868e96" width="100%" height="100%" /><text fill="#dee2e6" dy=".3em" x="50%" y="50%">Image cap</text></svg>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
      <div className="card">
        <svg className="bd-placeholder-img card-img-top" width="100%" height={180} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Image cap"><title>Placeholder</title><rect fill="#868e96" width="100%" height="100%" /><text fill="#dee2e6" dy=".3em" x="50%" y="50%">Image cap</text></svg>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
    </div>
  </div>
  <div className="bd-example">
    <div className="card-group">
      <div className="card">
        <svg className="bd-placeholder-img card-img-top" width="100%" height={180} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Image cap"><title>Placeholder</title><rect fill="#868e96" width="100%" height="100%" /><text fill="#dee2e6" dy=".3em" x="50%" y="50%">Image cap</text></svg>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
        <div className="card-footer">
          <small className="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
      <div className="card">
        <svg className="bd-placeholder-img card-img-top" width="100%" height={180} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Image cap"><title>Placeholder</title><rect fill="#868e96" width="100%" height="100%" /><text fill="#dee2e6" dy=".3em" x="50%" y="50%">Image cap</text></svg>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
        </div>
        <div className="card-footer">
          <small className="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
      <div className="card">
        <svg className="bd-placeholder-img card-img-top" width="100%" height={180} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Image cap"><title>Placeholder</title><rect fill="#868e96" width="100%" height="100%" /><text fill="#dee2e6" dy=".3em" x="50%" y="50%">Image cap</text></svg>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
        </div>
        <div className="card-footer">
          <small className="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
    </div>
  </div>
  <h3 id="card-decks"><span className="bd-content-title">Card decks</span></h3>
  <div className="bd-example">
    <div className="card-deck">
      <div className="card">
        <svg className="bd-placeholder-img card-img-top" width="100%" height={200} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Image cap"><title>Placeholder</title><rect fill="#868e96" width="100%" height="100%" /><text fill="#dee2e6" dy=".3em" x="50%" y="50%">Image cap</text></svg>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
      <div className="card">
        <svg className="bd-placeholder-img card-img-top" width="100%" height={200} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Image cap"><title>Placeholder</title><rect fill="#868e96" width="100%" height="100%" /><text fill="#dee2e6" dy=".3em" x="50%" y="50%">Image cap</text></svg>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
      <div className="card">
        <svg className="bd-placeholder-img card-img-top" width="100%" height={200} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Image cap"><title>Placeholder</title><rect fill="#868e96" width="100%" height="100%" /><text fill="#dee2e6" dy=".3em" x="50%" y="50%">Image cap</text></svg>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
    </div>
  </div>
  <div className="bd-example">
    <div className="card-deck">
      <div className="card">
        <svg className="bd-placeholder-img card-img-top" width="100%" height={180} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Image cap"><title>Placeholder</title><rect fill="#868e96" width="100%" height="100%" /><text fill="#dee2e6" dy=".3em" x="50%" y="50%">Image cap</text></svg>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
        <div className="card-footer">
          <small className="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
      <div className="card">
        <svg className="bd-placeholder-img card-img-top" width="100%" height={180} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Image cap"><title>Placeholder</title><rect fill="#868e96" width="100%" height="100%" /><text fill="#dee2e6" dy=".3em" x="50%" y="50%">Image cap</text></svg>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
        </div>
        <div className="card-footer">
          <small className="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
      <div className="card">
        <svg className="bd-placeholder-img card-img-top" width="100%" height={180} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Image cap"><title>Placeholder</title><rect fill="#868e96" width="100%" height="100%" /><text fill="#dee2e6" dy=".3em" x="50%" y="50%">Image cap</text></svg>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
        </div>
        <div className="card-footer">
          <small className="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
    </div>
  </div>
  <h3 id="card-columns"><span className="bd-content-title">Card columns</span></h3>
  <div className="bd-example">
    <div className="card-columns">
      <div className="card">
        <svg className="bd-placeholder-img card-img-top" width="100%" height={160} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Image cap"><title>Placeholder</title><rect fill="#868e96" width="100%" height="100%" /><text fill="#dee2e6" dy=".3em" x="50%" y="50%">Image cap</text></svg>
        <div className="card-body">
          <h5 className="card-title">Card title that wraps to a new line</h5>
          <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
      </div>
      <div className="card p-3">
        <blockquote className="blockquote mb-0 card-body">
                  <footer className="blockquote-footer">
            <small className="text-muted">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </small>
          </footer>
        </blockquote>
      </div>
      <div className="card">
        <svg className="bd-placeholder-img card-img-top" width="100%" height={160} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Image cap"><title>Placeholder</title><rect fill="#868e96" width="100%" height="100%" /><text fill="#dee2e6" dy=".3em" x="50%" y="50%">Image cap</text></svg>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
      <div className="card bg-primary text-white text-center p-3">
        <blockquote className="blockquote mb-0">
                  <footer className="blockquote-footer text-white">
            <small>
              Someone famous in <cite title="Source Title">Source Title</cite>
            </small>
          </footer>
        </blockquote>
      </div>
      <div className="card text-center">
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This card has a regular title and short paragraphy of text below it.</p>
          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
      <div className="card">
        <svg className="bd-placeholder-img card-img" width="100%" height={260} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Card image"><title>Placeholder</title><rect fill="#868e96" width="100%" height="100%" /><text fill="#dee2e6" dy=".3em" x="50%" y="50%">Card image</text></svg>
      </div>
      <div className="card p-3 text-right">
        <blockquote className="blockquote mb-0">
                  <footer className="blockquote-footer">
            <small className="text-muted">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </small>
          </footer>
        </blockquote>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This is another card with title and supporting text below. This card has some additional content to make it slightly taller overall.</p>
          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
    </div>
  </div>
</main>

    );
  }
}