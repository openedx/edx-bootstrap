import React from 'react';
import chroma from 'chroma-js';
import MeasuredItem from '../common/MeasuredItem';

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
const bgColors = [
  'white',
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'light',
  'dark',
];

const textColors = [
  'body',
  'muted',
  'white',
  'black-50',
  'white-50',
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'light',
  'dark',
]

export default function Colors() {
  return (
    <div>
      <div className="row mb-5">
        {bgColors.map(color => (
          <div className="col-2">
            <MeasuredItem 
              styles={{
                'background-color': null
              }} 
              className="mb-3"
              after
              renderItem={(props, state) => {
                return <div className={`p-4 bg-${color}`} />;
              }}
              renderValues={styleValues => {
                if (!styleValues['background-color']) return;

                const chromaColor = chroma(styleValues['background-color']);

                return (
                  <ul className="list-unstyled">
                    <li>{color}</li>
                    <li>{chromaColor.hex()}</li>
                    <li>On white: {Math.round(10*chroma.contrast(chromaColor, 'white'))/10}</li>
                  </ul>
                );
              }}
            />
          </div>
        ))}
      </div>


      <h4>Colors Contrasts</h4>
      <div className="row">
      {
        bgColors.map((color) => {
          return (
          <div className="col-4">
            <MeasuredItem 
              styles={{
                'background-color': null
              }} 
              className="mb-3"
              after
              renderItem={(props, state) => {

                return (
                  <div className={`p-0 bg-${color}`} />
                );
              }}
              renderValues={styleValues => {
                if (!styleValues['background-color']) return;

                const chromaColor = chroma(styleValues['background-color']);

                return (
                  <div className="mb-3">
                    <h5>{color} • {chromaColor.hex()}</h5>

                    <ul className={`bg-${color} p-4 list-unstyled m-0`}>
                      {textColors.map((textColor) => {
                        return (
                          <li className="">
                          <MeasuredItem 
                              styles={{'color': null}} 
                              after
                              renderItem={(props, state) => {
                                return <span className={`text-${textColor}`}></span>; 
                              }}
                              renderValues={styleValues => {
                                if (!styleValues['color']) return;

                                const chromaTextColor = chroma(styleValues['color']);
                                const contrastRatio = Math.round(10*chroma.contrast(chromaTextColor, chromaColor))/10;
                                if (contrastRatio < 3) return null;
                                if (contrastRatio < 4.5) {
                                  return <del className={`text-${textColor}`}>{textColor} - {contrastRatio}</del>;
                                }

                                return (
                                  <span className={`text-${textColor}`}>{textColor} - {contrastRatio}</span>
                                );
                              }}
                            />
                            </li>
                          );
                      })}
                    </ul>
                  </div>
                );
              }}
            />
            </div>
          );
        })
      }
      </div>
    </div>
  );
}