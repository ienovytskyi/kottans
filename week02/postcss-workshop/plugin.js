"use strict"

const postcss = require("postcss")
const name = "postcss-short-supports"

module.exports = postcss.plugin(name, () => css => 
{
	css.walkAtRules("supports", supports =>
	{
		supports.params = 
		supports.params.replace(/[-\w]+(?!\:)/g, "($&: initial)")
	})
})