"use strict"

require("chai").should()
//require("chai").expect

const add = require("./")

describe("add", () => 
{
	it("should be a function with 1 param", () => 
	{
		add.should
			.be.a("function")
			.have.lengthOf(1)
	})
	
	it("should add any numbers of ints", () => 
	{
		add("1").should.equal(1)
		add("1,2").should.equal(3)
		add("3,6,1").should.equal(10)
		add("4,8,15,16,23,42").should.equal(108)
	})

	it("should return 0 for empty string", () =>
	{
		add("").should.equal(0)
	})

	it("should handle new lines between numbers", () => 
	{
		add("1\n2,3").should.equal(6)
		add("1,\n").should.be.NaN
	})

	it("should return NaN for incorrect input", () => 
	{
		add("1,\n").should.be.NaN
	})

	it("should allow supplying custom delimiter", () =>
	{
		add("//;\n1;2;3").should.equal(6)
		add("//;\n1;2").should.equal(3)
		add("//p\n3p4").should.equal(7)
	})

	it("should throw exception on negative numbers", () =>
	{
		( () => {add("//p\n-3p5p-4")} ).should.Throw(Error, Error.message)
	})
	
	it("should not throw exception on positive numbers", () =>
	{
		( () => {add("//p\n3p5p4")} ).should.not.Throw(Error, /^Negative numbers/)
	})
	
	it("should ignore numbers larger than 1000", () =>
	{
		add("//;\n1;2000;3").should.equal(4)
		add("//;\n1000;2").should.equal(1002)
	})

	it("should support any length delimiters", () =>
	{
		add("//pax\n3pax4").should.equal(7)
		add("//[acb123%]\n1000acb123%2acb123%56acb123%7").should.equal(1065)
	})

	it("should support multiple delimiters", () =>
	{
		add("//[a][b][c]\n1a2b3c4b5a6").should.equal(21)
	})

	it("should support multiple any length delimiters", () =>
	{
		add("//[abc][bca][c]\n1abc2bca3bca4c5").should.equal(15)
	})
})