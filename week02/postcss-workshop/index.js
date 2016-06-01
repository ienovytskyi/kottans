"use strict"

const postcss = require('postcss')
const plugin = require('./plugin1')
const fs = require('fs')
const css =

`
body {
    margin: 0;
    font-size: 200px;
    color: #fff;
} 
section {
    height: 100vh;
    background-attachment: fixed;
}
`



postcss().use( plugin )
	.process(css)
	.then(result =>
	{
	fs.writeFileSync("./style-before.css", result.css)
	})
	.catch(console.error)