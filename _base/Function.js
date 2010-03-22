dojo.provide("dojotype._base.Function");
(function(d){
	
	/*=====
	
	dojotype.Function = function(){
		// summary: Gives some sytactic sugar to Function instances.
		//
	}
	
	=====*/
	var delays = {}, delayCount = 0;
	
	d._clobber(Function.prototype, {
		
		bind: function(thisObj){
			// summary: 
			//		Return a function that will execute this function
			//		only ever in a passed context. Similar to `dojo.hitch`
			//	
			// example:
			//	|	var r = dojo.require.bind(dojo);
			//	|	r("dijit.Dialog");
			//
			// example:
			//	|	var obj = {
			//	|		cache:"",
			//	|		url:"/foo.html",
			//	|		init: function(){
			//	|			!this.cache && dojo.xhrPost({ 
			//	|				url: this.url, 
			//	|				// ensure the handler retains `this` as it's context
			//	|				load: this.handler.bind(this) 
			//	|			})
			//	|		},
			//	|		handler: function(data){
			//	|			this.cache = data;
			//	|		}
			//	|	};
			//	|	obj.init();
			//
			//	example:
			//		Additionally, additional arguments beyond `thisObj` are curried
			//		along:
			//	|	var mycallback = function(data, event){
			//	|		if(data.random == "data"){ 
			//	|			console.warn("passed and object!")
			//	|		}
			//	|	});
			//	|	dojo.connect(node, "onclick", mycallback.bind(this, { random:"data" }));
			//
			// returns: Function
			//		A new function that has it's scope closed over.
			
			var t = this, a = d._toArray(arguments, 1);
			return function(){
				t.apply(thisObj, d._prep(a, arguments));
			}
		},
		
		curry: function(){
		    // summary:
		    //		Return a function that will execute with the passed
			//		arguments first. Similar to `dojo.partial`
			//
			//	example:
			//	|	var adder = function(a, b){
			//	|		return a + b;
			//	|	};
			//	|	var addtwoto = adder.curry(2);
			//	|	addtwoto(7); // 9
			//	|	addtwoto(8); // 10
			//	|	adder(1, 2); // 3
			//
			// 	example:
			//	|	var setopacity = dojo.style.curry("theNode", "opacity");
			//	|	// calls dojo.style("theNode", "opacity", 1);
			//	|	setopacity(1); 
			//	
			// returns: Function
			//		A new function with the applied arguments prepended automatically.
			return d.partial.apply(d, d._prep(this, arguments));
		},
		
		delay: function(ms, /* String? */id){
			// summary:
			//		Delay the execution of this function by `ms` milliseconds. 
			//
			// ms: Number
			//		The time in milliseconds to pass to this timeout.
			//
			// id: String?
			//		An optional identifier for this delay. Can be used with 
			//		Function.cancel(id) to prevent a specific timeout from
			//		occuring. 
			//
			// returns: String
			//		Either the passed id for later disconnect or the generated id
			//		of the timeout when ommitted. 
			
			id = id || "fn" + (++delayCount);
			delays[id] = setTimeout(this, ms);
			return id;
		},
		
		cancel: function(id){
			return id && delays[id] && clearTimeout(delays[id]);
		}
		
	});
	
})(dojo);
