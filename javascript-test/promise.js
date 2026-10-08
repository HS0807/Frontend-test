const promiseOne = new Promise(function (resolve, reject) {
    //can do async task
    //DataBase calls ,cryptography , networking

    setTimeout(function () {
        console.log("async task is complete")
        resolve()
    }, 1000)
})

promiseOne.then(function () {
    console.log("promise consumed")
})


new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("async task 2");
        resolve()
    }, 1000)
}).then(function () {
    console.log("async 2 resolved");
})

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "hitesh", email: "hitesh@123gmail.com" })
    }, 1000)
})

promiseThree.then(function (user) {
    console.log(user)
})



const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "hitesh", password: "12345" })
        } else {
            reject('ERROR : Somthing went wrong')
        }
    }, 2000)
})

promiseFour.then(function (user) {
    console.log(user);
    return user.username
}).then(function (username) {
    console.log(username);
}).catch((error) => {
    console.log(error)
}).finally(() => { console.log("the promise is either resolved or rejected") })



const pronisefive = new Promise((resolve, reject) => {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "javascript", password: "123" })
        } else {
            reject('ERROR : js went wrong')
        }
    }, 2000)
})

async function consumePromiseFive() {
    try {
        const response = await pronisefive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()


async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log("E:",error);
    }
}

getAllUsers()   


fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error) => {
    console.log("E:",error);
})

