function calculateBMI() {
  const weight = parseFloat(document.getElementById('weight').value);
  const heightCm = parseFloat(document.getElementById('height').value);
  const resultDiv = document.getElementById('result');

  if (isNaN(weight) || isNaN(heightCm) || weight <= 0 || heightCm <= 0) {
    resultDiv.textContent = "Please enter valid weight and height.";
    resultDiv.style.color = 'crimson';
    return;
  }

  const heightM = heightCm / 100;
  const bmi = weight / (heightM * heightM);
  let status;

  if (bmi < 18.5) {
    status = "Underweight";
  } else if (bmi < 24.9) {
    status = "Normal weight";
  } else if (bmi < 29.9) {
    status = "Overweight";
  } else {
    status = "Obesity";
  }

  resultDiv.textContent = `Your BMI is ${bmi.toFixed(2)} (${status})`;
  resultDiv.style.color = '#fff';
}
