function convertTemp() {
  const temp = parseFloat(document.getElementById('inputTemp').value);
  const unit = document.getElementById('inputUnit').value;
  let result = '';

  if (isNaN(temp)) {
    result = 'Please enter a valid number';
  } else {
    if (unit === 'C') {
      result = `${(temp * 9/5 + 32).toFixed(2)} °F`;
    } else {
      result = `${((temp - 32) * 5/9).toFixed(2)} °C`;
    }
  }

  document.getElementById('result').textContent = result;
}
