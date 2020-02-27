//
// This is only a SKELETON file for the 'Resistor Color' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
var resistorColor = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];

export const colorCode = (color) => {
  for (var i = 0; i < resistorColor.length; i++) {
    if (color === resistorColor[i])
      return i;
  }
};



export const COLORS = resistorColor;
