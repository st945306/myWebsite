var book = JSON.parse(book);
var vocaNum = book.length;
var green = '#51a351';
var red = '#bd362f';

var question = document.getElementById("question");
var options = [];
for (var i = 1; i <= 4; i++)
	options[i] = document.getElementById("option" + i);

var ans;
makeQuestion();


function pick(id){
//	alert("button " + id + " was clicked");
	options[ans].style.backgroundColor = green;
	if (id != ans)
		options[id].style.backgroundColor = red;
	setTimeout(makeQuestion, 1500);
}

function makeQuestion(){
	question.innerHTML = book[0].en;
	for (var i = 1; i <= 4; i++){
		options[i].innerHTML = book[i].ch;
		options[i].style.backgroundColor = 'white';
	}
	ans = 1;
}