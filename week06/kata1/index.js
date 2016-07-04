"use strict"

const index = strings =>
{
	if (strings == "") return 0
	
	let array = strings.match(/^\/\/(?:\[?(.+?)\]?)\n/)				//delimiter may has [] and may not. multiple delimiters use with [] only

	if (array)
	{
		let [{length}, delim] = array
		strings = strings.slice(length)
		var pattern = new RegExp(delim.split('][').join("|"), "g")
	}
	else pattern = /[,\n]/g

	var temp = []													//is it possible to throw exception on ALL negative numbers witout ext var?

	return strings
		.split(pattern)
//		.filter(string => string < 1001)							//looks good but we parse array one more time
		.map( (string, index, array) => string > 1000 ? false : 	//looks bad but we parse array only once
			string < 0 ? 		
				temp.push(string) && index == array.length-1 ? eval("throw new Error ('Negative numbers ['+ temp +'] not allowed')") : false
			: temp.length!=0 && index == array.length-1 ? eval("throw new Error ('Negative numbers ['+ temp +'] not allowed')") 
				: string == "" ? NaN : +string )
		.reduce((sum, num) => sum + num)

}

module.exports = index

//console.log(index("//bb\n-300bb5bb40bb50"))