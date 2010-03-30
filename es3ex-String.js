dojo.provide("dojotype.es3ex-String");
dojo.require("dojotype._base._bootstrap");
// summary: A module you should never load. Brings those crappy modern browsers up to date with 
//		Microsoft's ecma-3 String extensions.
//
// refs: http://msdn.microsoft.com/en-us/library/ff520797%28VS.85%29.aspx
(function(d){
	
	var sp = String.prototype,
		
		// silly-ness.
		eq = "=", q = '"', gt = ">", lt = "<", close = "/", space = " ", meh = "", no = 0,
		
		// the map
		cowbells = {
			
			// plain wrap(key)
			blink: no, 
			sub: no, 
			sup: no,
			small: no, 
			big: no,
			strike: no,
			small: no,
			
			// need to wrap but no args: wrap(val[0])
			fixed: ["tt"],
			bold: ["b"],
			italics: ["i"],
			
			// need to wrap in val[0] and curry val[1..l]. expects passed value at l + 1
			anchor: ["a", "name"],
			link: ["a", "href"],
			fontcolor: ["font", "color"],
			fontsize: ["font", "size"]
			
		}
	;
	
	sp._wrap = function(tag, key, val /* ... */){
		// summary: Wrap this string in some basic markup. every pair of arguments beyond the tag
		// 	is converted into key="value" attributes in the string. 
		var openopts = "";
		if(arguments.length > 1){
			var args = d._toArray(arguments, 1), t = [];
			for(var i = 0, l = args.length; i < l; i += 2){
				t.push([args[i], eq, q, args[i + 1], q].join(meh));
			}
			openopts = space + t.join(space);
		}
		return [lt, tag, openopts, gt, this, lt, close, tag, gt].join(meh); // String
	};
	
	var setup = function(meth, args){
		if(!sp[meth]){
			var a = args || [], p = [a[0] || meth, a[1]];
			sp[meth] = function(){
				this._wrap.apply(this, d._prep(p, arguments)); // String
			};
		}
	};
	
	// hook up all the functions ms gave us:
	for(var i in cowbells){ setup(i, cowbells[i]); }
	
})(dojo);