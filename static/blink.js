/*$(function() {
	var state = true;
	$( ".red" ).click(function() {
	  if ( state ) {
		$( ".red" ).animate({
		  boxShadow: '0 4px #ab3c3c'
		}, 200 );
	  } else {
		$( ".red" ).animate({
		  boxShadow: '0 0 12px 12px #ab3c3c'
		}, 200 );
	  }
	  state = !state;
	});
}); */

/*$(document).ready(function(){
	$( "#red") .everyTime ( 30, function (){
		$("#red") .animate ({boxShadow:"0 4px #ab3c3c" }, 400 ).animate ({top:"0 0 12px 12px #ab3c3c" }, 370 );
	});
}) */



$(function() {
	var state = true;
	$( "#yellow1" ).click(function() {
	  if ( !state ) {
		$( "#yellow1" ).animate({
		  boxShadow: '0 4px #f29e0d'
		}, 200 );
	  } else {
		$( "#yellow1" ).animate({
		  boxShadow: '0 0 12px 12px #f29e0d'
		}, 200 );
	  }
	  state = !state;
	});
});

$(function() {
	var state = true;
	$( "#yellow2" ).click(function() {
	  if ( !state ) {
		$( "#yellow2" ).animate({
		  boxShadow: '0 4px #f29e0d'
		}, 200 );
	  } else {
		$( "#yellow2" ).animate({
		  boxShadow: '0 0 12px 12px #f29e0d'
		}, 200 );
	  }
	  state = !state;
	});
});

$(function() {
	var state = true;
	$( "#green1" ).click(function() {
	  if ( !state ) {
		$( "#green1" ).animate({
		  boxShadow: '0 4px #24b662'
		}, 200 );
	  } else {
		$( "#green1" ).animate({
		  boxShadow: '0 0 12px 12px #24b662'
		}, 200 );
	  }
	  state = !state;
	});
});

$(function() {
	var state = true;
	$( "#green2" ).click(function() {
	  if ( !state ) {
		$( "#green2" ).animate({
		  boxShadow: '0 4px #24b662'
		}, 200 );
	  } else {
		$( "#green2" ).animate({
		  boxShadow: '0 0 12px 12px #24b662'
		}, 200 );
	  }
	  state = !state;
	});
});