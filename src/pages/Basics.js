import React from 'react';
import DocSection from '../DocSection';

export default class Basics extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <main className="col-12 col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content" role="main">
        <h1 className="bd-title">Basics</h1>
        <p className="bd-lead">Basic style elements.</p>

        <DocSection id="buttons" title="Buttons">
          <p className="bd-lead">Examples and usage guidelines for button styles.</p>
        </DocSection>

        <DocSection id="colors" title="Colors">
        <p className="bd-lead">Examples and usage guidelines for color styles.</p>
        </DocSection>

        <DocSection id="icons" title="Icons">
        <p className="bd-lead">Examples and usage guidelines for icon styles.</p>
        </DocSection>
        
        <DocSection id="themes" title="Themes">
        <a href="#themes" id="themes"><h3>Themes</h3></a>
        <p className="bd-lead">Examples and usage guidelines for theming.</p>
        </DocSection>

        <DocSection id="typography" title="Typography">
        <p className="bd-lead">Examples and usage guidelines for typography.</p>
        </DocSection>
      </main>
    );
  }
}
