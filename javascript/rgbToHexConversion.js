// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned.
// Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.
// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.
// The following are examples of expected output values:
// rgb(255, 255, 255) // returns FFFFFF
// rgb(255, 255, 300) // returns FFFFFF
// rgb(0,0,0) // returns 000000
// rgb(148, 0, 211) // returns 9400D3

const rgb = (r, g, b) => {
  const check = (x) => {
    x < 0 ? (x = 0) : null;
    x > 255 ? (x = 255) : null;
    return x;
  };
  const hex = (x) => {
    x = x.toString(16);
    x.length < 2 ? (x = "0" + x) : null;
    return x;
  };
  return (hex(check(r)) + hex(check(g)) + hex(check(b))).toUpperCase();
};
