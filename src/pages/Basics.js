import React from 'react';
import Colors from './Basics.Colors';
import Typography from './Basics.Typography';
import ButtonsAndLinks from './Basics.ButtonsAndLinks';
import Themes from './Basics.Themes';
import MiscBasics from './Basics.MiscBasics';
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

        <DocSection id="colors" title="Colors">
          <p className="bd-lead">Examples and usage guidelines for color styles.</p>
          <Colors />
        </DocSection>

        <DocSection id="typography" title="Typography">
          <p className="bd-lead">Examples and usage guidelines for typography.</p>
          <Typography />
        </DocSection>

        <DocSection id="buttons" title="Buttons">
          <p className="bd-lead">Examples and usage guidelines for button styles.</p>
          <ButtonsAndLinks />
        </DocSection>

        <DocSection id="icons" title="Icons">
          <p className="bd-lead">Examples and usage guidelines for icon styles.</p>
          <p>See <a href="https://fontawesome.com/icons?d=gallery&m=free">Font Awesome (Free)</a></p>
        </DocSection>

        <DocSection id="misc-basics" title="Misc Elements">
          <p className="bd-lead">Examples and usage guidelines for icon styles.</p>
          <MiscBasics />
        </DocSection>

        <DocSection id="themes" title="Themes">
          <p className="bd-lead">Examples and usage guidelines for theming.</p>
          <Themes />
        </DocSection>

      </main>
    );
  }
}
