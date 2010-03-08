dojo.provide("dojotype._base.String");
//>>excludeStart("templated", kwArgs.includeTemplates)
dojo.require("dojo.string");
//>>excludeEnd("templated");
;(function(d){

	// String magic
	d._clobber(String.prototype, {
		
		trim:function(){
			// summary: Remove all whitespace around this string
			// 
			// example:
			// 	| >>> var clean = "  one two three    ".trim();
			//	| >>> "one two three"
			
			return d.trim(this); // String
		},
		
		has: function(key){
			// summary: Search this string for some fragment
			//
			// example:
			//	| if("foobar".has("foo")){ /* do something */ }

			return this.indexOf(key) >= 0; // Boolean
		},
		
		// planned API's, maybe:
		startsWith: function(key){
			// TODO
		},
		
		endsWith: function(key){
			// TODO
		},
		
		toCamelCase: function(){
			
		},
		
		//>>excludeStart("templated", kwArgs.includeTemplates)
		template: function(obj){
			return d.replace(this, obj);
		},
		//>>excludeEnd("templated");
		
		pad:function(n){
			
		}
	});

})(dojo);