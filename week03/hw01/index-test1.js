"use strict"

var testObj = { 
	a: 5, 
	b: "test123", 
	c: { c1: 2, c2: 3, c3: { c11: 22, c22: "test321" }}, 
	d: function () {} 
}
//console.log(typeof testObj.c)

var testObj1 = { a1: 11, b1: "test1", c: null }

var resObj = Object.assign([], testObj, testObj1 )

var testObj2 = {}

Object.defineProperty(testObj, 'val', {
	//__proto__: null,
	value: 'testStr',
	enumerable: false
})

//console.log(testObj.val)

function assign (...target) {				
	var result = new Object()
	target.forEach(function dAssign(obj, i, arr) {
		Reflect.ownKeys(obj).forEach( (item, j, arrInt) => {
			//if ( obj.propertyIsEnumerable(item) )
			//console.log(item) 
			if ( obj[item] !== null && obj.propertyIsEnumerable(item) )
				typeof obj[item] !== 'object' ? result[obj.item] = obj[Reflect.ownKeys(obj)[j]] : /*console.log("111")*/ result[item] = dAssign(obj[item])
		})
	})
	console.log(result)
	return result
}			

var objTest = assign(testObj1, testObj)


module.exports = assign