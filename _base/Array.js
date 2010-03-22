dojo.provide("dojotype._base.Array");
(function(d){

	/*======
	
	dojotype.Array = function(){
		// summary: 
		//		A series of Array utilities provided in base Dojo mixed into the the Array prototype. 
		//	
		//		methods include: forEach, map, every, indexOf, lastIndexOf, some, and filter.
		//		All behave as their dojo.* counterparts would (eg: dojo.forEach)
		//
		//		Additional modules include max and min calculation, reducing an array to a 
		//		maximum or minimum value, respectively.
		//
		// example:
		//	|	dojo.forEach([1,2,3], alert);
		//	|	// versus:
		//	|	[1,2,3].forEach(alert);
	}

	=====*/

	// base Array Magic
	d.forEach(
		["forEach", "every", "some", "indexOf", "lastIndexOf", "filter", "map"],
		//
		// any function which accept an array in the first position
		// can be mapped in this way. all syntax regarding these functions 
		// is: 
		// [1,2,3].forEach(callback, context)
		// versus
		// dojo.forEach([1,2,3], callback, context);
		// where the array itself is curried into the first position
		//
		function(meth){
			if(!this[meth]){
				// setup the prototype function for `meth`
				this[meth] = function(){
					return d[meth].apply(d, d._prep(this, arguments));
				};
			}
		},
		Array.prototype // context
	);

	// Additional Array Magic
	var m = Math, rnd = function(ar){
		return ar[m.floor(m.random() * ar.length)];
	};
	
	d._clobber(Array.prototype, {
		
		max: function(){
		    return m.max.apply(m, this);
		},
		
		min: function(){
		    return m.min.apply(m, this);
		},
		
		random: function(count){
			// summary: Pulls a random element (optionally elements) from this list.
			//
			// count: Integer
			//		If passed, this number of random items are returned
			//		If omitted (or a falsy value), a single random item is returned.
			//
			// example:
			//	Just pluck a random element from an Array:
			//	|	switch([1,2,3].random()){
			//	|		case 1: break; case 2: break; default: break;
			//	|	}
			//
			// example:
			//	An indexOf test is done for duplicate items in the random array return.
			//	|	[1,2,1].random(2); // will never be [1,1]
	
			var ret;
			if(count && count <= this.length){
				ret = [];
				for(; ret.length < count;){
					var c = rnd(this);
					if(ret.indexOf(c) < 0) ret.push(c);
				}
			}else{
				ret = rnd(this);
			}
			return ret; 
		},
		
		randomize: function(inplace){
			// summary: 
			//		Randomize this array. 
		}
		
	});

})(dojo);