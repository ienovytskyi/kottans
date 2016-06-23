"use strict"

const index = strings =>
{
	if (strings == "") return 0
	
	let array = strings.match(/^\/\/(.+)\n/)
	if (array)
	{
		let [{length}, delim] = array
		strings = strings.slice(length)
		var pattern = RegExp(delim, "g")
	}
	else pattern = /[,\n]/g

	return strings
		.split(pattern)
		.map(string => string == "" ? NaN : +string)
		.reduce((sum, num) => sum + num)
}

module.exports = index