import React from 'react';


export default function ButtonsAndLinks() {
  return (
    <div>
      <div className="mb-3">
        <button type="button" className="mr-2 btn btn-primary">Primary</button>
        <button type="button" className="mr-2 btn btn-secondary">Secondary</button>
        <button type="button" className="mr-2 btn btn-success">Success</button>
        <button type="button" className="mr-2 btn btn-danger">Danger</button>
        <button type="button" className="mr-2 btn btn-warning">Warning</button>
        <button type="button" className="mr-2 btn btn-info">Info</button>
        <button type="button" className="mr-2 btn btn-light">Light</button>
        <button type="button" className="mr-2 btn btn-dark">Dark</button>
        <button type="button" className="btn btn-link">Link</button>
      </div>

      <div className="mb-5">
        <button type="button" className="mr-2 btn btn-outline-primary">Primary</button>
        <button type="button" className="mr-2 btn btn-outline-secondary">Secondary</button>
        <button type="button" className="mr-2 btn btn-outline-success">Success</button>
        <button type="button" className="mr-2 btn btn-outline-danger">Danger</button>
        <button type="button" className="mr-2 btn btn-outline-warning">Warning</button>
        <button type="button" className="mr-2 btn btn-outline-info">Info</button>
        <button type="button" className="mr-2 btn btn-outline-light">Light</button>
        <button type="button" className="mr-2 btn btn-outline-dark">Dark</button>
      </div>

      <h6>Links</h6>
      <p style={{maxWidth:'30rem'}}>By default all links are <a href="#">primary blue and have underlines</a>. Removing the underline is fine, but <a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-without-color.html">color must not be used as the only visual means of indicating interactivity</a>.</p>
    </div>
  );
}