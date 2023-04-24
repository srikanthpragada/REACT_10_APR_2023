var a = [10, 20, 30, 11, 23, 40]

function iseven(n) {
    return n % 2 === 0 
}

// using normal function 
var evens = a.filter( iseven )
console.log(evens)

// Using arrow function 
var odds = a.filter( v => v % 2 !== 0)
console.log(odds)
