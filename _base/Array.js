dojo.provide("dojotype._base.Array");
(function(d){

	// base Array Magic
	d.forEach(
		["forEach", "map", "every", "indexOf", "some", "filter"],
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