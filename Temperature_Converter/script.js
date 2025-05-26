function convertTemp() {
  const inputTemp = parseFloat(document.getElementById('inputTemp').value);
  const fromUnit = document.getElementById('fromUnit').value;
  const toUnit = document.getElementById('toUnit').value;
  const resultDiv = document.getElementById('result');

  if (isNaN(inputTemp)) {
    resultDiv.textContent = "Please enter a valid temperature.";
    resultDiv.style.color = 'crimson';
    return;
  }

  let result;


  if (fromUnit === "C") {
    if (toUnit === "F") {
      result = (inputTemp * 9/5) + 32;
    } else if (toUnit === "K") {
      result = inputTemp + 273.15;
    } else {
      result = inputTemp;
    }
  }


  else if (fromUnit === "F") {
    if (toUnit === "C") {
      result = (inputTemp - 32) * 5/9;
    } else if (toUnit === "K") {
      result = ((inputTemp - 32) * 5/9) + 273.15;
    } else {
      result = inputTemp;
    }
  }


  else if (fromUnit === "K") {
    if (toUnit === "C") {
      result = inputTemp - 273.15;
    } else if (toUnit === "F") {
      result = (inputTemp - 273.15) * 9/5 + 32;
    } else {
      result = inputTemp;
    }
  }

  resultDiv.textContent = `${inputTemp}°${fromUnit} = ${result.toFixed(2)}°${toUnit}`;
  resultDiv.style.color = '#fff';
}
