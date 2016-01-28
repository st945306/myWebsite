var data = JSON.parse(book);

var question = document.getElementById("question");
var options = [];
for (var i = 1; i <= 4; i++)
	options[i] = document.getElementById("option" + i);


question.innerHTML = data[0].en;
for (var i = 1; i <= 4; i++){
	options[i].innerHTML = data[i].ch;
}

function pick(id){
	alert("button " + id + " was clicked");
}