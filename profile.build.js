/* jshint unused: false */
'use strict';

var profile = {
	resourceTags : {
		amd : function(filename, mid) {
			return /build\/alertify\.js/.test(filename);
		},
		ignore: function (filename) {
			return /node_modules/.test(filename) || /docpad/.test(filename);
		}
	}
};