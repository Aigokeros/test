$('div.header_bottom div ul.menu li:eq(0)').hover(function() {
	$(".sub_menu_item").css("display","block");
}).on("mouseleave", function(){
	$(".sub_menu_item").css("display","none");
});

function balloonIn(x){
	
	//$(".right_bar ul li .balloon").eq(x).show();
	//$(".right_bar ul li .balloon").eq(x).css('opacity','0');
	$(".right_bar ul li .balloon").eq(x).css('display','block');
	$(".right_bar ul li .balloon").eq(x).animate({
		   right: '40px',
		   opacity: '1',
	});
}


function balloonOut(x){
	$(".right_bar ul li .balloon").eq(x).finish(); // ถ้าไม่มีเหมือนมันยังเซ็ตไม่เสร็จ
	$(".right_bar ul li .balloon").eq(x).hide();
	$(".right_bar ul li .balloon").eq(x).css('left','auto').css('right','80px').css('opacity','0');
	/*$(".right_bar ul li .balloon").eq(x).stop().animate({
		   opacity: '0',
		   right: '80px',
	});*/
}

//---------- menu lock --------
var head_nav_top = $('.header_bottom').offset().top;

$(window).scroll(function(){
		var scrollTop = $(this).scrollTop();
		if(scrollTop >= head_nav_top){
			$('.header_bottom').addClass('menu_top_fix');
		}else{
			$('.header_bottom').removeClass('menu_top_fix');
		}

		if($(window).scrollTop() == 0 ){
			clearInterval(scroll_to_top);
		}
		$('#test').html($(window).scrollTop());
})
//---------- end menu lock -------------

//---------- back to top ----------------
var scroll_to_top;
$('#back_2_top').click(function(){
	//$(window).scrollTop(0);
	 scroll_to_top = setInterval(function(){
		scroll();
	}, 10);
})

function scroll(){
	$(window).scrollTop($(window).scrollTop()-120);
	
}

//---------- end back to top ----------------

//---------- conversation -------------------




function startConv(){
	if('recognition' in window || "webkitSpeechRecognition" in window){
		var recognition = new webkitSpeechRecognition();
		recognition.continuous = true;
		recognition.interimResults = true;
		recognition.lang = 'th-TH'
		recognition.maxAlternatives = 1;
		recognition.start();
		
		var finalTranscripts = '';
		recognition.onspeechend = function(){
			recognition.stop(true);
			//alert("stop now!");
		}
		var interimTranscripts = '';
		recognition.onresult = function(event){
			var interimTranscripts = '';
			for(var i=0; i < event.results.length; i++){
				var transcript = event.results[i][0].transcript;
				transcript.replace("\n", "<br>");
				if(event.results[i].isFinal){
					finalTranscripts += transcript;
				}else{
					interimTranscripts += transcript;
				}
			}
			$("div.middle input[type=text][name=search]").val(interimTranscripts);
			//console.log(event.results);
		
		};
		recognition.onerror = function(event){

		}
	}else{
		var er = "please, upgrade your browser.";
		$("div.middle input[type=text][name=search]").val(er);
	}
}
//---------- end conversation ---------------

/*if (performance.navigation.type  == performance.navigation.TYPE_RELOAD) {
	recognition.stop();
 }*/