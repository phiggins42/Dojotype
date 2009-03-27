dojo.provide("dojotype._base.Array");

(function(d){

	// Array Magic
	d._clobber(Array.prototype, {
		forEach: function(fn, thisObj){
			return d.forEach(this, fn, thisObj)
		},
		map: function(fn, thisObj){
			return d.map(this, fn, thisObj);
		},
		every: function(fn, thisObj){
			return d.every(this, fn, thisObj);
		},
		indexOf: function(item, something){
			return d.indexOf(this, item, something);
		}
	});

})(dojo);