function task(fun, value) {
    fun(value)
}

function print(msg) {
  console.log(msg)
}

task(print, 'Hello')
// Arrow function 
task(s => console.log(s.toUpperCase()), "Hi")
