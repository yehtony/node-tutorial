// ES2017 Async and Await

// Not every single function that takes an argument is asynchronous, 
// but in general, most function that takes function argument are going to be asynchronous

// Asynchronous Programming vs Synchronous Programming
import fetch from 'node-fetch'

let a = 1
let b = 2

setTimeout(function () {
    console.log('Timeout: ' + a)
}, 1000)

a = 10

fetch('https://github.com/').then(function () {
    console.log("fetch")
})

console.log("Synchronous")
console.log(a)
console.log(b)
