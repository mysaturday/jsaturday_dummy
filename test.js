var module = require('./');
var globalObject = {
	Config: {

	}
};

var jSaturday = require('jsaturday_factory')();

jSaturday.loadModule(module);


jSaturday.testAdd("ABC");


var Dummy = jSaturday.get('Dummy');

Dummy.lib.test();


