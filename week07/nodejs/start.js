"use strict"

const config = require('config')

const application = require('./myApp.js')

const fun1 = require('./fun1.js')
const fun2 = require('./fun2.js')
const fun3 = require('./fun3.js')
const fun4 = require('./fun4.js')

var app = new application()

app.use(fun3)
app.use(fun1,fun2)
app.use(fun4)

app.start(config.port, config.host, () => console.log("listening on " + config.host+":"+config.port))