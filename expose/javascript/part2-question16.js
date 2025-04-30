let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
  };
  
  let keys = Object.keys(statistics);
  
  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    let value = statistics[key];
  
    if (key.startsWith('r') || value % 2 !== 0) {
      console.log(value);
    }
  }
  