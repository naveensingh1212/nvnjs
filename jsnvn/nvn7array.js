const marvel_heores=["ironman","spiderman","blackwidow"]
const dc = ["superman","flash","batamn"]
marvel_heores.push(dc)
//console.log(marvel_heores);
//array in js can take array as element

//console.log(marvel_heores[3][2]);
const avengers=marvel_heores.concat(dc)
//console.log(avengers);

const phase_4 = [...marvel_heores,...dc] //spread operator
console.log(phase_4);

// const another_array = [1,3,4,[3,5,6],5]
// const real_array = another_array.flat(Infinity)
// //console.log(real_array);

// console.log(Array.isArray("nvn"))
// console.log(Array.from("nvnsher"));
// console.log(Array.from({name:"nvn"}));//interesting

// let score1=100
// let score2= 200
// let score3=300

// console.log(Array.of(score1,score2));

