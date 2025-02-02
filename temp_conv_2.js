function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }
  
  function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
  }
  
  function celsiusToKelvin(celsius) {
    return celsius + 273.15;
  }
  
  function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
  }
  
  function fahrenheitToKelvin(fahrenheit) {
    return (fahrenheit - 32) * 5/9 + 273.15;
  }
  
  function kelvinToFahrenheit(kelvin) {
    return (kelvin - 273.15) * 9/5 + 32;
  }
  
  while (true) {
    let choice = prompt("Choose conversion type:\n" +
                       "1. Celsius to Fahrenheit\n" +
                       "2. Fahrenheit to Celsius\n" +
                       "3. Celsius to Kelvin\n" +
                       "4. Kelvin to Celsius\n" +
                       "5. Fahrenheit to Kelvin\n" +
                       "6. Kelvin to Fahrenheit\n" +
                       "7. Exit");
  
    if (choice === "7") {
      break;
    }
  
    let temperature = parseFloat(prompt("Enter the temperature:"));
  
    if (isNaN(temperature)) {
      alert("Invalid temperature input.");
      continue;
    }
  
    switch (choice) {
      case "1":
        alert(temperature + "°C = " + celsiusToFahrenheit(temperature) + "°F");
        break;
      case "2":
        alert(temperature + "°F = " + fahrenheitToCelsius(temperature) + "°C");
        break;
      case "3":
        alert(temperature + "°C = " + celsiusToKelvin(temperature) + "K");
        break;
      case "4":
        alert(temperature + "K = " + kelvinToCelsius(temperature) + "°C");
        break;
      case "5":
        alert(temperature + "°F = " + fahrenheitToKelvin(temperature) + "K");
        break;
      case "6":
        alert(temperature + "K = " + kelvinToFahrenheit(temperature) + "°F");
        break;
      default:
        alert("Invalid choice.");
    }
  }