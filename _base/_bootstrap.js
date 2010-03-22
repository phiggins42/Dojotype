dojo.provide("dojotype._base._bootstrap");

dojo._clobber = function(proto, props, force){
	// summary: Clobber a native prototype with a new version of a function. Rock it.
	//		Differs from `dojo.mixin` as mixin is destructive, while this intentionally
	//		defers to native API's when found, regardless of compatibility.
	//
	// proto: Object
	//		The prototype to extend. Everything is an object.
	//
	// props: Object
	//		A hash map of methods to possible mix into this prototype `proto`
	//
	// force: Boolean
	//		Just go ahead and override an existing method on the prototype, 
	//		regardless.
	//
	// returns: nada
	for(var method in props){
		if(force || !proto[method]){
			proto[method] = props[method];
		}
	}
};

dojo._prep = function(/* AnythingButAString */item, /* Array? */ar){
	// summary: Place `item` at the beginning of `ar` and return 
	//		the new array (as an alternative to calling push())
	//		on an array in place and manually creating it.
	var x = dojo.isArrayLike(item) ? item : [item];
	[].push.apply(x, ar || []);
	return x;
};
