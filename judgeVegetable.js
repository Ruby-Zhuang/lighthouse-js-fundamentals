const judgeVegetable = function (vegetables, metric) {
  let ranking = 0;
  let winner = "";

  for (let i = 0; i < vegetables.length; i++) {
    if (vegetables[i][metric] > ranking) { // Must use square brackets instead of dot notation here
      ranking = vegetables[i][metric];
      winner = vegetables[i].submitter; // Can use dot notation here
    }
  }
  return winner;
}

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

console.log(judgeVegetable(vegetables, metric));