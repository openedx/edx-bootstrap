import React from 'react';
import _ from 'lodash';

const colors = {
  primary: {},
  secondary: {},
  success: {},
  info: {},
  warning: {},
  danger: {},
  light: {},
  dark: {},
  'text-muted': {}
};

export default class Typography extends React.Component {
  render() {
    const typeMeasurements = {
      'font-family': (v) => v.split(',')[0],
      'font-weight': null,
      'font-size': remsWithPixelValue,
      'line-height': lineHeightAsRatio,
      'letter-spacing': null,
    };

    const renderTypeItem = ({ name, tagClass, tag }) => {
      return (
        <MeasuredItem 
          styles={typeMeasurements} 
          className="mb-3"
          after
          renderItem={(props, state) => {
            return React.createElement(tag, { className: tagClass + ' mb-0 type-scale-item-example' }, (
              <span>{name}</span>
            ));
          }}
          renderValues={styleValues => {
            if (!styleValues['font-family']) return;

            const fontFamily = styleValues['font-family'].split(',')[0];
            const oneRem = parseInt(window.getComputedStyle(document.documentElement)['font-size']);
            const fontSize = Math.round(parseFloat(styleValues['font-size']));

            const fontSizeRem = fontSize/oneRem;
            const lineHeight = Math.round(parseFloat(styleValues['line-height']));
            const lineHeightRatio = Math.round(10*lineHeight/fontSize)/10;
            const letterSpacing = styleValues['letter-spacing'];
            const fontWeight = styleValues['font-weight'];
            const getWeightName = (weight) => {
              if (weight < 400) return 'Light';
              if (weight < 500) return 'Regular';
              if (weight < 600) return 'Semi-bold';
              return 'Bold';
            }

            return (
              <div className="d-flex text-muted">
                {fontFamily} {getWeightName(fontWeight)} • {fontSize}px / {lineHeight}px
              </div>
            );
          }}
        />
      );
    }

    return (
      <main className="col-12 col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content" role="main">
        <h1 className="bd-title">Color & Type</h1>
        <p className="bd-lead">Documentation and examples for Bootstrap typography, including global settings, headings, body text, lists, and more.</p>
        

        <DocSection title="Color">
          <div className="row">
            {Object.keys(colors).map(color => (
              <div className="col-2">
                <div className={`p-4 bg-${color}`} />
                <p>${color}</p>
              </div>
            ))}
          </div>
        </DocSection>



        <DocSection title="Type Scale">
        {
          [
            { name: 'Heading 1', tag: 'h1', tagClass: 'no-wrap', content: 'Heading 1' },
            { name: 'Heading 2', tag: 'h2', tagClass: 'no-wrap', },
            { name: 'Heading 3', tag: 'h3', tagClass: 'no-wrap', },
            { name: 'Heading 4', tag: 'h4', tagClass: 'no-wrap', },
            { name: 'Heading 5', tag: 'h5', tagClass: 'no-wrap', },
            { name: 'Heading 6', tag: 'h6', tagClass: 'no-wrap', },
            { name: 'Paragraph', tag: 'p', tagClass: '', content: 'p On glancing over my notes of the seventy odd cases in which I have during the last eight years studied the methods of my friend Sherlock Holmes, I find many tragic, some comic, a large number merely strange, but none commonplace; for, working as he did rather for the love of his art than for the acquirement of wealth, he refused to associate himself with any investigation which did not tend towards the unusual, and even the fantastic.' },
            { name: 'Small Paragraph', tag: 'p', tagClass: 'small', content: 'p On glancing over my notes of the seventy odd cases in which I have during the last eight years studied the methods of my friend Sherlock Holmes, I find many tragic, some comic, a large number merely strange, but none commonplace; for, working as he did rather for the love of his art than for the acquirement of wealth, he refused to associate himself with any investigation which did not tend towards the unusual, and even the fantastic.' },
          ].map(({name, tag, tagClass, content}) => (
            <div className="row type-scale-item">
              
              <div className="col">
                
              </div>
            </div>
          ))
        }

          <div className="row type-scale-row">
            <div className="col-6">{ renderTypeItem({name: 'Heading 1', tag: 'h1', tagClass: ''}) }</div>
            <div className="col-6 d-flex align-items-center"><div className="type-scale-cell-empty" /></div>
          </div>
          <div className="row type-scale-row">
            <div className="col-6">{ renderTypeItem({name: 'Heading 2', tag: 'h2', tagClass: ''}) }</div>
            <div className="col-6 d-flex align-items-center"><div className="type-scale-cell-empty " /></div>
          </div>
          <div className="row type-scale-row">
            <div className="col-6">{ renderTypeItem({name: 'Heading 3', tag: 'h3', tagClass: ''}) }</div>
            <div className="col-6 d-flex align-items-center"><div className="type-scale-cell-empty " /></div>
          </div>
          <div className="row type-scale-row">
            <div className="col-6">{ renderTypeItem({name: 'Heading 4', tag: 'h4', tagClass: ''}) }</div>
            <div className="col-6 d-flex align-items-center"><div className="type-scale-cell-empty " /></div>
          </div>
          <div className="row type-scale-row">
            <div className="col-6">{ renderTypeItem({name: 'Heading 5', tag: 'h5', tagClass: ''}) }</div>
            <div className="col-6">{ renderTypeItem({name: 'Large Paragraph', tag: 'p', tagClass: 'lead'}) }</div>
          </div>
          <div className="row type-scale-row">
            <div className="col-6">{ renderTypeItem({name: 'Heading 6', tag: 'h6', tagClass: ''}) }</div>
            <div className="col-6">{ renderTypeItem({name: 'Paragraph', tag: 'p', tagClass: ''}) }</div>
          </div>
          <div className="row type-scale-row">
            <div className="col-6 d-flex align-items-center"><div className="type-scale-cell-empty " /></div>
            <div className="col-6">{ renderTypeItem({name: 'Small ', tag: 'p', tagClass: 'small'}) }</div>
          </div>
        
        </DocSection>


        <DocSection title="Links">
          <p style={{maxWidth:'30rem'}}>By default all links are <a href="#">primary blue and have underlines</a>. Removing the underline is fine, but <a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-without-color.html">color must not be used as the only visual means of indicating interactivity</a>.</p>
        </DocSection>
        
        <DocSection title="Buttons">
          <div className="mb-3">
            <button type="button" className="mr-2 btn btn-primary">Primary</button>
            <button type="button" className="mr-2 btn btn-secondary">Secondary</button>
            <button type="button" className="mr-2 btn btn-success">Success</button>
            <button type="button" className="mr-2 btn btn-danger">Danger</button>
            <button type="button" className="mr-2 btn btn-warning">Warning</button>
            <button type="button" className="mr-2 btn btn-info">Info</button>
            <button type="button" className="mr-2 btn btn-light">Light</button>
            <button type="button" className="mr-2 btn btn-dark">Dark</button>
            <button type="button" className="btn btn-link">Link</button>
          </div>

          <div className="">
            <button type="button" className="mr-2 btn btn-outline-primary">Primary</button>
            <button type="button" className="mr-2 btn btn-outline-secondary">Secondary</button>
            <button type="button" className="mr-2 btn btn-outline-success">Success</button>
            <button type="button" className="mr-2 btn btn-outline-danger">Danger</button>
            <button type="button" className="mr-2 btn btn-outline-warning">Warning</button>
            <button type="button" className="mr-2 btn btn-outline-info">Info</button>
            <button type="button" className="mr-2 btn btn-outline-light">Light</button>
            <button type="button" className="mr-2 btn btn-outline-dark">Dark</button>
          </div>
        </DocSection>

        <DocSection title="Badges">
          <p>
            <span className="badge mr-1 badge-primary">Primary</span>
            <span className="badge mr-1 badge-secondary">Secondary</span>
            <span className="badge mr-1 badge-success">Success</span>
            <span className="badge mr-1 badge-danger">Danger</span>
            <span className="badge mr-1 badge-warning">Warning</span>
            <span className="badge mr-1 badge-info">Info</span>
            <span className="badge mr-1 badge-light">Light</span>
            <span className="badge mr-1 badge-dark">Dark</span>
          </p>
        </DocSection>


        <DocSection title="Inline Text Decorations">
          <p><span className="badge mr-1 badge-success">OK</span> Use the <span className="text-muted">text-muted class to mute text</span>.</p>
          <p><span className="badge mr-1 badge-success">OK</span> Use the mark tag to <mark>highlight</mark> text.</p>
          <p><span className="badge mr-1 badge-success">OK</span> Use strikethroughs for <s>content that is no longer accurate</s> or <del>has been deleted.</del></p>
          <p><span className="badge mr-1 badge-warning">Avoid</span> <u> Avoid using underlines for static elements</u></p>
          <p><span className="badge mr-1 badge-warning">Use Sparingly</span> <small>Fine print text that is 80% smaller than normal.</small></p>
          <p><span className="badge mr-1 badge-success">OK</span> <strong>This line rendered as bold text.</strong></p>
          <p><span className="badge mr-1 badge-warning">Avoid</span><em>Italicized text is difficult to read and hard to localize.</em></p>
        </DocSection>



        <DocSection title="Themes">

          <div className="border p-5 mb-5">
            <h1>Normal Theme</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="#">My Courses</a></li>
                <li className="breadcrumb-item"><a href="#">Introduction to Animal Behaviour</a></li>
                <li className="breadcrumb-item active" aria-current="page">Unit 1</li>
              </ol>
            </nav>
            <p>On glancing over my notes of the <strong>seventy odd cases</strong> in which I have during the last eight years studied the methods of my friend Sherlock Holmes, I find many tragic, some comic, a large number merely strange, but none commonplace; for, working as he did rather for the love of his art than for the acquirement of wealth, he refused to associate himself with any investigation which did not tend towards the unusual, and even the fantastic.</p>
            <h4>The Events in Question</h4>
            <p>The events in question occurred in the early days of my association with Holmes:</p> 
            <ul>
              <li>We were sharing rooms as bachelors in Baker Street.</li> 
              <li>It is possible that I might have placed them upon record before.</li>
              <li>A promise of secrecy was made at the time.</li>
              <li>It was early in April in the year '83.</li>
            </ul>
          </div>
          <div className="bg-dark p-5 mb-5 text-white">
            <h1>Dark Theme</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a className="text-info" href="#">My Courses</a></li>
                <li className="breadcrumb-item"><a className="text-info" href="#">Introduction to Animal Behaviour</a></li>
                <li className="breadcrumb-item active" aria-current="page">Unit 1</li>
              </ol>
            </nav>
            <p>On glancing over my notes of the <strong>seventy odd cases</strong> in which I have during the last eight years studied the methods of my friend Sherlock Holmes, I find many tragic, some comic, a large number merely strange, but none commonplace; for, working as he did rather for the love of his art than for the acquirement of wealth, he refused to associate himself with any investigation which did not tend towards the unusual, and even the fantastic.</p>
            <h4>The Events in Question</h4>
            <p>The events in question occurred in the early days of my association with Holmes:</p> 
            <ul>
              <li>We were sharing rooms as bachelors in Baker Street.</li> 
              <li>It is possible that I might have placed them upon record before.</li>
              <li>A promise of secrecy was made at the time.</li>
              <li>It was early in April in the year '83.</li>
            </ul>
          </div>
          <div className="bg-primary p-5 mb-5 text-white">
            <h1>Blue Theme</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a className="text-info" href="#">My Courses</a></li>
                <li className="breadcrumb-item"><a className="text-info" href="#">Introduction to Animal Behaviour</a></li>
                <li className="breadcrumb-item active" aria-current="page">Unit 1</li>
              </ol>
            </nav>
            <p>On glancing over my notes of the <strong>seventy odd cases</strong> in which I have during the last eight years studied the methods of my friend Sherlock Holmes, I find many tragic, some comic, a large number merely strange, but none commonplace; for, working as he did rather for the love of his art than for the acquirement of wealth, he refused to associate himself with any investigation which did not tend towards the unusual, and even the fantastic.</p>
            <h4>The Events in Question</h4>
            <p>The events in question occurred in the early days of my association with Holmes:</p> 
            <ul>
              <li>We were sharing rooms as bachelors in Baker Street.</li> 
              <li>It is possible that I might have placed them upon record before.</li>
              <li>A promise of secrecy was made at the time.</li>
              <li>It was early in April in the year '83.</li>
            </ul>
          </div>
        </DocSection>

      </main>

    );
  }
}

