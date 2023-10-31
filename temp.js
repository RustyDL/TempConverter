// Convert F to C using the formula (F - 32) * 5/9
function convertToCelsius(fahrenheit) {
  const celsius = ((fahrenheit - 32) * 5) / 9;
  return celsius;
}
function createMessage(fahrenheit, celsius) {
  let message = `The temperature ${fahrenheit}°F is equal to ${celsius.toFixed(
    2
  )}°C. It feels `;

  if (fahrenheit < 32) {
    message += "Colder than a polar bear's toenails.";
  } else if (fahrenheit < 50) {
    message += "cool. Thats it, just cool";
  } else if (fahrenheit < 70) {
    message += "As comfy as your grandma's favorite armchair";
  } else if (fahrenheit < 90) {
    message += "Warmer than a hug from a mug of hot cocoa.";
  } else {
    message +=
      "Hotter than a freshly baked dad joke - sizzle and laughter guaranteed!";
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
  console.log("Please enter a valid temperature in Fahrenheit.");
}
