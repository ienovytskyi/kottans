"use strict"

const posthtml=require("posthtml")
const fs=require('fs')

const html=fs.readFileSync('./index.html')
//const html='<em class="js-10  col-10  art  col-md-9 js-11  col-xs-10    " id=ret>HELLO!</em>'

//const regexp=/(col)-(xs|sm|md|lg)-((\d([0-2])?)|((push)-\d([0-2])?)|((pull)-\d([0-2])?)|((offset)-\d([0-2])?))/ig						//boostrap prev rpod
//const regexp1=/(?:\s)?\bcol-(?:xs|sm|md|lg)(?:-(?:push|pull|offset))?-(?:\d(?:[0-2])?)\b(?:\s)?/ig									//bootstrap final prod
const regexp2=/(?:\s)?\bjs(?:\w|-)*(?:\s)?/ig																							//js prod
const regexp3=/(?:(?:\s)?\bcol-(?:xs|sm|md|lg)(?:-(?:push|pull|offset))?-(?:\d(?:[0-2])?)\b(?:\s)?)|(?:(?:\s)?\bjs(?:\w|-)*(?:\s)?)/ig	//combo regexp
const treg=/(?:\w|-)\s+(?:\w|-)/ig				//if there is bootstrap/js* class only, delete class attr

const plugin=tree => tree
	.match({attrs: {'class': regexp3 }}, node => 
	{	
		node.attrs['data-js'] = node.attrs.class.match(regexp2).join(' ').replace(/\s+/g, ' ').replace(/(?:^\s+)|(?:\s+$)/g, '')
		if (node.attrs.class.match(treg)!=null) {
			node.attrs.class = node.attrs.class.split(regexp3).join(' ').replace(/\s+/g, ' ').replace(/(?:^\s+)|(?:\s+$)/g, '')
			return node
		}
		else {
			node.attrs.class = null		//if there is bootstrap/js* class only, delete class attr
			return node
		}
	})
	
posthtml([plugin])
	.process(html)
	.then(result =>
	{
		fs.writeFileSync('./index-res.html',result.html,'utf8')
		console.log(result.html)
	})