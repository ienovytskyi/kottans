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

function assign (target, ...source) {				
	var to = new target.constructor()
	var shift = ""
	source.forEach(function dAssign(obj, i, arr) {
		//console.log( i) 
		if ( i === undefined ) {
//			shift === "" ? shift = shift+"["+arr+"]" : shift = shift+"']['"+arr
			shift === "" ? shift = shift+arr.toString() : shift = shift+"]["+arr.toString()
			//shift = shift + arr.toString()
			var temp = shift
//			console.log(eval(temp))
		console.log(shift)
		//to[eval("[shift]")] = new Object()
		to[shift] = new Object()
//		eval ( temp = new Object() )  
//		temp['a'] = 5
		console.log(to)
		}
		
		Reflect.ownKeys(obj).forEach( (item, j, arrInt) => {
			//if ( obj.propertyIsEnumerable(item) )
//			console.log(arr) 
/*			if ( obj[item] !== null && obj.propertyIsEnumerable(item) && i !== undefined)
				typeof obj[item] !== 'object' ? result[item] = obj[Reflect.ownKeys(obj)[j]] : /*console.log("111")*/ /*dAssign(obj[item],undefined,item)
			if ( i === undefined ) 
				{//console.log(arr) 
				typeof obj[item] !== 'object' ? ( result[arr] = new Object() ) && ( result[arr][item] = obj[Reflect.ownKeys(obj)[j]] ) : /*console.log("111")*/ /*dAssign(obj[item],undefined,item)}
*/
/*			if ( obj[item] !== null && obj.propertyIsEnumerable(item) )
				typeof obj[item] !== 'object' ? 
					( i === undefined ? ( target[arr][item] = obj[Reflect.ownKeys(obj)[j]] ) : ( target[item] = obj[Reflect.ownKeys(obj)[j]] ) ) :
					( i === undefined ? ( target[item] = new Object() ) && dAssign(obj[item],undefined,item) : ( ( target[item] = new Object() ) && dAssign(obj[item],undefined,item) ) )
*/			
			if ( obj[item] !== null && obj.propertyIsEnumerable(item) )
				typeof obj[item] !== 'object' ? 
					( i === undefined ? ( to[item] = obj[Reflect.ownKeys(obj)[j]] ) : ( to[item] = obj[Reflect.ownKeys(obj)[j]] ))  : dAssign(obj[item],undefined,item)  


			/*if ( i === undefined ) 
				{//console.log(arr) 
				typeof obj[item] !== 'object' ? ( result[arr] = new Object() ) && ( result[arr][item] = obj[Reflect.ownKeys(obj)[j]] ) : console.log("111") dAssign(obj[item],undefined,item)}*/
		})
	})
	console.log(to)
	return target
}			

var objTest = assign({}, testObj1, testObj)
//console.log(objTest.a1)
//console.log(testObj1)


module.exports = assign