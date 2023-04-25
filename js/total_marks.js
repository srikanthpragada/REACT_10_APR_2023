var data = "90,45,55,89"
var marks = data.split(",")
console.log(marks)

var  total = 0
for(let m of marks)
    total += parseInt(m)

console.log(total)
