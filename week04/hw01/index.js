class MyPromise extends Promise
{ 
	static map(iterable, map) 
	{ 
		console.log(this)
		return new this((resolve, reject) => { 
			let result = [] 
			let done = 0 

			for (let promise of iterable) {
				done++
				promise.then(value => 
					{ 
						result.push(map(value)) 
						if (! --done)
//						done++ 
//						if (done == result) 
							resolve(result) 
					}, reject) 
			}
		}) 
	} 
}


//console.log(MyPromise(,b))

let mypromise = new MyPromise()
console.log(mypromise.map([1,2,3,4,5], num => num*2))
