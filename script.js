const makeChange = (c) => {
  c = parseInt(c); // ensure input is treated as a number
  const change = {
    q: Math.floor(c / 25),
    d: Math.floor((c % 25) / 10),
    n: Math.floor((c % 25 % 10) / 5),
    p: c % 5
  };
  return change;
};

// Do not change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
