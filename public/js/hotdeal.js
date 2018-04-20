var content = "<ul>";
for(var i=0; i<4 ;i++){
	content += 	`<li> 
						<div> <img  src = "images/bestSeller/goods.png"/> </div>
						<div class = "item"> 
							<p> ชื่อสินค้า </p>
							<p> ราคา </p>
							<div class = "shopping"> ช๊อบเลย </div>
						</div>
					</li>`
}

content += `<span class = "show_all"> </span> </ul>`;

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