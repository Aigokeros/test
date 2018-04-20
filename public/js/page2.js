
var new_data = [];

Array.prototype.remove = function(arguments) {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};

$(document).ajaxStop(function() {
	$('input[type=checkbox]').click(function() {
		if($(this).prop('checked')) {
			if($.inArray($(this).val(),key_grade) == -1 && $(this).val() == "A" || $(this).val() == "B" || $(this).val() == "C" || $(this).val() == "N" || $(this).val() == "P" || $(this).val() == "Z") {
				key_grade.push($(this).val());
				console.log(key_grade);
				if(new_data.length > 0) {
					filter_grade();
				} else {
					filter();
				}
			} else if($.inArray($(this).val(),key_cuisine) == -1) {
				key_cuisine.push($(this).val());
				console.log(key_cuisine);
				if(new_data.length > 0) {
					filter_cuisine();
				} else {
					filter();
				}
			}
		} else {
			key_grade.remove($(this).val());
			key_cuisine.remove($(this).val());
		}
	});
	
	$('form').submit(function() {
		localStorage.setItem('key',$('#search').val());
		window.location = "/filter";
	});
	
	$('.detail').click(function() {
		//var name_box = $(this).eq(0)[0].children[1].children[2].innerHTML;
		//var name_box = $(this).eq(0)[0].children[1].innerHTML;
		console.log($(this).eq(0)[0].children[1]);
		console.log($('.tabsort').eq(2));
		console.log($('.tabsort').eq(2)[0]);
		//localStorage.setItem("name_box",name_box);
		
		if(localStorage.getItem('name_box')) {
		//	window.location = "/list";
		}
	});

});

$('.tabsort').eq(2).click(function() {
		new_data = [];
		$.ajax({
					url : "/finditembyname",
					type : "POST",
					data : {
						name : localStorage.getItem('key'),
						order : -1
					},
					success : function(data) {
						for(var h = 0 ; h < data.length ; h++) {
							new_data.push(data[h]);
						}
					
						input_data();
					}
				})
	});
	
	$('.tabsort').eq(1).click(function() {
		new_data = [];
		$.ajax({
					url : "/finditembyname",
					type : "POST",
					data : {
						name : localStorage.getItem('key'),
						order : 1
					},
					success : function(data) {
						for(var h = 0 ; h < data.length ; h++) {
							new_data.push(data[h]);
						}
					
						input_data();
					}
				})
	});

function filter() {
	$('.box_detail').html("");
	if(new_data.length <= 0) {
		for(var i = 0 ; i < data_local.length ; i++) {
			if(key_grade.length > 0) {
				for(var j = 0 ; j < key_grade.length ; j++) {
					if(data_local[i].grade == key_grade[j]) {
						new_data.push(data_local[i]);
					}
				}
			}
			if(key_cuisine.length > 0) {
				for(var j = 0 ; j < key_cuisine.length ; j++) {
					if(data_local[i].cuisine == key_cuisine[j]) {
						new_data.push(data_local[i]);
					}
				}
			}
		}
		console.log(new_data.length);
	}
	
	input_data();
	
}
function filter_cuisine() {
	var new_data1 = new_data;
	new_data = [];
	for(var i = 0 ; i < new_data1.length ; i++) {
		for(var j = 0 ; j < key_cuisine.length ; j++) {
			if(new_data1[i].cuisine == key_cuisine[j]) {
				new_data.push(new_data1[i]);
			}
		}
	}
}

function filter_grade() {
	var new_data1 = new_data;
	new_data = [];
	for(var i = 0 ; i < new_data1.length ; i++) {
		for(var j = 0 ; j < key_grade.length ; j++) {
			if(new_data1[i].grade == key_grade[j]) {
				new_data.push(new_data1[i]);
			}
		}
	}
}

function input_data() {
	$('.box_detail').html("");
	var mes = "";
	for(var i = 0 ; i < new_data.length ; i++) {
		mes += `<div class="detail">
				<div class="image"></div>
				<div class="text">
						<span class="txt_grade">Grade : ` + new_data[i].grade + `</span><br>
						<span class="txt_name">` + new_data[i].name + `</span><br>
						<span class="txt_cuisine">` + new_data[i].cuisine + `</span><br>
						<span class="txt_lo">` + new_data[i].address.building + ` / `+ new_data[i].address.street + `</span>
					</div>
				</div>`;
	}
	$('.box_detail').html(mes);
}