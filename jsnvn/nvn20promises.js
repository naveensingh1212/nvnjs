const nvnPromise = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("asyn is copleted");
        resolve()
    },1000)
})

nvnPromise.then(function(){
    console.log("async resolved");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async 2 is completed");
        resolve()
    },1000)
    
}).then(function(){
    console.log("asyn 2 resloved");
})  

const nvnPromise3 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username : "nvn" , password : "nvn12"})
        }else{
            reject('ERROR : something went wrong')
        }
    },1000 )
})
nvnPromise3.then((user) => {
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
})


const nvnPromise4 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true; 
        if (!error) {
            resolve({username: "javascript", password: "123"});
        } else {
            reject('ERROR: JS Went wrong');
        }
    }, 1000);
});

async function consumenvnPromise4() {
    try {
        const response = await nvnPromise4;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumenvnPromise4();

// f
getAllusers()

