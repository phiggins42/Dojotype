dojo.provide("dojotype._base.Function");

dojo._clobber(Function.prototype, {
	bind: function(thisObj){
		// example:
		// var x = r = dojo.require.bind(dojo); r("dijit.Dialog");
		return dojo.hitch.apply(this, [thisObj, this].concat(dojo._toArray(arguments, 1)))
	},
	curry: function(){
		return dojo.partial.apply(this, [this].concat(arguments))
	},
	delay: function(ms){
		return setTimeout(this, ms);
	}
})