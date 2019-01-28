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
