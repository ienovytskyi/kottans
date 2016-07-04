"use strict"

function Spy(obj, meth) {
    let spy = {
        count: 0
    }
 
    let origin = obj[meth]
    obj[meth] = function() {
        spy.count++
        return origin.apply(obj, arguments)
    }
 
    return spy
}
 
module.exports = Spy

/*
console.error('calling console.error',"123")

let spy = Spy(console, 'error')
console.error('calling console.error')
console.error('calling console.error',"123")
console.error('calling console.error')

console.log(spy.count) //3
*/