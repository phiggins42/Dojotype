dojo.provide("dojotype._base");
(function(){

	var d = dojo,

		// we'll use these a lot
		ap = Array.prototype,
		sp = String.prototype,
		fn = Function.prototype,
		
		// a basic "sniff for native method or mix ours in"
		clobber = d._clobber = function(proto, props, force){
			// summary: Clobber a prototype with a new version of a function. Rock it.
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
		}
	;

	// String magic
	clobber(sp, {
		trim:function(){
			return d.trim(this);
		},
		has: function(key){
			return this.indexOf(key) >= 0
		},
		startsWith: function(key){
			// TODO
		},
		endsWith: function(key){
			// TODO
		}
	});
		
	// Array Magic
	clobber(ap, {
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
	
})();