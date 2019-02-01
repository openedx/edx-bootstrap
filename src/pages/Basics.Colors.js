import React from 'react';
import chroma from 'chroma-js';
import MeasuredItem from '../common/MeasuredItem';
import DocSection from '../DocSection';

const colors = {
  'gray-900': {
    value: '#111',
    name: 'Gray 900',
    utilityClassName: 'gray-900',
    forBG: false,
    forText: true,
  },
  'gray-700': {
    value: '#414141',
    name: 'Gray 700',
    utilityClassName: 'gray-700',
    forBG: false,
    forText: true,
  },
  'gray-600': {
    value: 'rgba(65,65,65,.7)',
    name: 'Gray 600',
    utilityClassName: 'gray-600',
    forBG: false,
    forText: true,
  },
  'primary': {
    value: '#23419F',
    name: 'UI Blue (Primary)',
    utilityClassName: 'primary',
    forBG: true,
    forText: true,
  },
  'secondary': {
    value: '#45096B',
    name: 'UI Indigo (Secondary)',
    utilityClassName: 'secondary',
    forBG: true,
    forText: true,
  },
  'success': {
    value: '#008100',
    name: 'UI Success',
    utilityClassName: 'success',
    forBG: true,
    forText: true,
  },
  'info': {
    value: '#065784',
    name: 'Text Info',
    utilityClassName: 'info',
    forBG: false,
    forText: true,
  },
  'danger': {
    value: '#A2221D',
    name: 'UI Danger',
    utilityClassName: 'danger',
    forBG: true,
    forText: true,
  },
  'fill-success': {
    value: '#DFF0D8',
    name: 'Success Fill',
    utilityClassName: 'fill-success',
    forBG: true,
    forText: false,
  },
  'fill-info': {
    value: '#D8EDF8',
    name: 'Info Fill',
    utilityClassName: 'fill-info',
    forBG: true,
    forText: false,
  },
  'fill-danger': {
    value: '#F2DEDE',
    name: 'Danger Fill',
    utilityClassName: 'fill-danger',
    forBG: true,
    forText: false,
  },
  'fill-warning': {
    value: '#FCF8E2',
    name: 'Warning Fill',
    utilityClassName: 'fill-warning',
    forBG: true,
    forText: false,
  },
  'program-masters': {
    value: '#414141',
    name: 'Masters',
    utilityClassName: 'program-masters',
    forBG: true,
    forText: false,
  },
  'program-micro-masters': {
    value: '#065784',
    name: 'MicroMasters',
    utilityClassName: 'program-micro-masters',
    forBG: true,
    forText: false,
  },
  'program-prof-cert': {
    value: '#9A1F60',
    name: 'Professional Certificate',
    utilityClassName: 'program-prof-cert',
    forBG: true,
    forText: false,
  },
  'white': {
    value: '#fff',
    name: 'White',
    utilityClassName: 'white',
    forBG: true,
    forText: true,
  },
  'pale-gray': {
    value: '#FCFCFC',
    name: 'Pale Gray',
    utilityClassName: 'pale-gray',
    forBG: true,
    forText: false,
  },
  'pale-blue': {
    value: '#F5F8FF',
    name: 'Pale. Blue',
    utilityClassName: 'pale-blue',
    forBG: true,
    forText: false,
  },
  'pale-yellow': {
    value: '#FFFDF3',
    name: 'Pale Yellow',
    utilityClassName: 'pale-yellow',
    forBG: true,
    forText: false,
  },
  'yellow': {
    value: '#FFBF18',
    name: 'Accent Yellow',
    utilityClassName: 'yellow',
    forBG: true,
    forText: false,
  },
};

const textAndInteractiveColors = [
  'gray-900',
  'gray-700',
  'gray-600',
  'primary',
  'secondary',
];

const programColors = [
  'program-masters',
  'program-micro-masters',
  'program-prof-cert',
];

const accentColors = [
  'yellow',
];

const systemColorsBG = [
  'fill-success',
  'fill-info',
  'fill-danger',
  'fill-warning',
];

