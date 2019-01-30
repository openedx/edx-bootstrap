import React from 'react';


export default function ButtonsAndLinks() {
  return (
    <div>
      <ul>
        <li>Add documentation on how buttons should be layed out:  left aligned. primary first, others second.</li>
        <li>flippable for RTL.</li>
      </ul>

      <div className="mb-5">
        <h6 className="mb-2">Buttons</h6>
        <p>Buttons are used as triggers for actions. There should only be one primary button per page.</p>

        <div className="d-flex mb-3">
          <div className="pt-2 pb-2 pr-3">
            <button type="button" className="btn btn-primary">Primary</button>
          </div>
          <div className="pt-2 pb-2 pl-3 pr-3">
            <button type="button" className="btn btn-outline-primary">Secondary</button>
          </div>
          <div 
            className="pt-2 pb-2 pl-3 pr-3 d-flex align-items-center justify-content-center rounded"
            style={{
            backgroundImage: 'url(https://source.unsplash.com/featured/320x200/?people)',
            backgroundSize: 'cover',
          }}>
            <button type="button hover" className="btn btn-inverse-primary shadow">Inverse</button>
          </div>
        </div>
      </div>
      
      <div className="mb-5">
        <h6 className="mb-2">Color Variants (Use sparingly)</h6>

        <div className="mb-3">
          <button type="button" className="mr-2 btn btn-primary">Primary</button>
          <button type="button" className="mr-2 btn btn-secondary">Indigo</button>
          <button type="button" className="mr-2 btn btn-success">Success</button>
          <button type="button" className="mr-2 btn btn-danger">Danger</button>
        </div>

        <div className="mb-5">
          <button type="button" className="mr-2 btn btn-outline-primary">Primary</button>
          <button type="button" className="mr-2 btn btn-outline-secondary">Indigo</button>
          <button type="button" className="mr-2 btn btn-outline-success">Success</button>
          <button type="button" className="mr-2 btn btn-outline-danger">Danger</button>
        </div>
      </div>

      <div className="mb-5">
        <h6 className="mb-2">Sizes</h6>

        <div className="mb-3">
          <button type="button" className="mr-2 btn btn-primary btn">Medium</button>
          <button type="button" className="mr-2 btn btn-primary btn-lg">Large</button>
        </div>

      </div>
     
      <h6>Links</h6>
      <p style={{maxWidth:'30rem'}}>To navigate to a new page use a link instead. By default all links are primary blue and have underlines. Removing the underline is fine, but <a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-without-color.html">color must not be used as the only visual means of indicating interactivity</a>.</p>
      <div className="d-flex align-items-center">
        <span className="mr-5"><a href="#">Link</a></span>
        <span className="mr-5"><a href="#">Link extension →</a></span>
        <span className="mr-5"><a href="#">Link with icon</a></span>
        <span className="mr-5"><a className="btn btn-link" href="#">Link with button container</a></span>
      </div>
    </div>
  );
}