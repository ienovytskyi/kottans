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
                        ( to[key] === Object(to[key]) && from[key] === Object(from[key]) ? 
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

console.log(Object.dAssign({a: 0}, {b: 1, c: 2, a: 5}, {a: {d: 4, m: {k: 7}}}))

//проверить как работает ассайн если from -> null/undefined, from[key] -> null/undefined, to -> null/undefined, to[key] -> null/undefined, 
/*if (val === undefined || val === null) return
    if (hasProp.call(to, key) && (to[key] === undefined || to[key] === null)) {
        throw new TypeError(`Cannot convert undefined or null to object ${key}`)*/