const systemColorsUI = [
  'success',
  'info',
  'danger',
];

const bgColors = [
  'white',
  'pale-gray',
  'pale-blue',
  'pale-yellow',
];


function Tile({children}) {
  return (
    <div className="d-flex flex-column color-card" style={{height:'6rem'}}>
      {children}
    </div>
  );
}

function Swatch({color, textColor, className, children, style}) {
  return <div 
    className={`color-card flex-grow-1 d-flex align-items-end ${className}`}
    style={{
      backgroundColor: color,
      flexBasis: '50%',
      padding: '.25rem .5rem',
      color: textColor || '#fff',
      ...style
    }}
  >{children || color}</div>
}

function TextSwatch({color, bgColor, className, children, style}) {
  return <div 
    className={`flex-grow-1 d-flex align-items-end justify-content-between ${className}`}
    style={{
      backgroundColor: bgColor || '#fff',
      border: `solid 2px ${color}`,
      flexBasis: '50%',
      padding: '.25rem .5rem',
      color: color,
      ...style
    }}
  >{children || color}</div>
}

export default function Colors() {
  const renderColor = (colorKey) => {
    const {name, value, forBG, forText } = colors[colorKey];
    const contrastColor = chroma(value).luminance() > .5 ? '#111' : '#fff';
    return (
      <div className="col-md-6 col-lg-5 col-xl-4 mb-3">
        <label className="color-label">{name}</label>
        <Tile>
          {forBG  ? <Swatch color={value} textColor={contrastColor} /> : null}
          {forText ? <TextSwatch color={value} style={{backgroundColor: contrastColor}}>{value} <span className="text-swatch-sample">Aa</span></TextSwatch> : null}
        </Tile>
      </div>
    );
  }

  return (
    <div>
      <h5 className="section">Text & Interactive</h5>
      <div className="row mb-3">{textAndInteractiveColors.map(renderColor)}</div>
      
      <h5 className="section">Program Specific</h5>
      <div className="row mb-3">{programColors.map(renderColor)}</div>
      
      <h5 className="section">Accent</h5>
      <div className="row mb-3">{accentColors.map(renderColor)}</div>

      <h5 className="section">System Colors</h5>
      <div className="row mb-0">{systemColorsBG.map(renderColor)}</div>
      <div className="row mb-3">{systemColorsUI.map(renderColor)}</div>
      
      <h5 className="section">Backgrounds</h5>
      <div className="row mb-3">{bgColors.map(renderColor)}</div>


      <table className="table">
        <thead>
          <tr>
            <th>Name/Value</th>
            <th colSpan={3}>Utility Classes</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(colors).map(colorKey => {
            const {
              name,
              value,
              utilityClassName,
              backgroundUtilityClass,
              forText,
              forBG,
            } = colors[colorKey];

            const contrastColor = chroma(value).luminance() > .5 ? '#000' : '#fff';

            return (
              <tr>
                <td>
                  {name}<br />
                  {value}
                </td>
                <td className={utilityClassName}>
                  {forText ? (
                    <code 
                      className={`text-${utilityClassName}`}
                      style={{backgroundColor: contrastColor}}
                    >
                      .text-{utilityClassName}
                    </code>
                  ) : null}
                </td>
                <td>
                  {forBG ? (
                    <code
                      className={`d-block bg-${utilityClassName} p-1`}
                      style={{color: contrastColor}}
                    >
                      .bg-{utilityClassName}
                    </code>
                  ) : null}
                </td>
                <td>
                  <code className={`border border-${utilityClassName} p-1`}>
                    .border-{utilityClassName}
                  </code>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

class Measure extends React.Component {
  constructor(props) {
    super(props);
    this.nodeToMeasure = React.createRef();

    this.state = {
      styles: null
    };
  }

  componentDidMount() {
    this.setState({
      styles: getComputedStyle(this.nodeToMeasure.current)
    })
  }

  render() {
    return this.props.render(this.nodeToMeasure, this.state.styles);
  }
}