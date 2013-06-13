$(document).ready(function(){
	$('#get_color').on('click', function(event){
		event.preventDefault();
		$.post('/color', function(response){
			var obj = JSON.parse(response);
			var cell = obj.cell;
			var color = obj.color;
			$('#color_me li:nth-child('+cell+')').css( "background-color", color);
		});
	});

});