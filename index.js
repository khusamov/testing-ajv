var _ = require('lodash');
var Ajv = require('ajv');
var ajv = new Ajv({ allErrors: true });

var firstSchema = {
    "id": "/folder2/first.json",
	"nullable": true,
    "type": "string"
};

var secondSchema = {
    "id": "/folder1/second.json",
	"type": "object",
    "properties": {
        "first": { "$ref": "/folder2/first.json" }
    }
};


ajv.addKeyword('nullable', {
	validate: function(schema, data) {
		return schema ? data === null : true;
	}, errors: false 
});

ajv.addKeyword('constant', { validate: function (schema, data) {
	return typeof schema == 'object' && schema !== null
		? _.isEqual(schema, data)
		: schema === data;
}, errors: false });

var schema = { "constant": 2 };
var validate = ajv.compile(schema);
console.log(validate(2)); // true
console.log(validate(3)); // false

var schema = { "constant": { "foo": "bar" } };
var validate = ajv.compile(schema);
console.log(validate({foo: 'bar'})); // true
console.log(validate({foo: 'baz'})); // false

process.exit(0);



ajv.addSchema(firstSchema);
ajv.addSchema(secondSchema);


var data1 = {
	first: "fdsfdsfsd"
};
var data2 = {
	first: null
};

var valid = ajv.validate(secondSchema, data2);
console.log(valid);