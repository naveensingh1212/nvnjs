// const user = {
//     username :"nvn",
//     price : 8888,
    
//     nvnsin: function(){
//         // console.log(`${this.usename}, welcome nvn`)
//         // console.log(this);
//     }
 

// }
// // user.nvnsin()
// // user.username = "anch"
// // user.nvnsin()

// // console.log(this);
// // function chai(){
// //     let username = "nvn"
// //     console.log(this.username);
// // }
// // chai()     /// we will get undefined because only in object we can execute this function 

// // const sher = function(){
// //     let username = "nvn"
// //     console.log(this.username);
// // }
// // sher()                      ------>>>this will also not work

// const chai = () => {
//     let username ="nvn"
//     console.log(this.username);
// }
// chai()


// /////     ()  =>  {}        ----->>ARROW FUNCTION

// const addtwo = (num1,num2) =>{
//     return num1+num2
// }
// console.log( addtwo(34,435)); 

// const add3 = (num1,num2,num3) => num1+ num2+num3
// console.log(add3(34,45,234));    ///---->>>>> dont need to write return in parenthisis

// function Person() {
//     this.age = 0;

//     setInterval(() => {
//         this.age++;
//         console.log(this.age); 
//     }, 1000);
// }

// const person = new Person();

// console.log(person.age); 
 
setTimeout(() => {
    console.log("sher");
    
}, 2000);

//convert a function that filters out even number from array into arrow function 
//write  an arrow function to check if a number is prime
//use an arrowfun to return theh maximum of three number