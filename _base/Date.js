dojo.provide("dojotype._base.Date");
//
//	summary: Adds additional Date support to Date and String objects.
//

// TODO: unit tests. 
// TODO: maybe break this into supported bits? (eg: dojo.date, .stamp Module and .locale module)

dojo.require("dojo.date");
dojo.require("dojo.date.stamp");
dojo.require("dojo.date.locale");

(function(d){
	
	// a map of prototype names to corresponding dojo.date functions
	// and some aliases. for fun.
	var dd = d.date, dp = Date.prototype, 
		map = {
			"daysInMonth": [dd, "daysInMonth"],
			"isLeapYear": [dd, "isLeapYear"],
			"timezone": [dd, "getTimezoneName"],
			"compare": [dd, "compare"],
			"add": [dd, "add"],
			"difference": [dd, "difference"],
			"format": [dd.locale, "format"],
			"isWeekend": [dd.locale, "isWeekend"]
		}
	;
	
	// setup all the above direct mappings
	var setup = function(pn, fn){
		if(!dp[pn]){
			var fullfn = fn[0][fn[1]];
			dp[pn] = function(){
				return fullfn.apply(fn[0], d._prep(this, arguments));
			};
		}
	};
	
	for(var i in map){ setup(i, map[i]); }
	
	d._clobber(dp, {
		json: function(){
			// summary: Serializes a Date object as an ISO String. Helps
			// when serializing a JSON string from an object containing 
			// Date objects.
			return d.date.stamp.toISOString(this, { selector: 'date' });
		}
	});
	
	d._clobber(String.prototype, {
		toDate: function(options){
			// summary: Convert this string into a Date object, provided it is formatted properly.
			return dojo.date.locale.parse(this, options);
		}
	});
	
})(dojo);