var hot_deal_detail =  [
						{"src": "p1.png","name":"BIOTHERM_Life_Plankton_Mask","price":"199","sale":"399"},
						{"src": "p4.png","name":"Kohaku_Hada_Face_Lotion_Refreshing","price":"460","sale":"480"},
						{"src": "p6.png","name":"LoveLuv-M_SUIT_All_-In_-One_Essense_100_ml","price":"500","sale":"2490"},
						{"src": "p2.png","name":"BK_Acne_Mask","price":"288","sale":"689"}
					];

				
var content = "<ul>";
for(var i=0; i<4 ;i++){
	content += 	`<li> 
						<div> <img  src = "images/fake/`+hot_deal_detail[i].src+`"/> </div>
						<div class = "item"> 
							<p>`+ hot_deal_detail[i].name + `</p>
							<p style = 'text-decoration:line-through;'>`+hot_deal_detail[i].sale + `</p>
							<span>`+ hot_deal_detail[i].price +`</span>
							<div class = "shopping"> ช๊อบเลย </div>
						</div>
					</li>`
}

content += `	<span id = "left" onclick="scroll_hotdeal(-1)"> < </span>
<span id = "right" onclick="scroll_hotdeal(1)"> > </span> </ul>`;

$('div.hot_deal div.content ').html(content);

var cuisine = [];
			var data_local = [];
			var key_grade = [];
			var key_cuisine = [];
		
			$.ajax({
			url : "/findHotdeal",
			type : "POST",
			data : {},
			cache : false,
			crossDomain : true,
			success : function(data) {
				var mes = "";
				for(var i = 0 ; i < data.length ; i++) {
					data_local.push(data[i]);
					if($.inArray(data[i].cuisine,cuisine) == -1) {
						cuisine.push(data[i].cuisine);
						key_cuisine.push(data[i].cuisine);
					}
					if($.inArray(data[i].grade,key_grade) == -1) {
						key_grade.push(data[i].grade);
					}
					mes += `<div class="detail">
							<div class="image"></div>
							<div class="text">
									<span class="txt_grade"> Grade : ` + data[i].grade + `</span><br>
									<span class="txt_name">` + data[i].name + `</span><br>
									<span class="txt_cuisine">` + data[i].cuisine + `</span><br>
									<span class="txt_lo">` + data[i].address.building + ` / `+ data[i].address.street + `</span>
								</div>
							</div>`;
				}
				console.log(key_cuisine);
				$('.box_detail').html(mes);
				$('#keyword').html(localStorage.getItem('key'));
				$('#result').html(data.length);
				var mes1 = "";
				for(var j = 0 ; j < cuisine.length ; j++) {
					mes1 += `<div class="input_box">
                            <div class="box"></div>
                            <input type="checkbox" name="`+cuisine[j]+`" id="`+cuisine[j]+`" value="`+cuisine[j]+`">
                           <label for="`+cuisine[j]+`">`+cuisine[j]+`</label>
                        </div>`;
				}
				var d = document.getElementsByClassName('select_cuisine');
				d[0].getElementsByClassName('col_left')[0].innerHTML = mes1;
			}
			
		})