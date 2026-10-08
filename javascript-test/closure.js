function outer() {
    const name = "hitesh";
    function inner() {
        console.log("welcome my friend", name)
    }
    return inner;
}

let result = outer();
result();


// function outer(){
//     const name = "hitesh"
//     console.log("outer", email);
//     function inner (){
//         const email = "hitesh@123gmail.com";
//         console.log("welcome my friend",name)
//     }
//     function innerTwo(){
//         console.log(name)
//     }
//      inner()
//      innerTwo()
// }

// outer();