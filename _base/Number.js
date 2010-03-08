dojo.provide("dojotype._base.Number");
(function(d){
/*=====

	dojo.Number = function(){
		// summary: A series of prototype-extending Number functions.
		// description:
		//		All the Math.* functions available in stock JavaScript
		//		applied to the Number prototype. There are a few caveats
		//		with regard to syntax that may be undesirable.
		//	
		// example:
		//	|	var x = 10; x = x.pow(2); // x == 100
		//
		// example:
		//	|	var x = 10; x = x.pow(2).sqrt(); // x == 10
		//	|	// which is clearly more readable than:
		//	|	var x = 10; x = Math.sqrt(Math.pow(x, 2)) // x == 10;
		//	|	// alternately, can be written as: [but who would?]
		//	|	var x = 10; x = x["pow"](2)["sqrt"](); // x == 10
		//
		// example:
		//	|	// this will NOT work!
		//	|	var y = 10.pow(2); // y == #FAIL
	}

=====*/

	// combining math and number
	
	var maff = Math, ap = Array.prototype, np = Number.prototype;
	d.forEach(
		[
			// a list of straight-up-shit-that-could-be-on-Number
			// that would just call Math.something(this)
			"abs", "acos", "asin", "atan", "atan2", "ceil", "cos", "exp", "floor", "log", 
			"max", "min", "pow", /* "random", "round", */ "sin", "sqrt", "tan"
		],
		function(meth){
			// setup the function in place if it doesn't exist 
			// for some reason
			if(!this[meth] && maff[meth]){
				this[meth] = function(param){
					// if we have at least one extra param, take the whole thing:
					return maff[meth].apply(maff, param ? d._prep(this, arguments) : [this]);
				};
			}
		},
		np // context
	);
	
})(dojo);