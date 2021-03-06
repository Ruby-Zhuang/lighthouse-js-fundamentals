const chooseStations = function (stations) {
  const goodStations = [];

  // Loop through all the stations to check for capacity and type
  for (const station of stations) {
    const capacity = station[1];
    const type = station[2];

    if ((capacity >= 20) && (type === "school" || type === "community centre")) {
      goodStations.push(station[0]);  
    }
  }
  return goodStations;
}

const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

console.log(chooseStations(stations));