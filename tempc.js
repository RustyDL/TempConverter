function convertToFahrenheit(celsius) {
  // Convert Celsius to Fahrenheit using the formula (C * 9/5) + 32
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
  return Math.random() * limit;
}
