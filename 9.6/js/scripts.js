
var list = document.getElementById('list'),
	add = document.getElementById('addElem'),
	listElements = document.getElementsByTagName('li');

add.addEventListener('click', function() {
	var element = document.createElement('li');
	element.innerText = 'item ' + listElements.length;
	list.appendChild(element);
});