function convert() {
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;
  const temp = parseFloat(document.getElementById("temp").value);

  let result;
  let symbol;
  switch (from) {
    case "c":
      if (to === "k") {
        result = temp + 273.15;
        symbol='K';
      } else if (to === "f") {
        result = temp * (9 / 5) + 32;
        symbol='F';
      } else if (to === "r") {
        result = temp * (9 / 5) + 491.67;
        symbol='R';
      }
      break;
    case "f":
      if (to === "k") {
        result = (temp - 32) * (5 / 9) + 273.15;
        symbol='K';
      } else if (to === "c") {
        result = (temp - 32) * (5 / 9);
        symbol='C';
      } else if (to === "r") {
        result = temp + 459.67;
        symbol='R';
      }
      break;
    case "k":
      if (to === "c") {
        result = temp - 273.15;
        symbol='C';
      } else if (to === "f") {
        result = (temp - 273.15) * (9 / 5) + 32;
        symbol='F';
      } else if (to === "r") {
        result = temp * 1.8;
        symbol='R';
      }
      break;
    case "r":
      if (to === "k") {
        result = temp * (5 / 9);
        symbol='K';
      } else if (to === "f") {
        result = temp - 459.67;
        symbol='F';
      } else if (to === "c") {
        result = (temp - 491.67) * (5 / 9);
        symbol='C';
      }
      break;
  }

  document.getElementById("output").value = result+""+symbol;
}
