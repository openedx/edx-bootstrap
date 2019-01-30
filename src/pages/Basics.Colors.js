import React from 'react';
import chroma from 'chroma-js';
import MeasuredItem from '../common/MeasuredItem';

const bgColors = [
  { name: 'White', value: '#fff' },
  { name: 'BG Light Gray', value: '#fcfcfc' },
  { name: 'BG Light Blue', value: '#f5f8ff' },
  { name: 'BG Yellow', value: '#Fffdf3' },
];

const textColors = [
  { name: 'Black 100', value: '#111' },
  { name: 'Black 200', value: 'rgba(0,0,0,.75)' },
  { name: 'Black 400', value: 'rgba(0,0,0,.55)' },
  { name: 'Purple', value: '#45096b' },
];
const inverseTextColors = [
  { name: 'White 100', value: '#fff' },
  { name: 'White 200', value: 'rgba(255,255,255,.75)' },
  { name: 'White 400', value: 'rgba(255,255,255,.55)' },
  { name: 'Yellow', value: '#ffbf18' },
];

const semanticColors = [
  { name: 'Interactive Blue', value: '#23419f' },
  { name: 'Success', value: '#008100' },
  { name: 'Danger', value: '#A2221D' },
  { name: 'Warning', value: '#DDC047' },
  { name: 'Info', value: '#4AA0B5' },
]
const brandColors = [
  { name: 'Magenta', value: '#b72667' },
  { name: 'Grey', value: '#8a8c8f' },
  { name: 'Blue', value: '#00a0e3' },
  { name: 'Yellow', value: '#ffbf18' },
];

const programColors = [
  { name: 'Masters Charcoal', value: '#414141' },
  { name: 'Professional Certificate', value: '#9a1f60' },
  { name: 'MicroMasters', value: '#065784' },
];


function Swatch({color, className, children, style}) {
  return <div 
    className={`${className}`}
    style={{
      backgroundColor: color,
      ...style
    }}
  >{children}</div>
}
function TextSwatch({color, className, children, style}) {
  return <span 
    className={`${className}`}
    style={{
      color: color,
      ...style
    }}
  >{children}</span>
}

function SwatchLabel({color, name, className, children, style}) {
  return <label 
    className={`${className}`}
    style={{
      ...style
    }}
  >{name} • {color}</label>
}

export default function Colors() {
  return (
    <div className="pt-5">

      <h5>Brand & Accents</h5>
      <p>Use for accents only. These colors are not accessible as text or fill colors.</p>
      <div className="row mb-5">{brandColors.map(({name, value}) => (
        <div className="col">
          <Swatch color={value} className="p-5 color-card" />
          <SwatchLabel color={value} name={name} />
        </div>
      ))}</div>

      <div className="row mb-5">
        <div className="col">
          <h5>Text Colors (Primary)</h5>
          <Swatch color={bgColors[0].value} className="p-5 color-card">
            {textColors.map(({name, value}) => <TextSwatch color={value} className="d-block">{name} • {value}</TextSwatch> )}
          </Swatch>
        </div>
        <div className="col">
          <h5>Text Colors (Inverse)</h5>
          <Swatch color={programColors[0].value} className="p-5 color-card">
            {inverseTextColors.map(({name, value}) => <TextSwatch color={value} className="d-block">{name} • {value}</TextSwatch> )}
          </Swatch>
        </div>
      </div>

      <h5>Semantic Colors</h5>
      <p>Used both as text on light backgrounds and fill colors for white text (eg. buttons).</p>
      <div className="row mb-5">
      {semanticColors.map(({name, value}) => (
        <div className="col-3">
          <div className="color-card">
            <Swatch color={value} className="p-3"><TextSwatch color={'#fff'}>{name}</TextSwatch></Swatch>
            <Swatch color={'#fff'} className="pt-1 pb-3"><TextSwatch color={value}>{name} • {value}</TextSwatch></Swatch>
          </div>
        </div>
      ))}
      </div>

      <h5>Backgrounds</h5>
      <p>Primary background colors.</p>
      <div className="row mb-5">
      {bgColors.map(({name, value}) => (
        <div className="col-3 mb-3">
          <Swatch color={value} className="p-5 color-card" />
          <SwatchLabel color={value} name={name} />
        </div>
      ))}
      </div>
      <h5>Program Backgrounds</h5>
      <p>Used as backgrounds or accents for program related content.</p>
      <div className="row mb-5">
      {programColors.map(({name, value}) => (
        <div className="col-3 mb-3">
          <Swatch color={value} className="p-5 color-card" />
          <SwatchLabel color={value} name={name} />
        </div>
      ))}
      </div>
      
      {/*textColors.map(({name, value}) => <TextSwatch color={value} className="p-3">{name}</TextSwatch> )*/}

      <h5>WIP Table view</h5>

      
      <table className="table">
        <thead>
          <tr>
            <th>Color</th>
            <th>Text Black</th>
            <th>Text Dark</th>
            <th>Text Gray</th>
            <th>Text White</th>
            <th>Interactive Blue</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <h6>White</h6>
              <p>#fff</p>
            </td>
          </tr>
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