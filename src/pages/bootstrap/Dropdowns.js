import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

export default class Dropdowns extends React.Component {
  render() {
    return (
      <main className="col-12 col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content" role="main">
        <h1 className="bd-title" id="content">
          Dropdowns
        </h1>
        <p className="bd-lead">
          Toggle contextual overlays for displaying lists of links and more with the Bootstrap dropdown plugin.
        </p>

        <h2>To do</h2>
        <ul>
          
          <li>replace buttons with a one that looks more like a select.</li>
          <li>
            Remove the buttons, update docs to indicate that the display of the dropdown is unimportant. It's the
            presences of the chevron icon.
          </li>
          <li>Menu popup itself – should use 'The Shadow' that we also use for buttons, etc.</li>
        </ul>

      <h2>Notes:</h2>
        <ul>
          <li>As shown, the display of the button itself isn't important.  It's the existence of the chevron that matters.</li>
          <li>Ultimately we'll use the paragon version: <a href="https://edx.github.io/paragon/?selectedKind=Dropdown&selectedStory=basic%20usage&full=0&addons=1&stories=1&panelRight=1&addonPanel=storybook%2Factions%2Factions-panel">Paragon Dropdown Component</a></li>
        </ul>

        <div className="bd-example">
          <div className="dropdown mb-3">
            <button
              className="btn btn-primary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="mr-3">Dropdown button</span>
              <FontAwesomeIcon className="fa-sm" icon={faChevronDown} />
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </div>

          <div className="dropdown mb-3">
            <button
              className="btn btn-outline-primary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="mr-3">Dropdown button</span>
              <FontAwesomeIcon className="fa-sm" icon={faChevronDown} />
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </div>

          <div className="dropdown">
            <button
              className="btn btn-link dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="mr-3">Dropdown button</span>
              <FontAwesomeIcon className="fa-sm" icon={faChevronDown} />
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </div>
        </div>

        {/* /example */}
        <div className="bd-example">
          <div className="dropup mb-3">
            <button
              type="button"
              className="btn btn-outline-primary dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="mr-3">Dropup button</span>
              <FontAwesomeIcon className="fa-sm" icon={faChevronUp} />
            </button>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
              <div className="dropdown-divider" />
              <a className="dropdown-item" href="#">
                Separated link
              </a>
            </div>
          </div>
          <div className="dropright mb-3">
            <button
              type="button"
              className="btn btn-outline-primary dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="mr-3">Dropright button</span>
              <FontAwesomeIcon className="fa-sm" icon={faChevronRight} />
            </button>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
              <div className="dropdown-divider" />
              <a className="dropdown-item" href="#">
                Separated link
              </a>
            </div>
          </div>
          <div className="dropleft">
            <button
              type="button"
              className="btn btn-outline-primary dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="mr-3">Dropleft button</span>
              <FontAwesomeIcon className="fa-sm" icon={faChevronLeft} />
            </button>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
              <div className="dropdown-divider" />
              <a className="dropdown-item" href="#">
                Separated link
              </a>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
