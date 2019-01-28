import React from 'react';

export default class Basics extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <main className="col-12 col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content" role="main">
        <h1 className="bd-title">Basics</h1>
        <p className="bd-lead">Basic style elements.</p>

        <a href="#buttons" id="buttons"><h3>Buttons</h3></a>
        <p className="bd-lead">Examples and usage guidelines for button styles.</p>

        <a href="#colors" id="colors"><h3>Colors</h3></a>
        <p className="bd-lead">Examples and usage guidelines for color styles.</p>

        <a href="#icons" id="icons"><h3>Icons</h3></a>
        <p className="bd-lead">Examples and usage guidelines for icon styles.</p>
        
        <a href="#themes" id="themes"><h3>Themes</h3></a>
        <p className="bd-lead">Examples and usage guidelines for theming.</p>

        <a href="#typography" id="typography"><h3>Themes</h3></a>
        <p className="bd-lead">Examples and usage guidelines for typography.</p>
      </main>
    );
  }
}
