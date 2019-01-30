import React from 'react';
import DocSection from '../DocSection';

export default class Content extends React.Component {
  render() {
    return (
      <main className="col-12 col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content" role="main">
        <h1 className="bd-title">Content</h1>
        <p className="bd-lead">Examples and usage for various kinds of page content.</p>

        <DocSection id="forms" title="Forms">
          <p className="bd-lead">Examples and usage guidelines for form control styles.</p>
          <form>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="inputPassword5">Password</label>
              <input
                type="password"
                id="inputPassword5"
                className="form-control"
                aria-describedby="passwordHelpBlock"
                style={{
                  backgroundImage: 'url("data:image/png',
                  backgroundRepeat: 'no-repeat',
                  backgroundAttachment: 'scroll',
                  backgroundSize: '16px 18px',
                  backgroundPosition: '98% 50%'
                }}
              />
              <small id="passwordHelpBlock" className="form-text text-muted">
                Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces,
                special characters, or emoji.
              </small>
            </div>
            <div className="form-group">
              <label>Checkboxes</label>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck1" />
                <label className="form-check-label" htmlFor="defaultCheck1">
                  Default checkbox
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck2" disabled />
                <label className="form-check-label" htmlFor="defaultCheck2">
                  Disabled checkbox
                </label>
              </div>
            </div>
            <div className="form-group">
              <label>Radio Buttons</label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios1"
                  defaultValue="option1"
                  defaultChecked
                />
                <label className="form-check-label" htmlFor="exampleRadios1">
                  Default radio
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios2"
                  defaultValue="option2"
                />
                <label className="form-check-label" htmlFor="exampleRadios2">
                  Second default radio
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios3"
                  defaultValue="option3"
                  disabled
                />
                <label className="form-check-label" htmlFor="exampleRadios3">
                  Disabled radio
                </label>
              </div>
            </div>
            <div className="form-group">
              <label style={{ display: 'block' }}>Inline Radio Buttons</label>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  defaultValue="option1"
                />
                <label className="form-check-label" htmlFor="inlineRadio1">
                  1
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  defaultValue="option2"
                />
                <label className="form-check-label" htmlFor="inlineRadio2">
                  2
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio3"
                  defaultValue="option3"
                  disabled
                />
                <label className="form-check-label" htmlFor="inlineRadio3">
                  3 (disabled)
                </label>
              </div>
            </div>
            <div className="form-group">
              <label style={{ display: 'block' }}>Inline Checkboxes</label>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" defaultValue="option1" />
                <label className="form-check-label" htmlFor="inlineCheckbox1">
                  1
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox2" defaultValue="option2" />
                <label className="form-check-label" htmlFor="inlineCheckbox2">
                  2
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox3"
                  defaultValue="option3"
                  disabled
                />
                <label className="form-check-label" htmlFor="inlineCheckbox3">
                  3 (disabled)
                </label>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="exampleFormControlSelect1">Example select</label>
              <select className="form-control" id="exampleFormControlSelect1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlSelect2">Example multiple select</label>
              <select multiple className="form-control" id="exampleFormControlSelect2">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlDate">Example date</label>
              <input type="date" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={''} />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlFile1">Example file input</label>
              <input type="file" className="form-control-file" id="exampleFormControlFile1" />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <button type="button" className="btn btn-secondary">
              Cancel
            </button>
          </form>
        </DocSection>

        <DocSection id="cards" title="Cards">
          <p className="bd-lead">Examples and usage guidelines for cards.</p>
          <h4 className="mb-3">Bootstrap Cards</h4>
          <div class="d-flex mb-4">
            <div class="card mr-2" style={{ width: 286 }}>
              <img class="card-img-top" src="https://placebear.com/286/180" alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            <div class="card mr-2" style={{ width: 286 }}>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a>
              </div>
            </div>
            <div class="card" style={{ width: 286 }}>
              <div class="card-header">
                Featured
              </div>
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>

          <h4 className="mb-3">EdX Cards</h4>
          <h5 className="mb-3">Course Cards</h5>
          <div className="d-flex mb-4">
            <div class="edx-custom card mr-2" style={{ width: 286 }}>
              <div class="card-content">
                <div class="card-body course">
                  <h3 class="h5 card-partner mt-0 mb-1">HarvardX</h3>
                  <a class="card-link" href="/course/introduction-to-probability-0">
                    <h3 class="h5 card-title font-weight-normal">Introduction to Probability</h3>
                  </a>
                </div>
                <div class="card-stats">
                  <div class="course-count">1 course</div>
                </div>
              </div>
              <div>
                <button aria-expanded="false" aria-haspopup="dialog" class="btn card-footer expanded-false" type="button">
                  <span class="label-wrapper">
                    <div class="label">Details <span class="sr-only"> about Introduction to Probability from HarvardX</span> </div>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-down" class="svg-inline--fa fa-angle-down fa-w-10 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" id="icon-down-39b62e2f-9859-4a01-9491-265d28e2c46d">
                      <path fill="currentColor" d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z">
                      </path>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
            <div class="edx-custom card mr-2" style={{ width: 286 }}>
              <div class="card-content">
                <div class="card-body program_course">
                  <div class="float-right">
                    <div class="out-of">1/3</div>
                  </div>
                  <h3 class="h5 card-partner mt-0 mb-1">Microsoft</h3>
                  <a class="card-link" href="/course/analyzing-and-visualizing-data-with-excel-0">
                    <h3 class="h5 card-title font-weight-normal">Analyzing and Visualizing Data with Excel</h3>
                  </a>
                </div>
                <div class="card-stats">
                  <div class="course-count">1 course in a series</div>
                </div>
              </div>
              <div>
                <button aria-expanded="false" aria-haspopup="dialog" class="btn card-footer expanded-false" type="button">
                  <span class="label-wrapper">
                    <div class="label">Details <span class="sr-only"> about Analyzing and Visualizing Data with Excel from Microsoft</span> </div>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-down" class="svg-inline--fa fa-angle-down fa-w-10 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" id="icon-down-aef78d25-e1c8-4295-bc8e-7fbd88a0b653">
                    <path fill="currentColor" d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z">
                    </path>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
            <div class="edx-custom card" style={{ width: 286 }}>
              <div class="card-content">
                <div class="card-body program">
                  <div class="float-right">
                    <div class="type">Professional Certificate</div>
                  </div>
                  <h3 class="h5 card-partner mt-0 mb-1">DelftX</h3>
                  <a class="card-link" href="/professional-certificate/delftx-data-analysis-&amp;-visualization-with-excel">
                    <h3 class="h5 card-title font-weight-normal">Data Analysis &amp; Visualization with Excel</h3>
                  </a>
                </div>
                <div class="card-stats">
                  <div class="course-count">2 courses</div>
                </div>
              </div>
              <div>
                <button aria-expanded="false" aria-haspopup="dialog" class="btn card-footer expanded-false" type="button">
                  <span class="label-wrapper">
                    <div class="label">Details <span class="sr-only"> about Data Analysis &amp; Visualization with Excel from DelftX</span> </div>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-down" class="svg-inline--fa fa-angle-down fa-w-10 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" id="icon-down-90101800-8ccc-4ca2-94e0-99a14a100a83">
                    <path fill="currentColor" d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z">
                    </path>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="d-flex" style={{ marginBottom: 400 }}>
            <div class="edx-custom card mr-2" style={{ width: 286 }}>
              <div class="card-content">
                <div class="card-body course">
                  <h3 class="h5 card-partner mt-0 mb-1">HarvardX</h3>
                  <a class="card-link" href="/course/introduction-to-probability-0">
                    <h3 class="h5 card-title font-weight-normal">Introduction to Probability</h3>
                  </a>
                </div>
                <div class="card-stats">
                  <div class="course-count">1 course</div>
                </div>
              </div>
              <div>
                <button aria-expanded="false" aria-haspopup="dialog" class="btn card-footer expanded-false" type="button">
                  <span class="label-wrapper">
                    <div class="label">Details <span class="sr-only"> about Introduction to Probability from HarvardX</span> </div>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-down" class="svg-inline--fa fa-angle-down fa-w-10 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" id="icon-down-39b62e2f-9859-4a01-9491-265d28e2c46d">
                      <path fill="currentColor" d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z">
                      </path>
                    </svg>
                  </span>
                </button>
              </div>
              <div class="card-overlay mt-3 mb-2 position-absolute shadow">
                <div class="card-overlay-body shadow" role="dialog" aria-modal="false" aria-label="Details">
                  <button aria-label="close details dialog" class="btn card-overlay-close position-absolute" type="button">
                    <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="times" class="svg-inline--fa fa-times fa-w-10 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" id="icon-close-39b62e2f-9859-4a01-9491-265d28e2c46d">
                    <path fill="currentColor" d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z">
                    </path>
                    </svg>
                  </button>
                  <div class="card-overlay-text">
                    <div class="font-weight-bold mt-1">Level</div>
                    <div class="mb-3">Intermediate</div>
                    <div class="font-weight-bold">Effort</div>
                    <div class="mb-3">5-10 hours per week, for 7 weeks</div>
                    <div class="font-weight-bold">Description</div>
                    <div>Learn probability, an essential language and set of tools for understanding data, randomness, and uncertainty.</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="edx-custom card mr-2" style={{ width: 286 }}>
              <div class="card-content">
                <div class="card-body program_course">
                  <div class="float-right">
                    <div class="out-of">1/3</div>
                  </div>
                  <h3 class="h5 card-partner mt-0 mb-1">Microsoft</h3>
                  <a class="card-link" href="/course/analyzing-and-visualizing-data-with-excel-0">
                    <h3 class="h5 card-title font-weight-normal">Analyzing and Visualizing Data with Excel</h3>
                  </a>
                </div>
                <div class="card-stats">
                  <div class="course-count">1 course in a series</div>
                </div>
              </div>
              <div>
                <button aria-expanded="false" aria-haspopup="dialog" class="btn card-footer expanded-false" type="button">
                  <span class="label-wrapper">
                    <div class="label">Details <span class="sr-only"> about Analyzing and Visualizing Data with Excel from Microsoft</span> </div>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-down" class="svg-inline--fa fa-angle-down fa-w-10 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" id="icon-down-aef78d25-e1c8-4295-bc8e-7fbd88a0b653">
                    <path fill="currentColor" d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z">
                    </path>
                    </svg>
                  </span>
                </button>
              </div>
              <div class="card-overlay mt-3 mb-2 position-absolute shadow">
                <div class="card-overlay-body shadow" role="dialog" aria-modal="false" aria-label="Details">
                  <button aria-label="close details dialog" class="btn card-overlay-close position-absolute" type="button">
                    <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="times" class="svg-inline--fa fa-times fa-w-10 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" id="icon-close-aef78d25-e1c8-4295-bc8e-7fbd88a0b653">
                    <path fill="currentColor" d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z">
                    </path>
                    </svg>
                  </button>
                  <div class="card-overlay-text">
                    <div class="font-weight-bold mt-1">Level</div>
                    <div class="mb-3">Intermediate</div>
                    <div class="font-weight-bold">Effort</div>
                    <div class="mb-3">2-4 hours per week, for 6 weeks</div>
                    <div class="font-weight-bold">Description</div>
                    <div>Develop your skills with Excel, one of the common tools that data scientists depend on to gather, transform, analyze, and visualize data.</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="edx-custom card" style={{ width: 286 }}>
              <div class="card-content">
                <div class="card-body program">
                  <div class="float-right">
                    <div class="type">Professional Certificate</div>
                  </div>
                  <h3 class="h5 card-partner mt-0 mb-1">DelftX</h3>
                  <a class="card-link" href="/professional-certificate/delftx-data-analysis-&amp;-visualization-with-excel">
                    <h3 class="h5 card-title font-weight-normal">Data Analysis &amp; Visualization with Excel</h3>
                  </a>
                </div>
                <div class="card-stats">
                  <div class="course-count">2 courses</div>
                </div>
              </div>
              <div>
                <button aria-expanded="false" aria-haspopup="dialog" class="btn card-footer expanded-false" type="button">
                  <span class="label-wrapper">
                    <div class="label">Details <span class="sr-only"> about Data Analysis &amp; Visualization with Excel from DelftX</span> </div>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-down" class="svg-inline--fa fa-angle-down fa-w-10 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" id="icon-down-90101800-8ccc-4ca2-94e0-99a14a100a83">
                    <path fill="currentColor" d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z">
                    </path>
                    </svg>
                  </span>
                </button>
              </div>
              <div class="card-overlay mt-3 mb-2 position-absolute shadow">
                <div class="card-overlay-body shadow" role="dialog" aria-modal="false" aria-label="Details">
                  <button aria-label="close details dialog" class="btn card-overlay-close position-absolute" type="button">
                    <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="times" class="svg-inline--fa fa-times fa-w-10 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" id="icon-close-90101800-8ccc-4ca2-94e0-99a14a100a83">
                    <path fill="currentColor" d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z">
                    </path>
                    </svg>
                  </button>
                  <div class="card-overlay-text">
                    <div class="font-weight-bold">Description</div>
                    <div class="mt-1">Learn to carry out robust data analysis using Excel. Master the main tasks of data analysis required by data-driven organizations.</div>
                    <div class="mt-3">
                      <div class="highlighted-courses">
                        <div class="font-weight-bold">Courses In This Series</div>
                        <div class="mt-1">
                          <div>Course 1 - Data Analysis: Take It to the MAX()</div>
                        </div>
                        <div class="mt-1">
                          <div>Course 2 - Data Analysis: Visualization and Dashboard Design</div>
                        </div>
                      </div>
                      <div class="mt-1">
                        <a class="card-overlay-link" href="/professional-certificate/delftx-data-analysis-&amp;-visualization-with-excel">See all courses in the program</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DocSection>

        <DocSection id="heroes" title="Heroes">
          <p className="bd-lead">Examples and usage guidelines for heroes.</p>
        </DocSection>

        <DocSection id="tables" title="Tables">
          <p className="bd-lead">Examples and usage guidelines for tables.</p>
        </DocSection>

        <DocSection id="dialogs" title="Dialogs">
          <p className="bd-lead">Examples and usage guidelines for dialogs.</p>
        </DocSection>

        <DocSection id="factSheets" title="Fact Sheets">
          <p className="bd-lead">
            David saw these in a course. Seemed like a thing. Examples and usage guidelines for fact sheets.
          </p>
        </DocSection>

        <DocSection id="quizzes" title="Quizzes">
          <p className="bd-lead">Examples and usage guidelines for quizzes.</p>
        </DocSection>
      </main>
    );
  }
}
