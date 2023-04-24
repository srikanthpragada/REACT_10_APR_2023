function sum(msg, ...marks) 
{
    var total = 0
    for (let m of marks)
        total += m

    return  msg + " : " + total
}


console.log( sum("Total Marks", 10,20,30,40))
console.log( sum("Total Qyt" , 10,20, 90))