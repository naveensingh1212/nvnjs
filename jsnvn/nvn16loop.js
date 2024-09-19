// // for of loop

// const arr=[12,3,4,5,5]
// for (const i of arr) {
//     console.log(i);
// }

// const sher  = ' bBBbr sher'
// for (const i of sher) {
//     console.log(i);
// }

//maps
const map = new Map()
map.set('in','1')
map.set('jk','2')
map.set('us','3')
map.set('ks','4')
console.log(map);

for (const [key,value] of map) {
    console.log(key, ':-',value);
}

// const myobject{
//     'name':'nfs',
// 'same': 'sher'
// }

// for (const key of myobject) {
//     console.log(key);
// }   will not  work

const myObject ={
    js : 'javascript',
    ks : 'kolin',
    cpp : 'c++',
    

}
for (const key in myObject) {
    console.log(myObject[key]);
}

const hoes = ["pra" ,"ami","arch","gri"]
for (const key in hoes) {
   console.log(key);
}

/// got only keys for in loop

const heores = ["pra" ,"ami","arch","gri"]
for (const key of heores) {
    console.log(key);
}

///got values in for of loop

