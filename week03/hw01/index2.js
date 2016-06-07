(function()
{
    "use strict"

    Object.defineProperty(Object, "dAssign",
    {
        value: function dAssign(target, ...sources)
        {
            if ( target == ( null || undefined ) ) throw new TypeError ("No null/undefined objects")

            var to = target.constructor(target)

        	sources.forEach( (item,i,arr) => {
        		var from = arr[i]
        		if ( from !== Object(from) ) return

        		Reflect.ownKeys(from).forEach( (key) => {
        			from.propertyIsEnumerable(key) ? 
        				( ( (to[key] && from[key]) != ( null && undefined ) ) && ( ( typeof to[key] && typeof from[key] ) === 'object' ) ? 
        					to[key] = Object.dAssign(to[key], from[key]) : 
        					to[key] = from[key] ) : 
        				eval("return") 
        		})
        	})

            return to
        },
        writable: true,
        configurable: true
    })
})()

console.log(Object.dAssign({a: 0}, {b: 1, c: 2}, {c: {d: 4}}))