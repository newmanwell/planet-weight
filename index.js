// Get user weight from a prompt and convert to number and assign to a const
// Create a function to calculate weights on the other 8 planets (yes even pluto)
// Create a equation that takes in the user weight const and converts to weight on other planets
// Send a single alert with the user weight on the other planets in a string

const weightConversion = () => {
  const earthWeight = Number(prompt(`Enter your Earthly weight below`));
  console.log(earthWeight);
}

weightConversion();