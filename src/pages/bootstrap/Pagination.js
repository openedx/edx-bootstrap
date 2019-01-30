import React from 'react';

export default class Pagination extends React.Component {
  render() {
    return (
<main className="col-12 col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content" role="main">
  <h1 className="bd-title" id="content">Pagination</h1>
  <p className="bd-lead">Documentation and examples for showing pagination to indicate a series of related content exists across multiple pages.</p>
  
  <h2 id="overview"><span className="bd-content-title">Overview</span></h2>

  <h2>To do</h2>
  <ul>
    <li>Match paragon responsive strategy</li>
    <li>Make sure it has the rounded edges, etc.</li>
    <li>add a minimum width of numbers (44)</li>
  </ul>

  <div className="bd-example">
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item"><a className="page-link" href="#">Previous</a></li>
        <li className="page-item"><a className="page-link" href="#">1</a></li>
        <li className="page-item"><a className="page-link" href="#">2</a></li>
        <li className="page-item"><a className="page-link" href="#">3</a></li>
        <li className="page-item"><a className="page-link" href="#">Next</a></li>
      </ul>
    </nav>
  </div>
  
  <h2 id="working-with-icons"><span className="bd-content-title">Working with icons</span></h2>
  
  <div className="bd-example">
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">«</span>
          </a>
        </li>
        <li className="page-item"><a className="page-link" href="#">1</a></li>
        <li className="page-item"><a className="page-link" href="#">2</a></li>
        <li className="page-item"><a className="page-link" href="#">3</a></li>
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">»</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
  
  <h2 id="disabled-and-active-states"><span className="bd-content-title">Disabled and active states</span></h2>
  
  <div className="bd-example">
    <nav aria-label="...">
      <ul className="pagination">
        <li className="page-item disabled">
          <a className="page-link" href="#" tabIndex={-1} aria-disabled="true">Previous</a>
        </li>
        <li className="page-item"><a className="page-link" href="#">1</a></li>
        <li className="page-item active" aria-current="page">
          <a className="page-link" href="#">2 <span className="sr-only">(current)</span></a>
        </li>
        <li className="page-item"><a className="page-link" href="#">3</a></li>
        <li className="page-item">
          <a className="page-link" href="#">Next</a>
        </li>
      </ul>
    </nav>
  </div>
  
  
  <div className="bd-example">
    <nav aria-label="...">
      <ul className="pagination">
        <li className="page-item disabled">
          <span className="page-link">Previous</span>
        </li>
        <li className="page-item"><a className="page-link" href="#">1</a></li>
        <li className="page-item active" aria-current="page">
          <span className="page-link">
            2
            <span className="sr-only">(current)</span>
          </span>
        </li>
        <li className="page-item"><a className="page-link" href="#">3</a></li>
        <li className="page-item">
          <a className="page-link" href="#">Next</a>
        </li>
      </ul>
    </nav>
  </div>
  
  <h2 id="sizing"><span className="bd-content-title">Sizing</span></h2>
  
  <div className="bd-example">
    <nav aria-label="...">
      <ul className="pagination pagination-lg">
        <li className="page-item active" aria-current="page">
          <span className="page-link">
            1
            <span className="sr-only">(current)</span>
          </span>
        </li>
        <li className="page-item"><a className="page-link" href="#">2</a></li>
        <li className="page-item"><a className="page-link" href="#">3</a></li>
      </ul>
    </nav>
  </div>
  
  <div className="bd-example">
    <nav aria-label="...">
      <ul className="pagination pagination-sm">
        <li className="page-item active" aria-current="page">
          <span className="page-link">
            1
            <span className="sr-only">(current)</span>
          </span>
        </li>
        <li className="page-item"><a className="page-link" href="#">2</a></li>
        <li className="page-item"><a className="page-link" href="#">3</a></li>
      </ul>
    </nav>
  </div>
  
  <h2 id="alignment"><span className="bd-content-title">Alignment</span></h2>
  
  <div className="bd-example">
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        <li className="page-item disabled">
          <a className="page-link" href="#" tabIndex={-1} aria-disabled="true">Previous</a>
        </li>
        <li className="page-item"><a className="page-link" href="#">1</a></li>
        <li className="page-item"><a className="page-link" href="#">2</a></li>
        <li className="page-item"><a className="page-link" href="#">3</a></li>
        <li className="page-item">
          <a className="page-link" href="#">Next</a>
        </li>
      </ul>
    </nav>
  </div>
  
  <div className="bd-example">
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-end">
        <li className="page-item disabled">
          <a className="page-link" href="#" tabIndex={-1} aria-disabled="true">Previous</a>
        </li>
        <li className="page-item"><a className="page-link" href="#">1</a></li>
        <li className="page-item"><a className="page-link" href="#">2</a></li>
        <li className="page-item"><a className="page-link" href="#">3</a></li>
        <li className="page-item">
          <a className="page-link" href="#">Next</a>
        </li>
      </ul>
    </nav>
  </div>
  
</main>

    );
  }
}