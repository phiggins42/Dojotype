dojo.provide("dojotype._base.String");
//>>excludeStart("templated", kwArgs.includeTemplates == "on")
dojo.require("dojo.string");
//>>excludeStop("templated");
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
		
		//>>excludeStart("templated", kwArgs.includeTemplates == "on")
		template: function(obj){
			this.innerHTML = d.string.substitute(this.innerHTML, obj);
			return this;
		},
		//>>excludeEnd("templated");
		
		pad:function(n){
			
		}
	});

})(dojo);