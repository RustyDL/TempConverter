function convertToFahrenheit(celsius) {
  // Convert C to F using the formula (C * 9/5) + 32
  const fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}

function createMessage(celsius, fahrenheit) {
  let message = `The temperature ${celsius}°C is equal to ${fahrenheit.toFixed(
    2
  )}°F. It feels `;

  if (celsius < 0) {
    message += "Colder than a snowman's handshake";
  } else if (celsius < 15) {
    message += "As cool as the other side of the pillow on a hot summer night";
  } else if (celsius < 25) {
    message += "Just right, like Goldilocks' porridge";
  } else if (celsius < 35) {
    message += "Toastier than a marshmallow in a campfire sing-along.";
  } else if (celsius < 50) {
    message += "Really, you really think its going to be that hot?";
  } else {
    message += "Hotter than a jalapeño in a salsa contest";
  }

  return message;
}

function rand(limit) {
  return Math.round(Math.random() * limit);
}

const userInput = prompt("Enter any number");

const fahrenheitTemperature = parseFloat(userInput);

if (!isNaN(fahrenheitTemperature)) {
  const celsiusTemperature = convertToCelsius(fahrenheitTemperature);
  const randomNum = rand(10);
  const message = createMessage(fahrenheitTemperature, celsiusTemperature);

  console.log(message);
  console.log(`Random Number: ${randomNum}`);
} else {
  console.log("Please enter a temperature in Fahrenheit.");
}
