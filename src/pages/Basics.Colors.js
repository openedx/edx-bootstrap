import React from 'react';
import ColorContrastChecker from 'color-contrast-checker';

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

var ccc = new ColorContrastChecker();

var color1 = "#FFFFFF";
var color2 = "#000000";

if (ccc.isLevelAA(color1, color2, 14)) {
    alert("Valid Level AA");
} else {
    alert("Invalid Contrast");
}



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