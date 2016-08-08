/*global cordova,window,console*/
/**
 * An Multiple Picture take plugin for cordova
 * 
 * Developed by Alan Rocha
 */

var StopMotion = function() {

};

/*
*	success - success callback
*	fail - error callback
*	
*/
StopMotion.prototype.getPictures = function(success, fail, options) {
	if (!options) {
		options = {};
	}
console.log(success);
console.log(fail);
console.log(options);

	var params = {};

	return cordova.exec(success, fail, "StopMotion", "getPictures", [params]);
};


window.stopMotion = new StopMotion();
