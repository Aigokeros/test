var content = "<ul>";
for(var i=0; i< 30 ;i++){
	content += 	`<li> 
						<div> <img  src = "images/bestSeller/goods.png"/> </div>
						<div class = "item"> 
							<p> ชื่อสินค้า </p>
							<p> ราคา </p>
							<div class= "bottom"> 
								<span> 1569 </span>
								<div class = "avg_rating"> 
									<fieldset class="rating">
										<input type="radio" id="star5" name="rating" value="5" class="rt" /><label class = "full" for="star5" title="Awesome - 5 stars"></label>
										<input type="radio" id="star4half" name="rating" value="4 and a half" class="rt" /><label class="half" for="star4half" title="Pretty good - 4.5 stars"></label>
										<input type="radio" id="star4" name="rating" value="4" class="rt"/><label class = "full" for="star4" title="Pretty good - 4 stars"></label>
										<input type="radio" id="star3half" name="rating" value="3 and a half " class="rt" /><label class="half" for="star3half" title="Meh - 3.5 stars"></label>
										<input type="radio" id="star3" name="rating" value="3" class="rt"/><label class = "full" for="star3" title="Meh - 3 stars"></label>
										<input type="radio" id="star2half" name="rating" value="2 and a half" class="rt"/><label class="half" for="star2half" title="Kinda bad - 2.5 stars"></label>
										<input type="radio" id="star2" name="rating" value="2" class="rt"/><label class = "full" for="star2" title="Kinda bad - 2 stars"></label>
										<input type="radio" id="star1half" name="rating" value="1 and a half" class="rt"/><label class="half" for="star1half" title="Meh - 1.5 stars"></label>
										<input type="radio" id="star1" name="rating" value="1" class="rt"/><label class = "full" for="star1" title="Sucks big time - 1 star"></label>
										<input type="radio" id="starhalf" name="rating" value="half" class="rt"/><label class="half" for="starhalf" title="Sucks big time - 0.5 stars"></label>
									</fieldset>
									<p class = "avg"> test </p>
								<div>
							</div>
						</div>
					</li>`
}

content += `</ul>`;

$('div.product > div.content ').html(content);

$("input[type=radio][name=rating]").click(function(){
	var count = document.getElementsByName("rating");
	
	var x = document.getElementsByClassName("rating input[type=ratio]").value;
	$(".avg").html(count.length);
	
})