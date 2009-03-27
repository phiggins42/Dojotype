dojo.provide("dojotype._base.Node");
(function(d){
	
	d._Node = function(){};
	d._Node.fn = d._Node.prototype;
	
	d.extend(d._Node, {

		// Animations
		fadeOut: function(props){
			d.fadeOut(d.mixin({ node: this }, props)).play();
			return this;
		},
		
		fadeIn: function(props){
			d.fadeIn(d.mixin({ node: this }, props)).play();
			return this;
		},
		
		anim: function(props){
			d.animateProperty(d.mixin({ node: this }, props)).play();
			return this;
		},
		
		// DOM operations. 
		css: function(key, val){
			if(val === undefined && !d.isObject(key)){
				return d.style(this, key);
			}else{
				d.style(this, key, val);
				return this; // dojo._Node
			}
		},
		
		place: function(location, position){
			d.place(this, location, position);
			return this; // dojo._Node
		},

		attr: function(key, val){
			if(val === undefined){
				return d.attr(this, key); // Anything
			}else{
				d.attr(this, key, val);
				return this; // dojo._Node
			}
		},
		
		empty: function(){
			d.empty(this);
			return this; // dojo._Node
		},
		
		destroy: function(){
			d.destroy(this);
			return this; // heh, why?
		},
		
		clone: function(){
			var n = d.clone(this);
			return $$(n); // dojo._Node
		},
		
		// NodeList operations
		find: function(selector){
			return d.query(selector, this); // dojo.NodeList
		}
		
	});
	
	// FIXME: leave this as a public function, or hide in an overridden
	// `dojo.byId` for superduper magic?
	d.node = function(/* String|DomNode */id, /* Document */doc){
		// summary: Find a node by it's ID, returning an enhanced version
		//		of a plain DOM element.
		// 
		// example:
		//	| d.node("foo").empty().innerHTML = "<p>Hi!</p>";
		//
		var n = d.byId(id, doc);
		n.constructor = d._Node;
		d._mixin(n, d._Node.prototype);
		return n; // DomNode
	};
	
	if(d.config.conflict){
		// setup the double-bling in conflict mode.
		d.global["$$"] = d.node;
	}
	
})(dojo);