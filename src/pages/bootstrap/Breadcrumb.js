import React from 'react';

export default class Breadcrumb extends React.Component {
  render() {
    return (
<main className="col-12 col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content" role="main">
  <h1 className="bd-title" id="content">Breadcrumb</h1>
  <p className="bd-lead">Indicate the current page’s location within a navigational hierarchy that automatically adds separators via CSS.</p>
  <h2>Todo: Ship it</h2>
  <h2 id="example"><span className="bd-content-title">Example</span></h2>
  <div className="bd-example">
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item active" aria-current="page">Home</li>
      </ol>
    </nav>
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><a href="#">Home</a></li>
        <li className="breadcrumb-item active" aria-current="page">Library</li>
      </ol>
    </nav>
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><a href="#">Home</a></li>
        <li className="breadcrumb-item"><a href="#">Library</a></li>
        <li className="breadcrumb-item active" aria-current="page">Data</li>
      </ol>
    </nav>
  </div>
</main>

    );
  }
}