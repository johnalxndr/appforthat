'use strict';

angular.module('dailysteals')

.controller('MainCtrl', ['Auth','$firebaseArray','$firebaseObject','wootstuff',
	function (Restangular, Auth, $firebaseArray, $firebaseObject,wootstuff) {
    var self = this;
        wootstuff.woot.then(function(data){
            self.wootData = data;
            console.log(data);
        })
//Slow Scroll 
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 750);
        return false;
      }
    }
  });
});
//End Slow Scrol         
  
//Facebook Log in         
	this.loginbox = true;
	this.logout = Auth.logout;
	Auth.onAuth(function(user){
		self.user = user;
	if (user === null){
		console.log('null');
	} else {
		console.log(user);
	}
	});
	if (this.user){
		this.loginbox = false;
	}
var userInfo = new Firebase('https://givemethatthing.firebaseio.com/users');
 
	this.obj = $firebaseArray(userInfo);
	console.log(this.obj);

	this.userArray = {};
	
	this.fbLogin = Auth.fbLogin;
    
//End FB Log in      
}])