import React from 'react';
import Colors from './Basics.Colors';
import Typography from './Basics.Typography';
import ButtonsAndLinks from './Basics.ButtonsAndLinks';
import Themes from './Basics.Themes';
import MiscBasics from './Basics.MiscBasics';

export default class Basics extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <main className="col-12 col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content" role="main">
        <h1 className="bd-title">Basics</h1>
        <p className="bd-lead">Basic style elements.</p>

        <a href="#colors" id="colors"><h3>Colors</h3></a>
        <p className="bd-lead">Examples and usage guidelines for color styles.</p>
        <Colors />

        <a href="#typography" id="typography"><h3>Typography</h3></a>
        <p className="bd-lead">Examples and usage guidelines for typography.</p>
        <Typography />

        <a href="#buttons" id="buttons"><h3>Buttons & Links</h3></a>
        <p className="bd-lead">Examples and usage guidelines for button styles.</p>
        <ButtonsAndLinks />


        <a href="#icons" id="icons"><h3>Icons</h3></a>
        <p className="bd-lead">Examples and usage guidelines for icon styles.</p>
        <p>See <a href="https://fontawesome.com/icons?d=gallery&m=free">Font Awesome (Free)</a></p>
        
        <a href="#icons" id="misc-basics"><h3>Misc Elements</h3></a>
        <p className="bd-lead">Examples and usage guidelines for icon styles.</p>
        <MiscBasics />

        <a href="#themes" id="themes"><h3>Themes</h3></a>
        <p className="bd-lead">Examples and usage guidelines for theming.</p>
        <Themes />
      </main>
    );
  }
}
