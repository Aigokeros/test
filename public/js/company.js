var content = "<ul>";

for(var i=0; i<8 ;i++){
	content += `<li>
					<img src= "images/company/factory.png" />
				</li>`
}

content += "</ul>";

$("div.company > div.content").html(content);