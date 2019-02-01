import React from 'react';
import classNames from 'classnames';

import DocSection from '../DocSection';

const defaultState = {
  email: '',
  password: '',
  mittens: false,
  boots: false,
  notMittensOrBoots: false,
  floofiness: null,
  catCount: 3,
  catName: '',
  birthday: '',
  nappingSpot: '',
  catPicture: '',
};

export default class Forms extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      mittens: false,
      boots: false,
      notMittensOrBoots: false,
      floofiness: null,
      catCount: 3,
      catName: '',
      birthday: '',
      nappingSpot: '',
      catPicture: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleChange(event) {
    const { name } = event.target;
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    this.validate();

    e.preventDefault();
    return false;
  }

  handleCancel(e) {
    this.setState(defaultState);
    e.preventDefault();
    return false;
  }

  validate() {}

  render() {
    return (
      <main className="col-12 col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content" role="main">
        <DocSection id="forms" title="Forms">
          <h3>Notes</h3>
          <ul>
            <li>
              From groups should be stacked. Label first, then input, then help text below that.
            </li>
            <li>
              If there is an error state for the input, it should go below the input, above the help
              text.
            </li>
            <li>
              Error states should be included at the top of the form with anchor links down to the
              actual errored fields.
            </li>
          </ul>
          <form action="" className="needs-validation">
            <div className="bd-example">
              <div className="form-group">
                <label htmlFor="exampleFormControlInput1">
                  Cat's Email address
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="inputPassword5">
                  Secret Cat Password
                  <input
                    type="password"
                    id="inputPassword5"
                    className="form-control"
                    aria-describedby="passwordHelpBlock"
                    onChange={this.handleChange}
                    value={this.state.password}
                    name="password"
                  />
                </label>
                <div className="valid-feedback">Looks good!</div>
                <small id="passwordHelpBlock" className="form-text text-muted">
                  Your password must be 8-32 characters long, contain letters and numbers, and must
                  not contain spaces, special characters, or emoji.
                </small>
              </div>
              <div className="form-group">
                <label>Does your cat have mittens and boots?</label>
                <div className="form-check">
                  <label className="form-check-label" htmlFor="catClothes1">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="catClothes1"
                      name="mittens"
                      value={this.state.mittens}
                      onChange={this.handleChange}
                    />
                    Mittens
                  </label>
                </div>
                <div className="form-check">
                  <label className="form-check-label" htmlFor="catClothes2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="catClothes2"
                      name="boots"
                      value={this.state.boots}
                      onChange={this.handleChange}
                    />
                    Boots
                  </label>
                </div>
                <div className="form-check">
                  <label className="form-check-label" htmlFor="catClothes3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="catClothes3"
                      disabled
                      name="notMittensOrBoots"
                      value={this.state.notMittensOrBoots}
                      onChange={this.handleChange}
                    />
                    <span className="form-check-label">Neither</span> {/* Using the span and className here is necessary to get bootstrap to change the text color */}
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label>How floofy is your cat?</label>
                <div className="form-check">
                  <label className="form-check-label" htmlFor="floofiness1">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="floofiness"
                      id="floofiness1"
                      value="very"
                      checked={this.state.floofiness === 'very'}
                      onChange={this.handleChange}
                    />
                    Very floofy
                  </label>
                </div>
                <div className="form-check">
                  <label className="form-check-label" htmlFor="floofiness2">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="floofiness"
                      id="floofiness2"
                      value="somewhat"
                      checked={this.state.floofiness === 'somewhat'}
                      onChange={this.handleChange}
                    />
                    Somewhat floofy
                  </label>
                </div>
                <div className="form-check">
                  <label className="form-check-label" htmlFor="floofiness3">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="floofiness"
                      id="floofiness3"
                      disabled
                      value="not"
                      checked={this.state.floofiness === 'not'}
                      onChange={this.handleChange}
                    />
                    <span className="form-check-label">Not floofy</span> {/* Using the span and className here is necessary to get bootstrap to change the text color */}
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="exampleFormControlSelect1">
                  How many cats do you have?
                  <select
                    className="form-control"
                    id="exampleFormControlSelect1"
                    name="catCount"
                    value={this.state.catCount}
                    onChange={this.handleChange}
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlSelect2">
                  Which is your cat's name?
                  <select
                    size={5}
                    className="form-control"
                    id="exampleFormControlSelect2"
                    name="catName"
                    value={this.state.catName}
                    onChange={this.handleChange}
                  >
                    <option>Snowball</option>
                    <option>Taco</option>
                    <option>Dr. Teeth</option>
                    <option>Albus Dumblemeow</option>
                    <option>Kitty</option>
                  </select>
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlDate">
                  When was your cat born?
                  <input
                    type="date"
                    className="form-control"
                    name="birthday"
                    value={this.state.birthday}
                    onChange={this.handleChange}
                  />
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">
                  Describe your cat's favorite napping spot
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    name="nappingSpot"
                    value={this.state.nappingSpot}
                    rows={3}
                    onChange={this.handleChange}
                  />
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlFile1">
                  Upload a picture of your cat
                  <input
                    type="file"
                    className="form-control-file"
                    name="catPicture"
                    value={this.state.catPicture}
                    id="exampleFormControlFile1"
                    onChange={this.handleChange}
                  />
                </label>
              </div>
              <button type="submit" className="btn btn-primary mr-2" onClick={this.handleSubmit}>
                Submit
              </button>
              <button type="button" className="btn btn-link" onClick={this.handleCancel}>
                Cancel
              </button>
            </div>
          </form>
        </DocSection>
      </main>
    );
  }
}
