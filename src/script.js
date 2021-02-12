$(function() {
				var heart = Snap('#heart'),
						body = heart.select('#body'),
						mask = heart.select('.mask'),
						mouth = heart.select('.mouth'),
            h2 = $('h2');
				$('#heart').on('click', function(){
					body.animate({
						d: "M248.3,112c0,28-28.5,93.5-40,103.7c-14.2,12.6-34.7,47.5-58.3,47.5c-24.8,0-42.1-35.2-56.3-50c-10.3-10.8-44-73.5-44-99.8c0-62.5,100.3-6.7,100.3-6.7S248.3,49.5,248.3,112z"
					}, 500);
					mouth.animate({ 
						d: "M117.1,208.4c0,0,32.8,44.3,69.8,8.9C186.9,217.2,166.3,221.7,117.1,208.4z"
					}, 500);					
					mask.animate({
						opacity: 1
					}, 800, function(){
             h2.slideDown(1000);
          });
        });
});