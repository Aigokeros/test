
var content = "<ul>";
var h_p = 0;
for(var i=0; i<10 ;i++){
	content += `<li>
					<img src= "images/company/factory.png" />
				</li>`
}

content += "</ul>";

$(".product_history > .history").html(content);


function scroll_history(vector){
   // var width = $('.product_history > .history > ul')[0].scrollWidth;
   var width = ($('.history > ul > li').length-4) * $('.history > ul > li').outerWidth(true); // -4 คือเราโชว์ 4 รูป เราเลื่อนอีก 6 รูป
    if(vector>0){
        h_p += $('.history > ul > li').outerWidth(true);
    }else{
        h_p -= $('.history > ul > li').outerWidth(true);
    }

    if(h_p > width){
        h_p = width;
        $('#test').html('in here');
    }else if(h_p < 0){
        h_p = 0;
    }
    $('.product_history > .history > ul').animate({scrollLeft:h_p});
    $('#test').html(h_p);
}