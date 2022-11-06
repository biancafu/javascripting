const instructorWithLongestName = function(instructors) {
  let maxname="";
  let maxindex;
  instructors.forEach((element,index) => {
    if(element.name.length>maxname.length){
      maxname=element.name;
      maxindex=index;
    }
  });
  return instructors[maxindex];
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));