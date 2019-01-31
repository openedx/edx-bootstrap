import React from 'react';
import chroma from 'chroma-js';
import MeasuredItem from '../common/MeasuredItem';
import DocSection from '../DocSection';


const textAndInteractiveColors = [
  { name: 'Black 100', value: '#111', forText: true, forFill: false, labelColor: '#fff' },
  { name: 'Black 200', value: '#414141', forText: true, forFill: false, labelColor: '#fff' },
  { name: 'Black 400', value: 'rgba(65,65,65,0.70)', forText: true, forFill: false, labelColor: '#fff' },
  { name: 'Interactive UI', value: '#23419F', forText: true, forFill: true, labelColor: '#fff' },
  { name: 'Purple UI', value: '#45096B', forText: true, forFill: true, labelColor: '#fff' },
];

const programColors = [
  { name: 'Masters', value: '#414141', forText: false, forFill: true, labelColor: '#fff' },
  { name: 'MicroMasters', value: '#065784', forText: false, forFill: true, labelColor: '#fff' },
  { name: 'Prof Cert', value: '#9A1F60', forText: false, forFill: true, labelColor: '#fff' },
];

const accentColors = [
  { name: 'Yellow', value: '#FFBF18', forText: false, forFill:true, labelColor: '#000' },
];

const systemColorsBG = [
  { name: 'Success BG', value: '#DFF0D8', forText: false, forFill: true, labelColor: '#000' },
  { name: 'Info BG', value: '#D8EDF8', forText: false, forFill: true, labelColor: '#000' },
  { name: 'Danger BG', value: '#F2DEDE', forText: false, forFill: true, labelColor: '#000' },
  { name: 'Warning BG', value: '#FCF8E2', forText: false, forFill: true, labelColor: '#000' },
];
const systemColorsUI = [
  { name: 'Success UI', value: '#008100', forText: true, forFill: true, labelColor: '#fff' },
  { name: 'Info Text', value: '#065784', forText: true, forFill: false, labelColor: '#fff' },
  { name: 'Danger UI', value: '#A2221D', forText: true, forFill: true, labelColor: '#fff' },
]

const bgColors = [
  { name: 'White', value: '#FFF', forText: false, forFill: true, labelColor: '#000' },
  { name: 'Light Gray BG', value: '#FCFCFC', forText: false, forFill: true, labelColor: '#000' },
  { name: 'Light Blue BG', value: '#F5F8FF', forText: false, forFill: true, labelColor: '#000' },
  { name: 'Yellow BG', value: '#FFFDF3', forText: false, forFill: true, labelColor: '#000' },
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
  const renderColor = ({name, value, forFill, forText, labelColor}) => {
    return (
      <div className="col-md-6 col-lg-5 col-xl-4 mb-3">
        <label className="color-label">{name}</label>
        <Tile>
          {forFill ? <Swatch color={value} textColor={labelColor} /> : null}
          {forText ? <TextSwatch color={value}>{value} <span className="text-swatch-sample">Aa</span></TextSwatch> : null}
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