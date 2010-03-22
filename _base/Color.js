dojo.provide("dojotype._base.Color");
(function(d){
	/*=====
	
	dojotype.Color = function(){
		// summary: 
		//		A module which adds color-conversion capability to 
		//		strings and arrays. 
		//
		// description: 
		//		A module which adds color-conversion capability to 
		//		string and arrays. An array of length 4 or 3 can be converted
		//		to a string and vice versa, from their native prototypes.
		//		
		//		See `dojo.Color` for the available methods and appropriate documentation.
		//
		// example:
		//	[255, 255, 255].toCss(); // returns "#000000"
		//
		// example:
		//	"#000000".toRgb(); // returns array: [255, 255, 255]
		//
	}
	
	=====*/
	
	var c = new d.Color(), // one color instance to use for conversions
		setup = function(meth){
			if(!this[meth]){
				this[meth] = function(){
					c.setColor(this);
					return c[meth].apply(c, arguments);
				};
			}
		}
	;
	
	d.forEach(["toRgb", "toRgba", "toHex"], setup, String.prototype);
	d.forEach(["toCss"], setup, Array.prototype);
	// TODO: write unit tests
	
})(dojo);