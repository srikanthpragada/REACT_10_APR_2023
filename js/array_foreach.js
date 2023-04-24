var a = [10, 20, 30, 11, 23, 40]

function printsquare(v) {
    console.log(v * v)
}

a.forEach(printsquare)

// Using function expression 
//a.forEach(function(v){ console.log(v)})

// Using arrow function 
a.forEach( (v) => console.log(v))