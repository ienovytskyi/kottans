"use strict"

const http = require('http')

class myApp {
	constructor() {
		this.args = []
	}

	use() {
		Array.from(arguments).forEach( element => typeof element === 'function' ? this.args.push(element) : false )
	}

	start(port, host, callback /*...callback*/) {
		//http.createServer( (req,res) => { 
			//this.args.forEach( arg => arg(req,res) ) 
			//callback.forEach( element => typeof element === 'function' ? element(/*req,res*/) : false)
			//}).listen(port,host)

		http.createServer( (req,res) => this.args.forEach( arg => arg(req,res) ) ).listen(port,host,callback)

	}
}

module.exports = myApp