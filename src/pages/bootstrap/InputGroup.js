import React from 'react';

export default class InputGroup extends React.Component {
  render() {
    return (
<main className="col-12 col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content" role="main">
  <h1 className="bd-title" id="content">Input group</h1>
  <p className="bd-lead">Easily extend form controls by adding text, buttons, or button groups on either side of textual inputs, custom selects, and custom file inputs.</p>
  
  <h2 id="basic-example"><span className="bd-content-title">Basic example</span></h2>
  
  <div className="bd-example">
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text" id="basic-addon1">@</span>
      </div>
      <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
    </div>
    <div className="input-group mb-3">
      <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
      <div className="input-group-append">
        <span className="input-group-text" id="basic-addon2">@example.com</span>
      </div>
    </div>
    <label htmlFor="basic-url">Your vanity URL</label>
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text" id="basic-addon3">https://example.com/users/</span>
      </div>
      <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" />
    </div>
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text">$</span>
      </div>
      <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
      <div className="input-group-append">
        <span className="input-group-text">.00</span>
      </div>
    </div>
    <div className="input-group">
      <div className="input-group-prepend">
        <span className="input-group-text">With textarea</span>
      </div>
      <textarea className="form-control" aria-label="With textarea" defaultValue={""} />
    </div>
  </div>
  
  <h2 id="wrapping"><span className="bd-content-title">Wrapping</span></h2>
  
  <div className="bd-example">
    <div className="input-group flex-nowrap">
      <div className="input-group-prepend">
        <span className="input-group-text" id="addon-wrapping">@</span>
      </div>
      <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" />
    </div>
  </div>
  
  <h2 id="sizing"><span className="bd-content-title">Sizing</span></h2>
  
  <div className="bd-example">
    <div className="input-group input-group-sm mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text" id="inputGroup-sizing-sm">Small</span>
      </div>
      <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
    </div>
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text" id="inputGroup-sizing-default">Default</span>
      </div>
      <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
    </div>
    <div className="input-group input-group-lg">
      <div className="input-group-prepend">
        <span className="input-group-text" id="inputGroup-sizing-lg">Large</span>
      </div>
      <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
    </div>
  </div>
  
  <h2 id="checkboxes-and-radios"><span className="bd-content-title">Checkboxes and radios</span></h2>
  
  <div className="bd-example">
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <div className="input-group-text">
          <input type="checkbox" aria-label="Checkbox for following text input" />
        </div>
      </div>
      <input type="text" className="form-control" aria-label="Text input with checkbox" />
    </div>
    <div className="input-group">
      <div className="input-group-prepend">
        <div className="input-group-text">
          <input type="radio" aria-label="Radio button for following text input" />
        </div>
      </div>
      <input type="text" className="form-control" aria-label="Text input with radio button" />
    </div>
  </div>
  
  <h2 id="multiple-inputs"><span className="bd-content-title">Multiple inputs</span></h2>
  
  <div className="bd-example">
    <div className="input-group">
      <div className="input-group-prepend">
        <span className="input-group-text">First and last name</span>
      </div>
      <input type="text" aria-label="First name" className="form-control" />
      <input type="text" aria-label="Last name" className="form-control" />
    </div>
  </div>
  
  <h2 id="multiple-addons"><span className="bd-content-title">Multiple addons</span></h2>
  
  <div className="bd-example">
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text">$</span>
        <span className="input-group-text">0.00</span>
      </div>
      <input type="text" className="form-control" aria-label="Dollar amount (with dot and two decimal places)" />
    </div>
    <div className="input-group">
      <input type="text" className="form-control" aria-label="Dollar amount (with dot and two decimal places)" />
      <div className="input-group-append">
        <span className="input-group-text">$</span>
        <span className="input-group-text">0.00</span>
      </div>
    </div>
  </div>
  
  <h2 id="button-addons"><span className="bd-content-title">Button addons</span></h2>
  <div className="bd-example">
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <button className="btn btn-outline-secondary" type="button" id="button-addon1">Button</button>
      </div>
      <input type="text" className="form-control" placeholder aria-label="Example text with button addon" aria-describedby="button-addon1" />
    </div>
    <div className="input-group mb-3">
      <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
      <div className="input-group-append">
        <button className="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
      </div>
    </div>
    <div className="input-group mb-3">
      <div className="input-group-prepend" id="button-addon3">
        <button className="btn btn-outline-secondary" type="button">Button</button>
        <button className="btn btn-outline-secondary" type="button">Button</button>
      </div>
      <input type="text" className="form-control" placeholder aria-label="Example text with two button addons" aria-describedby="button-addon3" />
    </div>
    <div className="input-group">
      <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username with two button addons" aria-describedby="button-addon4" />
      <div className="input-group-append" id="button-addon4">
        <button className="btn btn-outline-secondary" type="button">Button</button>
        <button className="btn btn-outline-secondary" type="button">Button</button>
      </div>
    </div>
  </div>
  
  <h2 id="buttons-with-dropdowns"><span className="bd-content-title">Buttons with dropdowns</span></h2>
  <div className="bd-example">
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</button>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <a className="dropdown-item" href="#">Something else here</a>
          <div role="separator" className="dropdown-divider" />
          <a className="dropdown-item" href="#">Separated link</a>
        </div>
      </div>
      <input type="text" className="form-control" aria-label="Text input with dropdown button" />
    </div>
    <div className="input-group">
      <input type="text" className="form-control" aria-label="Text input with dropdown button" />
      <div className="input-group-append">
        <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</button>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <a className="dropdown-item" href="#">Something else here</a>
          <div role="separator" className="dropdown-divider" />
          <a className="dropdown-item" href="#">Separated link</a>
        </div>
      </div>
    </div>
  </div>
  
  <h2 id="segmented-buttons"><span className="bd-content-title">Segmented buttons</span></h2>
  <div className="bd-example">
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <button type="button" className="btn btn-outline-secondary">Action</button>
        <button type="button" className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <span className="sr-only">Toggle Dropdown</span>
        </button>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <a className="dropdown-item" href="#">Something else here</a>
          <div role="separator" className="dropdown-divider" />
          <a className="dropdown-item" href="#">Separated link</a>
        </div>
      </div>
      <input type="text" className="form-control" aria-label="Text input with segmented dropdown button" />
    </div>
    <div className="input-group">
      <input type="text" className="form-control" aria-label="Text input with segmented dropdown button" />
      <div className="input-group-append">
        <button type="button" className="btn btn-outline-secondary">Action</button>
        <button type="button" className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <span className="sr-only">Toggle Dropdown</span>
        </button>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <a className="dropdown-item" href="#">Something else here</a>
          <div role="separator" className="dropdown-divider" />
          <a className="dropdown-item" href="#">Separated link</a>
        </div>
      </div>
    </div>
  </div>
  
  <h2 id="custom-forms"><span className="bd-content-title">Custom forms</span></h2>
  
  <h3 id="custom-select"><span className="bd-content-title">Custom select</span></h3>
  <div className="bd-example">
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <label className="input-group-text" htmlFor="inputGroupSelect01">Options</label>
      </div>
      <select className="custom-select" id="inputGroupSelect01">
        <option selected>Choose...</option>
        <option value={1}>One</option>
        <option value={2}>Two</option>
        <option value={3}>Three</option>
      </select>
    </div>
    <div className="input-group mb-3">
      <select className="custom-select" id="inputGroupSelect02">
        <option selected>Choose...</option>
        <option value={1}>One</option>
        <option value={2}>Two</option>
        <option value={3}>Three</option>
      </select>
      <div className="input-group-append">
        <label className="input-group-text" htmlFor="inputGroupSelect02">Options</label>
      </div>
    </div>
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <button className="btn btn-outline-secondary" type="button">Button</button>
      </div>
      <select className="custom-select" id="inputGroupSelect03" aria-label="Example select with button addon">
        <option selected>Choose...</option>
        <option value={1}>One</option>
        <option value={2}>Two</option>
        <option value={3}>Three</option>
      </select>
    </div>
    <div className="input-group">
      <select className="custom-select" id="inputGroupSelect04" aria-label="Example select with button addon">
        <option selected>Choose...</option>
        <option value={1}>One</option>
        <option value={2}>Two</option>
        <option value={3}>Three</option>
      </select>
      <div className="input-group-append">
        <button className="btn btn-outline-secondary" type="button">Button</button>
      </div>
    </div>
  </div>
  
  <h3 id="custom-file-input"><span className="bd-content-title">Custom file input</span></h3>
  <div className="bd-example">
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text" id="inputGroupFileAddon01">Upload</span>
      </div>
      <div className="custom-file">
        <input type="file" className="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01" />
        <label className="custom-file-label" htmlFor="inputGroupFile01">Choose file</label>
      </div>
    </div>
    <div className="input-group mb-3">
      <div className="custom-file">
        <input type="file" className="custom-file-input" id="inputGroupFile02" />
        <label className="custom-file-label" htmlFor="inputGroupFile02" aria-describedby="inputGroupFileAddon02">Choose file</label>
      </div>
      <div className="input-group-append">
        <span className="input-group-text" id="inputGroupFileAddon02">Upload</span>
      </div>
    </div>
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <button className="btn btn-outline-secondary" type="button" id="inputGroupFileAddon03">Button</button>
      </div>
      <div className="custom-file">
        <input type="file" className="custom-file-input" id="inputGroupFile03" aria-describedby="inputGroupFileAddon03" />
        <label className="custom-file-label" htmlFor="inputGroupFile03">Choose file</label>
      </div>
    </div>
    <div className="input-group">
      <div className="custom-file">
        <input type="file" className="custom-file-input" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" />
        <label className="custom-file-label" htmlFor="inputGroupFile04">Choose file</label>
      </div>
      <div className="input-group-append">
        <button className="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">Button</button>
      </div>
    </div>
  </div>
  
  <h2 id="accessibility"><span className="bd-content-title">Accessibility</span></h2>
  
</main>

    );
  }
}