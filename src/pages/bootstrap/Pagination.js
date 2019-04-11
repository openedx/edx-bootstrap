import React from 'react';

export default class Pagination extends React.Component {
  render() {
    return (
      <main className="col-12 col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content" role="main">
        <h1 className="bd-title" id="content">Pagination</h1>
        <p className="bd-lead">Documentation and examples for showing pagination to indicate a series of related content exists across multiple pages.</p>
        
        <h2 id="overview"><span className="bd-content-title">Overview</span></h2>
        <div className="bd-example">
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item"><a className="page-link" href="#demo">Previous</a></li>
              <li className="page-item"><a className="page-link" href="#demo">1</a></li>
              <li className="page-item"><a className="page-link" href="#demo">2</a></li>
              <li className="page-item"><a className="page-link" href="#demo">3</a></li>
              <li className="page-item"><a className="page-link" href="#demo">Next</a></li>
            </ul>
          </nav>
        </div> 

        <div class="alert alert-success mt-4" role="alert">
          <h2>Decision</h2>
          <p>Paragon's <a href="https://edx.github.io/paragon/?selectedKind=Pagination&selectedStory=basic%20usage&full=0&addons=1&stories=1&panelRight=1&addonPanel=REACT_STORYBOOK%2Freadme%2Fpanel">pagination component</a> will be used with minor updates to add rounded corners.</p>
        </div>
      </main>
    );
  }
}