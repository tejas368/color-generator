function componentToHex(c) {
  var hex = c.toString(16);
  // console.log('the value of c is', c);
  // console.log(hex);
  return hex.length == 1 ? '0' + hex : hex;
}

function rgbToHex(r, g, b) {
  return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

export default rgbToHex;
