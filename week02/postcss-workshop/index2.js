"use strict"

const postcss = require('postcss')
	, plugin = require('./plugin2')
	, fs = require('fs')
	, css = fs.readFileSync("./style-2.css")


postcss().use( plugin )
	.process(css)
	.then(result =>
	{
	fs.writeFileSync("./style-before2.css", result.css)
	})
	.catch(console.error)