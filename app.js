/*
Temperature Convertion
______________________________________________
| From | To | Formula                        |
| ---- | -- | ------------------------------ |
| °F   | °C | ((°F - 32) \times 5/9)         |
| °C   | °F | ((°C \times 9/5) + 32)         |
| K    | °C | (K - 273.15)                   |
| K    | °F | ((K - 273.15) \times 9/5 + 32) |
| °C   | K  | (°C + 273.15)                  |
---------------------------------------------|
*/

let input = document.getElementById("input");

const f2c = document.getElementById("F2C");
const c2f = document.getElementById("C2F");
const k2c = document.getElementById("K2C");
const k2f = document.getElementById("K2F");
const c2k = document.getElementById("C2K");

let result = document.getElementById("result");
let temp;

function convert() {
  if (f2c.checked) {
    temp = Number(input.value);
    temp = (((temp - 32) * 5) / 9).toFixed(2) + "°C";
    result.textContent = temp;
  } else if (c2f.checked) {
    temp = Number(input.value);
    temp = (temp * (9 / 5) + 32).toFixed(2) + "F";
    result.textContent = temp;
  } else if (k2c.checked) {
    temp = Number(input.value);
    if (temp < 0) {
      result.textContent = "Temperature below absolute zero is not possible.";
    } else {
      temp = temp - (273.15).toFixed(2) + "°C";
      result.textContent = temp;
    }
  } else if (k2f.checked) {
    temp = Number(input.value);
    if (temp < 0) {
      result.textContent = "Temperature below absolute zero is not possible.";
    } else {
      temp = ((temp - 273.15) * (9 / 5) + 32).toFixed(2) + "F";
      result.textContent = temp;
    }
  } else if (c2k.checked) {
    temp = Number(input.value);
    if (temp < -273.15) {
      result.textContent = "Temperature below absolute zero is not possible.";
    } else {
      temp = (temp + 273.15).toFixed(2) + "K";
      result.textContent = temp;
    }
  } else {
    result.textContent = "Please select a convertion method.";
  }
}
