"use strict"

const posthtml=require("posthtml")

const html='<em class="col-xs-12 alert col-xs-12 12345 col-xs-12 js-12" id=ret>HELLO!</em>'
const regexp=/(col)-(xs|sm|md|lg)-((\d([0-2])?)|((push)-\d([0-2])?)|((pull)-\d([0-2])?)|((offset)-\d([0-2])?))/i
const regexp1=/(?:\s)?\bcol-(?:xs|sm|md|lg)(?:-(?:push|pull|offset))?-(?:\d(?:[0-2])?)\b(?:\s)?/i
const regexp2=/\bjs(?:\w|-)*/i
//const treg=/col/i

const plugin=tree => tree
/*	.match({attrs: {'class': regexp1}}, node => 
	{	//console.log(node.attrs.class.indexOf(treg))
		//if (node.attrs.class.indexOf(treg)!=-1) {
			node.attrs.class = node.attrs.class.split(regexp1).join(' ')
			return node
		//}
	})*/
	.match({attrs: {'class': regexp2}}, node =>
	{
		console.log(node.attrs.class.split(regexp2))
		node.attrs.class = node.attrs.class.split(regexp2).join(' ')
		node.attrs = { data-js: "" }

		return node
	})

posthtml([plugin])
	.process(html)
	.then(result =>
	{
		console.log(result.html)
	})