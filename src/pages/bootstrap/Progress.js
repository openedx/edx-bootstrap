import React from 'react';

export default class Progress extends React.Component {
  render() {
    return (
<main className="col-12 col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content" role="main">
  <h1 className="bd-title" id="content">Progress</h1>
  <p className="bd-lead">Documentation and examples for using Bootstrap custom progress bars featuring support for stacked bars, animated backgrounds, and text labels.</p>
  
  <h2>To do</h2>
  <ul>
    <li>Document as progress bar (no animation, progress thru a course) and as loading bar (animated and completing)</li>
  </ul>

  <div className="bd-example">
    <div className="progress">
      <div className="progress-bar" role="progressbar" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
    </div>
    <div className="progress">
      <div className="progress-bar" role="progressbar" style={{width: '25%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
    </div>
    <div className="progress">
      <div className="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
    </div>
    <div className="progress">
      <div className="progress-bar" role="progressbar" style={{width: '75%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
    </div>
    <div className="progress">
      <div className="progress-bar" role="progressbar" style={{width: '100%'}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
    </div>
  </div>
  
  
  <div className="bd-example">
    <div className="progress">
      <div className="progress-bar w-75" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
    </div>
  </div>
  
  <h2 id="labels"><span className="bd-content-title">Labels</span></h2>
  
  <div className="bd-example">
    <div className="progress">
      <div className="progress-bar" role="progressbar" style={{width: '25%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>25%</div>
    </div>
  </div>
  
  <h2 id="backgrounds"><span className="bd-content-title">Backgrounds</span></h2>
  
  <div className="bd-example">
    <div className="progress">
      <div className="progress-bar bg-success" role="progressbar" style={{width: '25%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
    </div>
    <div className="progress">
      <div className="progress-bar bg-info" role="progressbar" style={{width: '50%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
    </div>
    <div className="progress">
      <div className="progress-bar bg-warning" role="progressbar" style={{width: '75%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
    </div>
    <div className="progress">
      <div className="progress-bar bg-danger" role="progressbar" style={{width: '100%'}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
    </div>
  </div>
  
 
  
  <h2 id="striped"><span className="bd-content-title">Striped</span></h2>
  
  <div className="bd-example">
    <div className="progress">
      <div className="progress-bar progress-bar-striped" role="progressbar" style={{width: '10%'}} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100} />
    </div>
    <div className="progress">
      <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: '25%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
    </div>
    <div className="progress">
      <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{width: '50%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
    </div>
    <div className="progress">
      <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{width: '75%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
    </div>
    <div className="progress">
      <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{width: '100%'}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
    </div>
  </div>
  
  <h2 id="animated-stripes"><span className="bd-content-title">Animated stripes</span></h2>
  
  <div className="bd-example">
    <div className="progress">
      <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} style={{width: '75%'}} />
    </div>
  </div>
  
</main>

    );
  }
}