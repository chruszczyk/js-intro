
var list = document.getElementById('list'),
	add = document.getElementById('addElem');

add.addEventListener('click', function() {
	var element = document.createElement('li'),
		elementNumber = document.getElementsByTagName('li').length;
	element.innerText = 'item' + elementNumber;
	list.appendChild(element);
});