(function($){
	$.fn.flexBackground = function(options){
	'use strict';

		/**------------------ SETTING PARAMETERS ------------------**/
		
		var scroll_count;
		var scroll_time;
		var height;
		var width;
		
		var numberOfPoints = 200;
		var radius = 1;
		var interval = 50;
		var velocity = 5;
		var color = {r:256, g:256, b:256};
		
		
		var config = {};
		if(options){
			$.extend(config, options);
		}
		
		
		
		
		/**------------------ BEGIN FUNCTION BODY ------------------**/
		
		
		
			var selector = $(this);
			var selectorCan = $(this).find("canvas");

			if(config.numberOfPoints)
				numberOfPoints = parseInt(config.numberOfPoints, 10);
			
			if(config.radius)
				radius = parseInt(config.radius, 10);
			
			if(config.interval)
				interval = parseInt(config.interval, 10);
			
			if(config.velocity)
				velocity = parseInt(config.velocity, 10);
			
			if(config.color){
				var regExp = new RegExp("\\d+", "g");
				color.r = regExp.exec(config.color);
				color.g = regExp.exec(config.color);
				color.b = regExp.exec(config.color);
			}
			
			
			
			/**------------------------------------------------  SETTING FUNCTIONS ------------------------------------------------- **/

			width = selector.width();
			height = selector.height();
			
			selectorCan.attr('height', height);
			selectorCan.attr('width', width);
			
			var canvas = selectorCan[0];
			var ctx = canvas.getContext("2d");

			var snow = new Array();
			
			function refresh(){
				width = selector.width();
				height = selector.height();
				
				selectorCan.attr('height', height);
				selectorCan.attr('width', width);
				
				for(var i = 0; i < numberOfPoints; i++){
					var tempVar;
					 snow[i] = {posX:100, posY:100, velocity:3, radius : 3, gradAngle:0, gradStart : 0, gradEnd : .4};
					 snow[i].posX = width * Math.random();
					 snow[i].posY = height * Math.random();
					 snow[i].radius = Math.random()*radius;
					 snow[i].gradAngle = Math.random()*360;
					 snow[i].gradStart = Math.random();
					 snow[i].gradEnd = Math.random();
					 tempVar = Math.random()*velocity;
					 snow[i].velocity = (tempVar<velocity*(2/5))? velocity*(2/5) : tempVar;
				}
			}
			
			function createSnow(snowID){
				ctx.beginPath();
				
				var grd=ctx.createLinearGradient(snow[snowID].posX - snow[snowID].radius*Math.cos(snow[snowID].gradAngle*Math.PI/180),
																					snow[snowID].posY - snow[snowID].radius*Math.sin(snow[snowID].gradAngle*Math.PI/180),
																					snow[snowID].posX + snow[snowID].radius*Math.cos(snow[snowID].gradAngle*Math.PI/180),
																					snow[snowID].posY + snow[snowID].radius*Math.sin(snow[snowID].gradAngle*Math.PI/180)
																					);
				grd.addColorStop(0,"rgba(" + color.r + "," +  color.g + "," + color.b + ", " + snow[snowID].gradStart + ")");
				grd.addColorStop(1,"rgba(" + color.r + "," +  color.g + "," + color.b + ", " + snow[snowID].gradEnd +")");
				
				ctx.arc(snow[snowID].posX, snow[snowID].posY, snow[snowID].radius, 0, 2 * Math.PI, false);
				ctx.fillStyle = grd;
				ctx.fill();
				ctx.closePath();
				
				snow[snowID].posY += snow[snowID].velocity;
				if(snow[snowID].posY > height){
					snow[snowID].posY = height - snow[snowID].posY;
				}
			}
			
			
			function setBackground(){
									
				ctx.clearRect(0, 0, width, height);
				
				for(var i = 0; i < numberOfPoints; i++){
					createSnow(i);
				}

			}
			
			refresh();
			setInterval(setBackground, interval);
	
			$(window).resize(function(){
				refresh();
			})

		
	}
})(jQuery)