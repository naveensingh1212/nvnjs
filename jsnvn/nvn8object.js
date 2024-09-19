//singleton

//object literals

const mysym=Symbol("key1")
const nvnuser={
    name :"nvn",
    age : 21,
    email: "nnaveengamil.xom",
    lastlog :["nvn",2,34,4,"sher"],
    [mysym]:"nvnkey"
}

console.log(nvnuser.name);
console.log(nvnuser["email"]);
console.log(nvnuser["lastlog"]);
console.log(nvnuser[mysym]);//-->use only square brackects []in symbols

nvnuser.email="sher@gamil.com"
console.log(nvnuser["email"]);
//Object.freeze(nvnuser)
console.log(nvnuser);

nvnuser.greeting1=function(){
    console.log("hello shernvn");
}
nvnuser.greeting2=function(){
    console.log(`hello shernvn,${this.name}`);
}
console.log(nvnuser.greeting1())
console.log(nvnuser.greeting2())

