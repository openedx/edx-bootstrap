import React from 'react';
import MeasuredItem from '../common/MeasuredItem';



export default function Typography() {
  const typeMeasurements = {
    'font-family': null,
    'font-weight': null,
    'font-size': null,
    'line-height': null,
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
    <div>

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
    

    </div>
  );
}