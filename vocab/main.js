var book = JSON.parse(book);
var vocaNum = book.length;

var question = document.getElementById("question");
var options = [];
for (var i = 1; i <= 4; i++)
	options[i] = document.getElementById("option" + i);

makeQuestion();


function pick(id){
	alert("button " + id + " was clicked");
}

function makeQuestion(){
	alert(vocaNum);
	question.innerHTML = book[0].en;
	for (var i = 1; i <= 4; i++)
		options[i].innerHTML = book[i].ch;
}