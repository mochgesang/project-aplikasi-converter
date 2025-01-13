document.getElementById("convert-btn").addEventListener("click", function () {
    const value = parseFloat(document.getElementById("value").value);
    const conversionType = document.getElementById("conversion-type").value;
    const resultElement = document.getElementById("result");
  
    if (isNaN(value)) {
      resultElement.textContent = "Please enter a valid number.";
      return;
    }
  
    let result;
  
    switch (conversionType) {
      case "c-to-f":
        result = (value * 9/5) + 32;
        resultElement.textContent = `${value}°C = ${result.toFixed(2)}°F`;
        break;
      case "f-to-c":
        result = (value - 32) * 5/9;
        resultElement.textContent = `${value}°F = ${result.toFixed(2)}°C`;
        break;
      case "m-to-km":
        result = value / 1000;
        resultElement.textContent = `${value} meters = ${result.toFixed(2)} kilometers`;
        break;
      case "km-to-m":
        result = value * 1000;
        resultElement.textContent = `${value} kilometers = ${result.toFixed(2)} meters`;
        break;
      case "kg-to-lb":
        result = value * 2.20462;
        resultElement.textContent = `${value} kilograms = ${result.toFixed(2)} pounds`;
        break;
      case "lb-to-kg":
        result = value / 2.20462;
        resultElement.textContent = `${value} pounds = ${result.toFixed(2)} kilograms`;
        break;
      default:
        resultElement.textContent = "Unknown conversion type.";
    }
  });
  