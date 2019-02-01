import React from 'react';
import DocSection from '../../DocSection';

export default class Card extends React.Component {
  render() {
    return (
      <main className="col-12 col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content" role="main">
        <DocSection id="cards" title="Cards">
          <p className="bd-lead">Examples and usage guidelines for cards.</p>
          <h4 className="mb-3">Bootstrap Cards</h4>
          <div class="d-flex mb-4">
            <div class="card mr-2" style={{ width: 286 }}>
              <img class="card-img-top" src="https://placebear.com/286/180" alt="A magical card" />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
            <div class="card mr-2" style={{ width: 286 }}>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p class="card-text">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <a href="#" class="card-link">
                  Card link
                </a>
                <a href="#" class="card-link">
                  Another link
                </a>
              </div>
            </div>
            <div class="card" style={{ width: 286 }}>
              <div class="card-header">Featured</div>
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
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
                <button
                  aria-expanded="false"
                  aria-haspopup="dialog"
                  class="btn card-footer expanded-false"
                  type="button"
                >
                  <span class="label-wrapper">
                    <div class="label">
                      Details <span class="sr-only"> about Introduction to Probability from HarvardX</span>{' '}
                    </div>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="angle-down"
                      class="svg-inline--fa fa-angle-down fa-w-10 "
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                      id="icon-down-39b62e2f-9859-4a01-9491-265d28e2c46d"
                    >
                      <path
                        fill="currentColor"
                        d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"
                      />
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
                <button
                  aria-expanded="false"
                  aria-haspopup="dialog"
                  class="btn card-footer expanded-false"
                  type="button"
                >
                  <span class="label-wrapper">
                    <div class="label">
                      Details{' '}
                      <span class="sr-only"> about Analyzing and Visualizing Data with Excel from Microsoft</span>{' '}
                    </div>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="angle-down"
                      class="svg-inline--fa fa-angle-down fa-w-10 "
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                      id="icon-down-aef78d25-e1c8-4295-bc8e-7fbd88a0b653"
                    >
                      <path
                        fill="currentColor"
                        d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"
                      />
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
                  <a
                    class="card-link"
                    href="/professional-certificate/delftx-data-analysis-&amp;-visualization-with-excel"
                  >
                    <h3 class="h5 card-title font-weight-normal">Data Analysis &amp; Visualization with Excel</h3>
                  </a>
                </div>
                <div class="card-stats">
                  <div class="course-count">2 courses</div>
                </div>
              </div>
              <div>
                <button
                  aria-expanded="false"
                  aria-haspopup="dialog"
                  class="btn card-footer expanded-false"
                  type="button"
                >
                  <span class="label-wrapper">
                    <div class="label">
                      Details{' '}
                      <span class="sr-only"> about Data Analysis &amp; Visualization with Excel from DelftX</span>{' '}
                    </div>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="angle-down"
                      class="svg-inline--fa fa-angle-down fa-w-10 "
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                      id="icon-down-90101800-8ccc-4ca2-94e0-99a14a100a83"
                    >
                      <path
                        fill="currentColor"
                        d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"
                      />
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
                <button
                  aria-expanded="false"
                  aria-haspopup="dialog"
                  class="btn card-footer expanded-false"
                  type="button"
                >
                  <span class="label-wrapper">
                    <div class="label">
                      Details <span class="sr-only"> about Introduction to Probability from HarvardX</span>{' '}
                    </div>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="angle-down"
                      class="svg-inline--fa fa-angle-down fa-w-10 "
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                      id="icon-down-39b62e2f-9859-4a01-9491-265d28e2c46d"
                    >
                      <path
                        fill="currentColor"
                        d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"
                      />
                    </svg>
                  </span>
                </button>
              </div>
              <div class="card-overlay mt-3 mb-2 position-absolute shadow">
                <div class="card-overlay-body shadow" role="dialog" aria-modal="false" aria-label="Details">
                  <button
                    aria-label="close details dialog"
                    class="btn card-overlay-close position-absolute"
                    type="button"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fal"
                      data-icon="times"
                      class="svg-inline--fa fa-times fa-w-10 "
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                      id="icon-close-39b62e2f-9859-4a01-9491-265d28e2c46d"
                    >
                      <path
                        fill="currentColor"
                        d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"
                      />
                    </svg>
                  </button>
                  <div class="card-overlay-text">
                    <div class="font-weight-bold mt-1">Level</div>
                    <div class="mb-3">Intermediate</div>
                    <div class="font-weight-bold">Effort</div>
                    <div class="mb-3">5-10 hours per week, for 7 weeks</div>
                    <div class="font-weight-bold">Description</div>
                    <div>
                      Learn probability, an essential language and set of tools for understanding data, randomness, and
                      uncertainty.
                    </div>
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
                <button
                  aria-expanded="false"
                  aria-haspopup="dialog"
                  class="btn card-footer expanded-false"
                  type="button"
                >
                  <span class="label-wrapper">
                    <div class="label">
                      Details{' '}
                      <span class="sr-only"> about Analyzing and Visualizing Data with Excel from Microsoft</span>{' '}
                    </div>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="angle-down"
                      class="svg-inline--fa fa-angle-down fa-w-10 "
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                      id="icon-down-aef78d25-e1c8-4295-bc8e-7fbd88a0b653"
                    >
                      <path
                        fill="currentColor"
                        d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"
                      />
                    </svg>
                  </span>
                </button>
              </div>
              <div class="card-overlay mt-3 mb-2 position-absolute shadow">
                <div class="card-overlay-body shadow" role="dialog" aria-modal="false" aria-label="Details">
                  <button
                    aria-label="close details dialog"
                    class="btn card-overlay-close position-absolute"
                    type="button"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fal"
                      data-icon="times"
                      class="svg-inline--fa fa-times fa-w-10 "
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                      id="icon-close-aef78d25-e1c8-4295-bc8e-7fbd88a0b653"
                    >
                      <path
                        fill="currentColor"
                        d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"
                      />
                    </svg>
                  </button>
                  <div class="card-overlay-text">
                    <div class="font-weight-bold mt-1">Level</div>
                    <div class="mb-3">Intermediate</div>
                    <div class="font-weight-bold">Effort</div>
                    <div class="mb-3">2-4 hours per week, for 6 weeks</div>
                    <div class="font-weight-bold">Description</div>
                    <div>
                      Develop your skills with Excel, one of the common tools that data scientists depend on to gather,
                      transform, analyze, and visualize data.
                    </div>
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
                  <a
                    class="card-link"
                    href="/professional-certificate/delftx-data-analysis-&amp;-visualization-with-excel"
                  >
                    <h3 class="h5 card-title font-weight-normal">Data Analysis &amp; Visualization with Excel</h3>
                  </a>
                </div>
                <div class="card-stats">
                  <div class="course-count">2 courses</div>
                </div>
              </div>
              <div>
                <button
                  aria-expanded="false"
                  aria-haspopup="dialog"
                  class="btn card-footer expanded-false"
                  type="button"
                >
                  <span class="label-wrapper">
                    <div class="label">
                      Details{' '}
                      <span class="sr-only"> about Data Analysis &amp; Visualization with Excel from DelftX</span>{' '}
                    </div>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="angle-down"
                      class="svg-inline--fa fa-angle-down fa-w-10 "
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                      id="icon-down-90101800-8ccc-4ca2-94e0-99a14a100a83"
                    >
                      <path
                        fill="currentColor"
                        d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"
                      />
                    </svg>
                  </span>
                </button>
              </div>
              <div class="card-overlay mt-3 mb-2 position-absolute shadow">
                <div class="card-overlay-body shadow" role="dialog" aria-modal="false" aria-label="Details">
                  <button
                    aria-label="close details dialog"
                    class="btn card-overlay-close position-absolute"
                    type="button"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fal"
                      data-icon="times"
                      class="svg-inline--fa fa-times fa-w-10 "
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                      id="icon-close-90101800-8ccc-4ca2-94e0-99a14a100a83"
                    >
                      <path
                        fill="currentColor"
                        d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"
                      />
                    </svg>
                  </button>
                  <div class="card-overlay-text">
                    <div class="font-weight-bold">Description</div>
                    <div class="mt-1">
                      Learn to carry out robust data analysis using Excel. Master the main tasks of data analysis
                      required by data-driven organizations.
                    </div>
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
                        <a
                          class="card-overlay-link"
                          href="/professional-certificate/delftx-data-analysis-&amp;-visualization-with-excel"
                        >
                          See all courses in the program
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DocSection>
      </main>
    );
  }
}
