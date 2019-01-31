import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faInfoCircle } from '@fortawesome/free-solid-svg-icons';


export default function ButtonsAndLinks() {
  return (
    <div>
      <div className="mb-5">
        <h5 className="section">Buttons</h5>
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
        <h5 className="section">Color Variants (Use sparingly)</h5>

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
        <h5 className="section">Sizes</h5>

        <div className="mb-3">
          <button type="button" className="mr-2 btn btn-primary btn">Medium</button>
          <button type="button" className="mr-2 btn btn-primary btn-lg">Large</button>
        </div>
      </div>

      <div className="mb-5">
        <h5 className="section">With Icons</h5>

        <div className="mb-3">
          <button type="button" className="mr-2 btn btn-primary btn"><FontAwesomeIcon icon={faCheckCircle} />  Medium</button>
          <button type="button" className="mr-2 btn btn-primary btn-lg"><FontAwesomeIcon icon={faCheckCircle} />  Large</button>
        </div>
      </div>

      
     
      <h6>Links</h6>
      <p style={{maxWidth:'30rem'}}>To navigate to a new page use a link instead. By default all links are primary blue and have underlines. Removing the underline is fine, but <a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-without-color.html">color must not be used as the only visual means of indicating interactivity</a>.</p>
      <div className="mb-5 d-flex align-items-center">
        <span className="mr-5"><a href="#">Link</a></span>
        <span className="mr-5"><a href="#">Link extension →</a></span>
        <span className="mr-5"><a href="#"><FontAwesomeIcon icon={faCheckCircle} />Link with icon</a></span>
        <span className="mr-5"><a className="btn btn-link" href="#">Link with button container</a></span>
      </div>


      <div className="alert alert-info d-flex" role="alert">
        <div className="flex-grow-0 mr-2">
          <FontAwesomeIcon icon={faInfoCircle} />
        </div>
        <div className="flex-grow-1">
          <h6>To do:</h6>
          <ul className="list-unstyled mb-0">
            <li>Add documentation on how buttons should be layed out:  left aligned. primary first, others second.</li>
            <li>Flippable for RTL.</li>
          </ul>
        </div>
      </div>

    </div>
  );
}