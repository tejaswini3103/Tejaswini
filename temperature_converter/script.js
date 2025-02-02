// Conversion functions
const celsiusToFahrenheit = (celsius) => (celsius * 9/5) + 32;
const celsiusToKelvin = (celsius) => celsius + 273.15;
const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5/9;
const fahrenheitToKelvin = (fahrenheit) => (fahrenheit - 32) * 5/9 + 273.15;
const kelvinToCelsius = (kelvin) => kelvin - 273.15;
const kelvinToFahrenheit = (kelvin) => (kelvin - 273.15) * 9/5 + 32;

// Form handling
document.getElementById('converter-form').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission reload

    const temp = parseFloat(document.getElementById('temp').value);
    const conversionType = document.getElementById('conversion-type').value;
    const resultElement = document.getElementById('result');

    if (isNaN(temp)) {
        resultElement.textContent = "Please enter a valid temperature.";
        return;
    }

    let result;
    switch (conversionType) {
        case 'c-to-f':
            result = `${temp}°C = ${celsiusToFahrenheit(temp).toFixed(2)}°F`;
            break;
        case 'c-to-k':
            result = `${temp}°C = ${celsiusToKelvin(temp).toFixed(2)}K`;
            break;
        case 'f-to-c':
            result = `${temp}°F = ${fahrenheitToCelsius(temp).toFixed(2)}°C`;
            break;
        case 'f-to-k':
            result = `${temp}°F = ${fahrenheitToKelvin(temp).toFixed(2)}K`;
            break;
        case 'k-to-c':
            result = `${temp}K = ${kelvinToCelsius(temp).toFixed(2)}°C`;
            break;
        case 'k-to-f':
            result = `${temp}K = ${kelvinToFahrenheit(temp).toFixed(2)}°F`;
            break;
        default:
            result = "Invalid conversion type.";
            break;
    }

    resultElement.textContent = result;
});
