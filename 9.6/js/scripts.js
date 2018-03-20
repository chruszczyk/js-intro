
var list = document.getElementById('list'),
	add = document.getElementById('addElem'),
	elementNumber = document.getElementsByTagName('li').length;

add.addEventListener('click', function() {
	var element = document.createElement('li');
	element.innerText = 'item' + elementNumber;
	list.appendChild(element);
});