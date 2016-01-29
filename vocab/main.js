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
	options[ans].style.color = 'white';
	if (id != ans) {
		options[id].style.backgroundColor = red;
		options[id].style.color = 'white';
	}
	setTimeout(makeQuestion, 900);
}

function makeQuestion(){
	var q = Math.floor(Math.random() * vocaNum);
	question.innerHTML = book[q].en;
	ans = Math.floor(Math.random() * 4 + 1);

	var used = [];
	for (var i = 0; i < vocaNum; i++)
		used[i] = 0;

	var fIndex;
	for (var i = 1; i <= 4; i++){
		if (i == ans)
			options[i].innerHTML = book[q].ch;
		else {
			fIndex = Math.floor(Math.random() * vocaNum);
			while (fIndex == q || used[fIndex] == 1)
				fIndex = Math.floor(Math.random() * vocaNum);
			used[fIndex] = 1;
			options[i].innerHTML = book[fIndex].ch;
		}
		options[i].style.backgroundColor = null;
		options[i].style.color = null;
	}
}