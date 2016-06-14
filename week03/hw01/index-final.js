(function()
{
    "use strict"

    Object.defineProperty(Object, "dAssign",
    {
        value: function dAssign(target, ...sources)
        {
            if ( target == null || Object.getPrototypeOf(target) == null ) throw new TypeError ("No null/undefined target objects")

            var to = target.constructor(target)

        	sources.forEach( (item,i,arr) => {
        		var from = arr[i]
        		if ( from !== Object(from) ) return

        		Reflect.ownKeys(from).forEach( (key) => {
          			from.propertyIsEnumerable(key) ? 
                        ( (to.hasOwnProperty(key) && (to[key] === undefined || to[key] === null)) ? 
                            eval("throw new TypeError(`Cannot convert undefined or null to object`)") :
                                ( to[key] === Object(to[key]) && from[key] === Object(from[key]) ? 
                                    to[key] = Object.dAssign(to[key], from[key]) : 
        				            to[key] = from[key] ) ) : 
        				eval("return")   

//more usual
/*                    if ( Object.propertyIsEnumerable.call(from, key) ) {
                        if ( Object.hasOwnProperty.call(to, key) && ( to[key] === undefined || to[key] === null ) ) 
                            throw new TypeError(`Cannot convert undefined or null to object`)
                        if ( to[key] === Object(to[key]) && from[key] === Object(from[key]) ) 
                            to[key] = Object.dAssign(to[key], from[key])
                        else
                            to[key] = from[key]
                    }   
*/
        		})
        	})

            return to
        },
        writable: true,
        configurable: true
    })
})()

//var result = Object.dAssign({a: 0}, {b: /\w/gi, c: 2, a: 5}, {a: {d: 4, m: {k: Object.create(null)}}})
//console.log(Object.getPrototypeOf(result.b))      //RegExp {}
//console.log(result)                               //{ a: { d: 4, m: { k: {} } }, b: /\w/gi, c: 2 }