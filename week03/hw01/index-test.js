"use strict"

var testObj = { 
	a: 5, 
	b: "test123", 
	c: { c1: 2, c2: 3, c3: { c11: 22, c22: "test321" }}, 
	d: function () {} 
}

var testObj1 = { a1: 11, b1: "test1", c: null }


var resObj = Object.assign([], testObj, testObj1 )



var testObj2 = {}

Object.defineProperty(testObj2, 'val', {
	//__proto__: null,
	value: 'testStr',
	enumerable: true
})

/*var resObj1 = Object.assign([], testObj )
console.log(resObj1)
var resObj2 = Object.assign(resObj1, testObj1 )
console.log(resObj1)
console.log(resObj2)*/

function dAssign222(result, curr) {
	//console.log(arr)
	console.log(Reflect.ownKeys(curr).length)
	/*for (let i=0; i<Object.keys(curr).length; i++) {
		result[Object.keys(curr)[i]] = curr[Object.keys(curr)[i]]
	}	*/	
	Reflect.ownKeys(curr).forEach()
	console.log(Reflect.ownKeys(curr))
	//console.log(result)
	return result
}


function assign (...target) {				
	//let arr = arguments
	//console.log(Array.prototype.slice.call(arguments))
	//console.log(target.prototype.slice.call(arguments))
	//let targetArr = Array.prototype.slice.call(arguments)
	//var result = assign(0, 0, target)
	//Array.from(arguments).forEach(assign)
	//console.log(result)
/*	---------------------------------------
	var result = new Object()
	for (let i=0; i<arguments.length; i++) {
		dAssign(result,arguments[i])
	}
	return result
	---------------------------------------*/
	var result = new Object()
	//console.log(target)
	target.forEach(function dAssign(item, i, arr) {
		///console.log(Reflect.ownKeys(arr).length)
		/*for (let i=0; i<Object.keys(curr).length; i++) {
			result[Object.keys(curr)[i]] = curr[Object.keys(curr)[i]]
		}	*/	
		Reflect.ownKeys(item).forEach(function (itemInt, j, arrInt) {
			///console.log(Reflect.ownKeys(item))
			result[itemInt] = item[Reflect.ownKeys(item)[j]]
		})
		//console.log(Reflect.ownKeys(curr))
	})
	/*/*for (let i=0; i<target.length; i++) {
		dAssign(result,target[i])
	}*/
	console.log(result)
	return result
}			

var objTest = assign(testObj1, testObj)


/*console.log(Object.propertyIsEnumerable.call(testObj, 'a')) 
console.log(testObj.propertyIsEnumerable('a')) 
console.log(testObj.a) 
console.log(resObj)*/
//console.log(testObj2.propertyIsEnumerable('val'))
//console.log(testObj1[Object.keys(testObj1)[0]])
module.exports = assign