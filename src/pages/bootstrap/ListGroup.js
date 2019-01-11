import React from 'react';

export default class ListGroup extends React.Component {
  render() {
    return (
<main className="col-12 col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content" role="main">
  <h1 className="bd-title" id="content">List group</h1>
  <p className="bd-lead">List groups are a flexible and powerful component for displaying a series of content. Modify and extend them to support just about any content within.</p>
  
  <h2>To do</h2>
  <ul>
    <li>Delete? (may add back)</li>
  </ul>
  
  <h2 id="basic-example"><span className="bd-content-title">Basic example</span></h2>
  
  <div className="bd-example">
    <ul className="list-group">
      <li className="list-group-item">Cras justo odio</li>
      <li className="list-group-item">Dapibus ac facilisis in</li>
      <li className="list-group-item">Morbi leo risus</li>
      <li className="list-group-item">Porta ac consectetur ac</li>
      <li className="list-group-item">Vestibulum at eros</li>
    </ul>
  </div>
  
  <h2 id="active-items"><span className="bd-content-title">Active items</span></h2>
  
  <div className="bd-example">
    <ul className="list-group">
      <li className="list-group-item active">Cras justo odio</li>
      <li className="list-group-item">Dapibus ac facilisis in</li>
      <li className="list-group-item">Morbi leo risus</li>
      <li className="list-group-item">Porta ac consectetur ac</li>
      <li className="list-group-item">Vestibulum at eros</li>
    </ul>
  </div>
  
  <h2 id="disabled-items"><span className="bd-content-title">Disabled items</span></h2>
  
  <div className="bd-example">
    <ul className="list-group">
      <li className="list-group-item disabled" aria-disabled="true">Cras justo odio</li>
      <li className="list-group-item">Dapibus ac facilisis in</li>
      <li className="list-group-item">Morbi leo risus</li>
      <li className="list-group-item">Porta ac consectetur ac</li>
      <li className="list-group-item">Vestibulum at eros</li>
    </ul>
  </div>
  
  <h2 id="links-and-buttons"><span className="bd-content-title">Links and buttons</span></h2>
  
  <div className="bd-example">
    <div className="list-group">
      <a href="#" className="list-group-item list-group-item-action active">
        Cras justo odio
      </a>
      <a href="#" className="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
      <a href="#" className="list-group-item list-group-item-action">Morbi leo risus</a>
      <a href="#" className="list-group-item list-group-item-action">Porta ac consectetur ac</a>
      <a href="#" className="list-group-item list-group-item-action disabled" tabIndex={-1} aria-disabled="true">Vestibulum at eros</a>
    </div>
  </div>
  
  
  <div className="bd-example">
    <div className="list-group">
      <button type="button" className="list-group-item list-group-item-action active">
        Cras justo odio
      </button>
      <button type="button" className="list-group-item list-group-item-action">Dapibus ac facilisis in</button>
      <button type="button" className="list-group-item list-group-item-action">Morbi leo risus</button>
      <button type="button" className="list-group-item list-group-item-action">Porta ac consectetur ac</button>
      <button type="button" className="list-group-item list-group-item-action" disabled>Vestibulum at eros</button>
    </div>
  </div>
  
  <h2 id="flush"><span className="bd-content-title">Flush</span></h2>
  
  <div className="bd-example">
    <ul className="list-group list-group-flush">
      <li className="list-group-item">Cras justo odio</li>
      <li className="list-group-item">Dapibus ac facilisis in</li>
      <li className="list-group-item">Morbi leo risus</li>
      <li className="list-group-item">Porta ac consectetur ac</li>
      <li className="list-group-item">Vestibulum at eros</li>
    </ul>
  </div>
  
  <h2 id="contextual-classes"><span className="bd-content-title">Contextual classes</span></h2>
  
  <div className="bd-example">
    <ul className="list-group">
      <li className="list-group-item">Dapibus ac facilisis in</li>
      <li className="list-group-item list-group-item-primary">A simple primary list group item</li>
      <li className="list-group-item list-group-item-secondary">A simple secondary list group item</li>
      <li className="list-group-item list-group-item-success">A simple success list group item</li>
      <li className="list-group-item list-group-item-danger">A simple danger list group item</li>
      <li className="list-group-item list-group-item-warning">A simple warning list group item</li>
      <li className="list-group-item list-group-item-info">A simple info list group item</li>
      <li className="list-group-item list-group-item-light">A simple light list group item</li>
      <li className="list-group-item list-group-item-dark">A simple dark list group item</li>
    </ul>
  </div>
  
  
  <div className="bd-example">
    <div className="list-group">
      <a href="#" className="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
      <a href="#" className="list-group-item list-group-item-action list-group-item-primary">A simple primary list group item</a>
      <a href="#" className="list-group-item list-group-item-action list-group-item-secondary">A simple secondary list group item</a>
      <a href="#" className="list-group-item list-group-item-action list-group-item-success">A simple success list group item</a>
      <a href="#" className="list-group-item list-group-item-action list-group-item-danger">A simple danger list group item</a>
      <a href="#" className="list-group-item list-group-item-action list-group-item-warning">A simple warning list group item</a>
      <a href="#" className="list-group-item list-group-item-action list-group-item-info">A simple info list group item</a>
      <a href="#" className="list-group-item list-group-item-action list-group-item-light">A simple light list group item</a>
      <a href="#" className="list-group-item list-group-item-action list-group-item-dark">A simple dark list group item</a>
    </div>
  </div>
  
  
  <h2 id="with-badges"><span className="bd-content-title">With badges</span></h2>
  
  <div className="bd-example">
    <ul className="list-group">
      <li className="list-group-item d-flex justify-content-between align-items-center">
        Cras justo odio
        <span className="badge badge-primary badge-pill">14</span>
      </li>
      <li className="list-group-item d-flex justify-content-between align-items-center">
        Dapibus ac facilisis in
        <span className="badge badge-primary badge-pill">2</span>
      </li>
      <li className="list-group-item d-flex justify-content-between align-items-center">
        Morbi leo risus
        <span className="badge badge-primary badge-pill">1</span>
      </li>
    </ul>
  </div>
  
  <h2 id="custom-content"><span className="bd-content-title">Custom content</span></h2>
  
  <div className="bd-example">
    <div className="list-group">
      <a href="#" className="list-group-item list-group-item-action active">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">List group item heading</h5>
          <small>3 days ago</small>
        </div>
        <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
        <small>Donec id elit non mi porta.</small>
      </a>
      <a href="#" className="list-group-item list-group-item-action">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">List group item heading</h5>
          <small className="text-muted">3 days ago</small>
        </div>
        <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
        <small className="text-muted">Donec id elit non mi porta.</small>
      </a>
      <a href="#" className="list-group-item list-group-item-action">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">List group item heading</h5>
          <small className="text-muted">3 days ago</small>
        </div>
        <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
        <small className="text-muted">Donec id elit non mi porta.</small>
      </a>
    </div>
  </div>
  
  <h2 id="javascript-behavior"><span className="bd-content-title">JavaScript behavior</span></h2>
  
  <div className="bd-example" role="tabpanel">
    <div className="row">
      <div className="col-4">
        <div className="list-group" id="list-tab" role="tablist">
          <a className="list-group-item list-group-item-action active" id="list-home-list" data-toggle="tab" href="#list-home" role="tab" aria-controls="list-home">Home</a>
          <a className="list-group-item list-group-item-action" id="list-profile-list" data-toggle="tab" href="#list-profile" role="tab" aria-controls="list-profile">Profile</a>
          <a className="list-group-item list-group-item-action" id="list-messages-list" data-toggle="tab" href="#list-messages" role="tab" aria-controls="list-messages">Messages</a>
          <a className="list-group-item list-group-item-action" id="list-settings-list" data-toggle="tab" href="#list-settings" role="tab" aria-controls="list-settings">Settings</a>
        </div>
      </div>
      <div className="col-8">
        <div className="tab-content" id="nav-tabContent">
          <div className="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
            <p>Velit aute mollit ipsum ad dolor consectetur nulla officia culpa adipisicing exercitation fugiat tempor. Voluptate deserunt sit sunt nisi aliqua fugiat proident ea ut. Mollit voluptate reprehenderit occaecat nisi ad non minim tempor sunt voluptate consectetur exercitation id ut nulla. Ea et fugiat aliquip nostrud sunt incididunt consectetur culpa aliquip eiusmod dolor. Anim ad Lorem aliqua in cupidatat nisi enim eu nostrud do aliquip veniam minim.</p>
          </div>
          <div className="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">
            <p>Cupidatat quis ad sint excepteur laborum in esse qui. Et excepteur consectetur ex nisi eu do cillum ad laborum. Mollit et eu officia dolore sunt Lorem culpa qui commodo velit ex amet id ex. Officia anim incididunt laboris deserunt anim aute dolor incididunt veniam aute dolore do exercitation. Dolor nisi culpa ex ad irure in elit eu dolore. Ad laboris ipsum reprehenderit irure non commodo enim culpa commodo veniam incididunt veniam ad.</p>
          </div>
          <div className="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">
            <p>Ut ut do pariatur aliquip aliqua aliquip exercitation do nostrud commodo reprehenderit aute ipsum voluptate. Irure Lorem et laboris nostrud amet cupidatat cupidatat anim do ut velit mollit consequat enim tempor. Consectetur est minim nostrud nostrud consectetur irure labore voluptate irure. Ipsum id Lorem sit sint voluptate est pariatur eu ad cupidatat et deserunt culpa sit eiusmod deserunt. Consectetur et fugiat anim do eiusmod aliquip nulla laborum elit adipisicing pariatur cillum.</p>
          </div>
          <div className="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">
            <p>Irure enim occaecat labore sit qui aliquip reprehenderit amet velit. Deserunt ullamco ex elit nostrud ut dolore nisi officia magna sit occaecat laboris sunt dolor. Nisi eu minim cillum occaecat aute est cupidatat aliqua labore aute occaecat ea aliquip sunt amet. Aute mollit dolor ut exercitation irure commodo non amet consectetur quis amet culpa. Quis ullamco nisi amet qui aute irure eu. Magna labore dolor quis ex labore id nostrud deserunt dolor eiusmod eu pariatur culpa mollit in irure.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <h3 id="using-data-attributes"><span className="bd-content-title">Using data attributes</span></h3>
 
</main>

    );
  }
}