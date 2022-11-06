const conditionalSum = function(values, condition) {
  const evenflag = (condition === "even") ? true : false;
  let sum=0;
  for (let num of values){
    if (evenflag && num % 2 === 0){
      sum+=num;
    }
    else if (!evenflag && num % 2 !== 0){
      sum+=num;c
    }
  }
  return sum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));