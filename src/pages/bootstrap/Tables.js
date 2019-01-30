import React from 'react';

export default class Tables extends React.Component {
  render() {
    return (
<main className="col-12 col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content" role="main">
  <h1 className="bd-title" id="content">Tables</h1>
  <p className="bd-lead">Documentation and examples for opt-in styling of tables (given their prevalent use in JavaScript plugins) with Bootstrap.</p>
  
  <h2 id="examples"><span className="bd-content-title">Examples</span></h2>
  
  <h2>To do</h2>
  <ul>
    <li>Use bordered-table as base .table class</li>
    <li>All should be bordered-table</li>
    <li>Todo responsive, tables become lists.</li>
  </ul>

  
  
  <h2 id="bordered-table"><span className="bd-content-title">Bordered table</span></h2>
  
  <div className="bd-example">
    <table className="table table-bordered">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
  </div>
  
  <h2 id="table-head-options"><span className="bd-content-title">Table head options</span></h2>
  
  <div className="bd-example">
    <table className="table">
      <thead className="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
    <table className="table">
      <thead className="thead-light">
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
  </div>
  
  <h2 id="striped-rows"><span className="bd-content-title">Striped rows</span></h2>
  
  <div className="bd-example">
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
  </div>
  
  <h2 id="contextual-classes"><span className="bd-content-title">Contextual classes</span></h2>
  <p>Use contextual classes to color table rows or individual cells.</p>
  <div className="bd-example">
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Class</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
        </tr>
      </thead>
      <tbody>
        <tr className="table-active">
          <th scope="row">Active</th>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <th scope="row">Default</th>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr className="table-success">
          <th scope="row">Success</th>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr className="table-danger">
          <th scope="row">Danger</th>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr className="table-warning">
          <th scope="row">Warning</th>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr className="table-info">
          <th scope="row">Info</th>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
      </tbody>
    </table>
  </div>
  
  
  <div className="bd-callout bd-callout-warning">
    <h5 id="conveying-meaning-to-assistive-technologies">Conveying meaning to assistive technologies</h5>
    <p>Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies – such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the <code className="highlighter-rouge">.sr-only</code> class.</p>
  </div>
  <p>Create responsive tables by wrapping any <code className="highlighter-rouge">.table</code> with <code className="highlighter-rouge">.table-responsive{'{'}-sm|-md|-lg|-xl{'}'}</code>, making the table scroll horizontally at each <code className="highlighter-rouge">max-width</code> breakpoint of up to (but not including) 576px, 768px, 992px, and 1120px, respectively.</p>
  <div className="bd-callout bd-callout-info">
    <p>Note that since browsers do not currently support <a href="https://www.w3.org/TR/mediaqueries-4/#range-context">range context queries</a>, we work around the limitations of <a href="https://www.w3.org/TR/mediaqueries-4/#mq-min-max"><code className="highlighter-rouge">min-</code> and <code className="highlighter-rouge">max-</code> prefixes</a> and viewports with fractional widths (which can occur under certain conditions on high-dpi devices, for instance) by using values with higher precision for these comparisons.</p>
  </div>
  <h2 id="captions"><span className="bd-content-title">Captions</span></h2>
  <p>A <code className="highlighter-rouge">&lt;caption&gt;</code> functions like a heading for a table. It helps users with screen readers to find a table and understand what it’s about and decide if they want to read it.</p>
  <div className="bd-example">
    <table className="table">
      <caption>List of users</caption>
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
  </div>
  
  
</main>

    );
  }
}