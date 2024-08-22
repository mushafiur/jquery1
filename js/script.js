/* ========== JQ ========== */

$(document).ready(function(){

	// ex1
	// alert("hello");

	// ex2
	// $('button').click(function(){
	// 	alert("Hello world");
	// });

	// ex1
	$('#alert_s').on('click', function(){
		alert("Hello ssb");
	});

	// ex2
	$('#btns').on('click', function(){
		$('#sht').show();
	});
	$('#btnh').on('click', function(){
		$('#sht').hide();
	});
	$('#btnt').on('click', function(){
		$('#sht').toggle();
	});

	// ex3
	$('#btnfo').on('click', function(){
		$('#f_effect').fadeOut();
	});
	$('#btnfi').on('click', function(){
		$('#f_effect').fadeIn();
	});
	$('#btnft').on('click', function(){
		$('#f_effect').fadeToggle();
	});

	// ex4
	$('p').on('click', function(){
		$(this).hide(1000);
	});

	// ex5
	$('.div').css("border", "2px solid red")
	.add('.b_yellow').css("background", "yellow");
	
	// ex6

	$( "#clickme" ).on( "click", function(){
		$('#book').animate({
			opacity: 0.25,
    		height: "toggle"
		},4000);
	});

	// ex7
	$('#animate1_btn').on('click', function(){
		$('#run').animate({
			width: "700px",
			marginLeft: "50px",
			fontSize: "60px",
			borderWidth: "5px"
		});
	});

	// ex8
	$('#left').on('click', function(){
		$('#block').animate({
			"left": "-=50"
		},4000);
	});

	$('#right').on('click', function(){
		$('#block').animate({
			"left": "+=50"
		},4000);
	});

	// ex9

	$( "#go1" ).on( "click", function() {
	  $( "#block1" )
	    .animate({
	      width: "90%"
	    }, {
	      queue: false,
	      duration: 3000
	    })
	    .animate({ fontSize: "24px" }, 1500 )
	    .animate({ borderRightWidth: "15px" }, 1500 );
	});

	$( "#go2" ).on( "click", function() {
	  $( "#block2" )
	    .animate({ width: "90%" }, 1000 )
	    .animate({ fontSize: "24px" }, 1000 )
	    .animate({ borderLeftWidth: "15px" }, 1000 );
	});


	$( "#go3" ).on( "click", function() {
	  $( "#go1" ).add( "#go2" ).trigger( "click" );
	});
	 
	$( "#go4" ).on( "click", function() {
	  $( "div" ).css({
	    width: "",
	    fontSize: "",
	    borderWidth: ""
	  });
	});


	// ex10
	$("#flip").on("click", function(){
	   $("#panel").slideDown("slow");
	});

	// ex11

	$("#flip1").on("click", function(){
    	$("#panel1").slideUp("slow");
  	});

  	// ex12
  	$("#flip2").on("click", function(){
    	$("#panel2").slideToggle("slow");
  	});

  	// ex13

  	$('#animate1_w3').on("click", function(){
  		$('#div_w3').animate({
  			left: "250px"
  		});
  	});

  	// ex14

  	$('#animate2_w3').on("click", function(){
  		$('#div2_w3').animate({
  			left: '250px',
  			opacity: '0.5',
  			width: '250px',
  			height: '250px'
  		});
  	});

  	// ex15

  	  $("#animate3_w3").on("click", function(){
	    var div = $("#div3_w3");
	    div.animate({height: '300px', opacity: '0.4'}, "slow");
	    div.animate({width: '300px', opacity: '0.8'}, "slow");
	    div.animate({height: '100px', opacity: '0.4'}, "slow");
	    div.animate({width: '100px', opacity: '0.8'}, "slow");
	  });

	  // ex16

	  $("#animate4_w3").click(function(){
	    var div = $("#div4_w3");  
	    div.animate({left: '100px'}, "slow");
	    div.animate({fontSize: '3em'}, "slow");
	  });

	  // ex17

	  $("#slide_stop").on('click', function(){
	    $("#slidedown_stop").slideDown(5000);
	  });

	  $("#stop").on('click', function(){
	    $("#slidedown_stop").stop();
	  });

	  // ex18
	  $('#callback').on("click", function(){
	  	$('#callbackContent').hide("slow", function(){
	  		alert("The paragraph is now hidden");
	  	});
	  });

	  // ex19

	  $('#chaining').on("click", function(){
	  	$('#p1').css("color", "red").slideUp(2000).slideDown(2000);
	  });
  	  
  	  // ex20

  	  $('#btn1').on("click", function(){
  	  	alert("HTML: " + $("#s_html").html());
  	  });











 

});