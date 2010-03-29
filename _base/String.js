dojo.provide("dojotype._base.String");
;(function(d){

	// String magic
	var lt = "<", gt = ">", close = "/";
	
	d._clobber(String.prototype, {
		
		trim:function(){
			// summary: Remove all whitespace around this string
			// 
			// example:
			//	| >>> var clean = "	 one two three	  ".trim();
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
		
		template: function(obj){
			return d.replace(this, obj);
		},
		
		pad:function(n){
			
		},
		
		_wrap: function(tag, openopts){
			// summary: Wrap this string in some basic markup.
			return [lt, tag, openopts || "", gt, this, lt, close, tag, gt].join("");
		},
		
		blink: function(){
			// summary: Make it blink, if injected into HTML
			// refs: http://msdn.microsoft.com/en-us/library/ff520797%28VS.85%29.aspx
			return this._wrap("blink");
		},
		
		anchor: function(href){
			return this._wrap("a", href ? "href='" + href + "'" : 0);
		}
	});

})(dojo);