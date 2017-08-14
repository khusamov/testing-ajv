var Ajv = require('ajv');
var ajv = new Ajv({allErrors: true});

var firstSchema = {
    "id": "http://localhost:1234/first.json",
    "type": "string"
};

var secondSchema = {
    "id": "http://localhost:1234/second.json",
    "type": "object",
    "properties": {
        "first": { "$ref": "first.json" }
    }
};




ajv.addSchema(firstSchema);
ajv.addSchema(secondSchema);


var data1 = {
	first: "fdsfdsfsd"
};

var valid = ajv.validate(secondSchema, data1);
console.log(valid);