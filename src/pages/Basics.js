import React from 'react';
import Colors from './Basics.Colors';
import Typography from './Basics.Typography';
import ButtonsAndLinks from './Basics.ButtonsAndLinks';
import Themes from './Basics.Themes';
import MiscBasics from './Basics.MiscBasics';
import DocSection from '../DocSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

export default class Basics extends React.Component {
  render() {
    return (
      <main className="col-12 col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content" role="main">
        <h1 className="bd-title">Basics</h1>
        <p className="bd-lead">Basic style elements.</p>

        <DocSection id="colors" title="Colors">
          <Colors />
        </DocSection>

        <DocSection id="typography" title="Typography">
          <Typography />
        </DocSection>

        <DocSection id="buttons" title="Buttons">
          <ButtonsAndLinks />
        </DocSection>

        <DocSection id="links" title="Links">
          
        
         
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
