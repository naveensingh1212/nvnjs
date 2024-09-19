//array

const myarr = ["nvn",1,2,56,6,7]
console.log(myarr[0]);
const myarr3 = new Array(1,2,3,4,5)
console.log(myarr3[3]);

// array methods

myarr.push(6)
myarr.pop()
//myarr.unshift(9)
/*myarr.shift()
console.log(myarr.indexOf(9));

const newArr=myarr.join()
console.log(myarr);
console.log(typeof(newArr));
*/

// slice and splice
console.log("A ",myarr);
const nvnarr = myarr.slice(1,3)

console.log("sher ki array:--->",nvnarr);


const nvnarra = myarr.splice(1,3)
console.log("sherni ki array:--->",nvnarra);

console.log("B ",myarr);

