let num = 5;
let bigint = BigInt(9007199254740991);
let str = "Lil_Fly";
let bool = true;
let isNull = null;
let isUnderfined = undefined;
let obj = new Object();
let symbol = Symbol('symbol');
let func = function myFunc() {};

function allTypes(name, value) {
	switch(typeof value) {
		case "number":
		case "bigint":
		case "string":
		case "boolean":
		case "undefined":
		case "symbol":
		case "function": {
			alert(`${name} is ${typeof value}\n`);
			break;
		}
		default: {
			if(value === null) {
				alert(`${name} is null\n`);
			}
			else {
				alert(`${name} is ${typeof value}\n`);
			}
		}
	}
}

allTypes("num", num);
allTypes("bigint", bigint);
allTypes("str", str);
allTypes("bool", bool);
allTypes("isNull", isNull);
allTypes("isUnderfined", isUnderfined);
allTypes("obj", obj);
allTypes("symbol", symbol);
allTypes("func", func)
