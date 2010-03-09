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
		["forEach", "map", "every", "indexOf", "lastIndexOf", "some", "filter"],
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
	d._clobber(Array.prototype, {
		max: function(){
		    return Math.max.apply(Math, this);
		},
		min: function(){
		    return Math.min.apply(Math, this);
		}
	});

})(dojo);