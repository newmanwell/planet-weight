// Create a function to calculate weights on the other 8 planets (yes even pluto)
const weightConversion = () => {
// Get user weight from a prompt and convert to number and assign to a const
const earthWeight = Number(prompt(`Enter your Earthly weight below`));
  
// Create equations that takes in the user weight and converts to weight on other planets
const mercuryWeight = Math.floor(earthWeight * .38);
const venusWeight = Math.floor(earthWeight * .91);
const marsWeight = Math.floor(earthWeight * .38);
const jupiterWeight = Math.floor(earthWeight * 2.34);
const saturnWeight = Math.floor(earthWeight * .93);
const uranusWeight = Math.floor(earthWeight * .92);
const neptuneWeight = Math.floor(earthWeight * 1.12);
const plutoWeight = Math.floor(earthWeight * .063);
const moonWeight = Math.floor(earthWeight * .165);

// Send a single alert with the user weight on the other planets in a string
alert(`You weigh ${mercuryWeight} lbs on Mercury,
  ${venusWeight} lbs on Venus, ${marsWeight} lbs on Mars, ${jupiterWeight} lbs on Jupiter, 
  ${saturnWeight} lbs on Saturn, ${uranusWeight} lbs on Uranus, ${neptuneWeight} lbs on Neptune, 
  ${plutoWeight} lbs on Pluto and ${moonWeight} lbs on our Moon.`);
}

weightConversion();