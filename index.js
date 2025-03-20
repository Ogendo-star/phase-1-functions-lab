// Function to calculate distance in blocks from Scuber HQ (42nd Street)
const HQ_BLOCK = 42;

function distanceFromHqInBlocks(someValue) {
  return Math.abs(someValue - HQ_BLOCK);
}

// Function to calculate distance in feet from Scuber HQ
function distanceFromHqInFeet(someValue) {
  return distanceFromHqInBlocks(someValue) * 264;
}

// Function to calculate distance traveled in feet
function distanceTravelledInFeet(start, destination) {
  return Math.abs(destination - start) * 264;
}

// Function to calculate fare price based on distance traveled
function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  
  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}

