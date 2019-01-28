import React from 'react';

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


export default function Colors() {
  return (
    <div className="row">
      {Object.keys(colors).map(color => (
        <div className="col-2">
          <div className={`p-4 bg-${color}`} />
          <p>${color}</p>
        </div>
      ))}
    </div>
  );
}