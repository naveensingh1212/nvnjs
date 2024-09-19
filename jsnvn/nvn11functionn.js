function calculateCartPrice(val1,val2,...num1){
   return num1
}
//console.log(calculateCartPrice(2000,2333,333));//---->spread operator or rest operator

//how object is used in function

const user={
    username : "naveeen sher",
    price : 1898
}
function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}
//handleObject(user)
handleObject({
    username:"nvn",
    price:34444
})

const myArray =[200,400,100,600]

function returnSecondValue(getArray){
    return getArray[2]
}
console.log(returnSecondValue(myArray));
 