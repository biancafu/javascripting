const whereCanIPark = function (spots, vehicle) {
  for(let i = 0; i < spots.length; i++){
    for(let j = 0; j < spots[0].length; j++){
      if(spots[i][j].toUpperCase() === spots[i][j]){ //true if spot available
        if (spots[i][j] === "R"){ //good for all types
          return [j,i];
        }
        else if(spots[i][j] === "S"){ // good for small and motorcycle
          if(vehicle === "small" || vehicle === "motorcycle"){
            return [j,i];
          }
        }
        else if(spots[i][j] === "M"){// good for motorcycle
          if(vehicle === "motorcycle"){
            return [j,i];
          }
        }
      }
    }
  }
  return false; 
};

console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
))