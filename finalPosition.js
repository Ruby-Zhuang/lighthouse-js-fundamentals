const finalPosition = function (moves) {
  let position = [0,0];

  // Loops through each direction in the moves array
  for (const direction of moves) {
    if (direction === "north") {
      position[1] += 1; // Increase Y by 1
    } else if (direction === "south") {
      position[1] -= 1; // Decrease Y by 1
    } else if (direction === "east") {
      position[0] += 1; // Increase X by 1
    } else if (direction === "west") {
      position[0] -= 1; // Decrease X by 1
    }
  } 
  return position;
}

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

console.log(finalPosition(moves));