class MyPromise extends Promise
{ 
	constructor (...args) {
		super(...args)
		return this
	}
	static map(iterable, mapper) 
	{ 
		console.log("this")
		return new this((resolve, reject) => { 
			let result = [] 
			let done = 0 

			for (let promise of iterable) {
				done++
/*				promise.then(value => 
					{ 
						result.push(mapper(value)) 
						if (! --done)
//						done++ 
//						if (done == result) 
							resolve(result) 
					}, reject) 
*/				promise.then(new this ((resolve, reject) =>{
                	result.push(mapper(value))
                	if (! --done)
                    	resolve(result)
            	}),  reject)
			}
		}) 
	} 
}


//console.log(MyPromise(,b))

const names = [Promise.resolve('HTML'), Promise.resolve('CSS'), Promise.resolve('JS')]
const mypromise = new MyPromise(() => {})
//const result = mypromise.map(names, name => name.length )

console.log(mypromise)
