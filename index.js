/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

const distance_CONVERSION_RATE = 1000;


// Given Parameters
const vel = 10000; // velocity (km/h)
const acc = 3; // acceleration (m/s^2)
const time = 3600; // seconds (1 hour)
const d = 0; // distance (km)
const fuel = 5000; // remaining fuel (kg)
const fbr = 0.5; // fuel burn rate (kg/s)

const velocityInMeterSec = (vel* 1000) / 3600;

const calcNewVel = ({vel, acc, time}) => {

  if (vel < 0) {
    throw Error ('velocity cannot be negative') ;
  }
  if (time < 0) {
    throw Error ('Time cannot be negative');
  }

  if (acc < 0) {
    throw Error ('Accelaration cannot be negative');
  }

  const newVelocityInMeterSec = vel + (acc * time);
  return (newVelocityInMeterSec * 3600) / 1000;
}




const d2 = d + (velocityInMeterSec*time)/1000; //calcultes new distance
const rf = fuel - fbr*time; //calculates remaining fuel
const vel2 = calcNewVel({vel: velocityInMeterSec, acc, time}); //calculates new velocity based on acceleration

if (rf < 0) {
  throw Error ('You have insufficient fuel');
}

console.log(`Corrected New Velocity: ${vel2} km/h`);
console.log(`Corrected New Distance: ${d2} km`);
console.log(`Corrected Remaining Fuel: ${rf} kg`);






