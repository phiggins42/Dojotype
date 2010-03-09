dojo.provide("dojotype._base.Number");
(function(d){
	/*=====
	
	dojotype.Number = function(){
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
		//	|	// this will NOT work! (10).pow(2) will, however.
		//	|	var y = 10.pow(2); // y == #FAIL
	};
	
	=====*/
	
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
	
	d._clobber(np, {
		
		times: function(fn, method){
			// summary: executes a function passed in the number of specified times
			// description:
			//		executes a function passed in the number of specified times.
			//		follows the dojo.hitch API, allowing a combination of arguments
			//		to locate a method. All arguments passed to `times` are curried
			//		onto the callback function, again, just like `hitch`.
			//	
			//		additionally, the index is passed to the callback function in the
			//		LAST position beyond any potentially curried arguments.
			//
			// fn: Object|Function
			//		A scope to set (if method present), or the function to call.
			//
			// method: String|Function?
			//		If `fn` is a scope and this arg is present, combine these via hitch()
			//		if method is a string, it equates to fn[method](). if method is a function
			//		it is simply executed in the scope of `fn`.
			//
			// example:
			//	|	// call some function four times.
			//	|	(4).times(someFunc);
			// example:
			//	|	// call obj.method() 5 times:
			//	|	(5).times(obj, "method");
			// example:
			//	|	// call anonymous function in scope of foo 7 times
			//	|	(7).times(foo, function(index){ doit(this, index); })
			//
			var cb = d.hitch.apply(d, arguments);
			for(var i = 0; i < this; i++){ cb(i); }
			return this; // Number
		},
		
		limit: function(min, max){
			// summary: Limit this number to a range of numbers.
			// min: Number
			//		the minimum possible value
			// max: Number
			//		the maximum possible value
			//
			var ret;
			if(this < min) ret = min;
			else if(this > max) ret = max;
			else ret = this;
			return ret;
		}
		
	});
	
})(dojo);