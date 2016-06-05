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
		console.log( i) 
		Reflect.ownKeys(obj).forEach( (item, j, arrInt) => {
			//if ( obj.propertyIsEnumerable(item) )
			//console.log(obj[item]) 
/*			if ( obj[item] !== null && obj.propertyIsEnumerable(item) && i !== undefined)
				typeof obj[item] !== 'object' ? result[item] = obj[Reflect.ownKeys(obj)[j]] : /*console.log("111")*/ /*dAssign(obj[item],undefined,item)
			if ( i === undefined ) 
				{//console.log(arr) 
				typeof obj[item] !== 'object' ? ( result[arr] = new Object() ) && ( result[arr][item] = obj[Reflect.ownKeys(obj)[j]] ) : /*console.log("111")*/ /*dAssign(obj[item],undefined,item)}
*/
			if ( obj[item] !== null && obj.propertyIsEnumerable(item) )
				typeof obj[item] !== 'object' ? 
					( i === undefined ? ( result[arr] = new Object() ) && ( result[arr][item] = obj[Reflect.ownKeys(obj)[j]] ) : result[item] = obj[Reflect.ownKeys(obj)[j]] ) :
					( i === undefined ? dAssign(obj[item],undefined,arr.item) : dAssign(obj[item],undefined,item) )
			


			/*if ( i === undefined ) 
				{//console.log(arr) 
				typeof obj[item] !== 'object' ? ( result[arr] = new Object() ) && ( result[arr][item] = obj[Reflect.ownKeys(obj)[j]] ) : console.log("111") dAssign(obj[item],undefined,item)}*/
		})
	})
	console.log(result)
	return result
}			

var objTest = assign(testObj1, testObj)


module.exports = assign