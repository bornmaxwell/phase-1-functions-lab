function distanceFromHqInBlocks(street) {
    const hqStreet = 42;
    return Math.abs(street - hqStreet);
  }
  
  function distanceFromHqInFeet(street) {
    return distanceFromHqInBlocks(street) * 264;
  }
  
  function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264;
  }
  
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    
    if (distance <= 400) {
      return 0; // Free for the first 400 feet
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02; // Charge 2 cents per foot for distances over 400 feet
    } else if (distance > 2000 && distance <= 2500) {
      return 25; // Flat rate for distances between 2000 and 2500 feet
    } else {
      return 'cannot travel that far'; // No rides over 2500 feet
    }
  }
