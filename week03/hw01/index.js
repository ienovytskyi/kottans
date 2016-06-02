"use strict"

var testObj = { 
	a: { value: 1, enumerable: false, written: true, configurable: true }, 
	b: "test123", 
	c: { c1: 2, c2: 3, c3: { c11: 22, c22: "test321" }}, 
	d: function () {} 
}

var testObj1 = { a1: 11, b1: "test1" }


var resObj = Object.assign([], testObj, testObj1 )









console.log(Object.propertyIsEnumerable.call(testObj, 'a')) 
console.log(testObj.propertyIsEnumerable('a')) 
console.log(testObj.a) 
console.log(resObj)
console.log(typeof(testObj.c.c3))