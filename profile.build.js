/* jshint unused: false */
'use strict';

var profile = {
	resourceTags : {
		amd : function(filename, mid) {
			return /build\/alertify\.js/.test(filename);
		},
		ignore: function (filename) {
			return /docpad/.test(filename);
		}
	}
};