function DocSection(props) {
  return (
    <section className="pt-5 pb-5">
      <h3 className="mb-5">{props.title}</h3>
      {props.children}
    </section>
  );
}
const pixelsToRems = (value) => {
  const base = window.getComputedStyle(document.documentElement)['font-size']
  const remValue = parseInt(value) / parseInt(base);

  return `${remValue}rem`;
}
const remsWithPixelValue = (value) => {
  const base = window.getComputedStyle(document.documentElement)['font-size']
  const remValue = parseInt(value) / parseInt(base);
  
  return `${remValue}rem | ${Math.round(parseInt(value))}px`;
}

const lineHeightAsRatio = (value, computedStyle) => {
  const lineHeightPixels = parseInt(value);
  const fontSizePixels = parseInt(computedStyle.getPropertyValue('font-size'));
  const ratio = Math.round(10*(lineHeightPixels/fontSizePixels))/10;

  return `${ratio} | ${Math.round(lineHeightPixels)}px`;
}

class MeasuredItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ..._.zipObject(Object.keys(this.props.styles))
    }
    this.item = React.createRef();
  }

  componentDidMount() {
    const computedStyle = getComputedStyle(this.item.current);
    const styleNames = Object.keys(this.props.styles);

    this.setState({
      ..._.zipObject(styleNames, _.map(styleNames, (styleName) => computedStyle.getPropertyValue(styleName) )),
    });
  }

  render() {
    const child = React.cloneElement(this.props.renderItem(this.props, this.state), { ref: this.item });
    return (
      <React.Fragment>
        {this.props.before ? this.props.renderValues(this.state) : null}
        {child}
        {this.props.after ? this.props.renderValues(this.state) : null}
      </React.Fragment>
    );
  }
}