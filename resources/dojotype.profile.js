dependencies = {
	
	stripConsole: "normal",
	version:"1.4.0-dt",
	action:"clean,release",
	
	// dojotype-specific buildtime options:
	
	includeTemplates:true,
	
	layers: [
		//
		// to build dojotype into a stock dojo.js, uncomment this section and comment out
		// the section following this one:
		//
//		{
//			name:"dojo.js",
//			dependencies:[
//				"dojotype.base"
//			]
//		},
	    
		{
			name: "../dojotype/base.js",
			dependencies: [
				"dojotype.base"
			]
		}
	],

	prefixes: [
		// uncomment if you wish to include dijit and dojox in this release build:
//		[ "dijit", "../dijit" ],
//		[ "dojox", "../dojox" ],
		[ "dojotype", "../dojotype"]
	]
}
