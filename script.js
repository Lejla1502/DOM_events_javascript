var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var buttonDel=document.getElementsByClassName("del");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value+" "));

	var btnDel=document.createElement("button");
	btnDel.appendChild(document.createTextNode("delete"));

	li.appendChild(btnDel);

	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function delElement(event)
{
	console.log(event.target);
	event.target.parentElement.remove();
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);


for(var i=0;i<buttonDel.length;i++)
	buttonDel[i].addEventListener("click",delElement);
