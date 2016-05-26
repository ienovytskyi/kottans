"use strict"

const posthtml=require("posthtml")

const html='<em class="js-10  col-10  art  col-md-9 js-11  col-xs-10    " id=ret>HELLO!</em>'
//const regexp=/(col)-(xs|sm|md|lg)-((\d([0-2])?)|((push)-\d([0-2])?)|((pull)-\d([0-2])?)|((offset)-\d([0-2])?))/ig		//test
const regexp1=/(?:\s)?\bcol-(?:xs|sm|md|lg)(?:-(?:push|pull|offset))?-(?:\d(?:[0-2])?)\b(?:\s)?/ig						//prod
const regexp2=/(?:\s)?\bjs(?:\w|-)*(?:\s)?/ig
const treg=/(?:\w|-)\s+(?:\w|-)/ig				//if there is bootstrap/js* class only, delete class attr

const plugin=tree => tree
	.match({attrs: {'class': regexp1}}, node => 
	{	
		if (node.attrs.class.match(treg)!=null) {
			node.attrs.class = node.attrs.class.split(regexp1).join(' ').replace(/\s+/g, ' ').replace(/(?:^\s+)|(?:\s+$)/g, '')
			return node
		}
		else {
			node.attrs.class = null		//if there is bootstrap class only, delete class attr
			return node
		}
	})
	
	.match({attrs: {'class': regexp2}}, node =>
	{
		node.attrs['data-js'] = node.attrs.class.match(regexp2).join(' ').replace(/\s+/g, ' ').replace(/(?:^\s+)|(?:\s+$)/g, '')
		if (node.attrs.class.match(treg)!=null) {
			node.attrs.class = node.attrs.class.split(regexp2).join(' ').replace(/\s+/g, ' ').replace(/(?:^\s+)|(?:\s+$)/g, '')
			return node
		}
		else {
			node.attrs.class = null		//if there is js* class only, delete class attr
			return node
		}
	})

posthtml([plugin])
	.process(html)
	.then(result =>
	{
		console.log(result.html)
	})