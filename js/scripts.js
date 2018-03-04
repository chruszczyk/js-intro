// 9.2

var femaleNames = ['Ala', 'Aga', 'Klaudia', 'Marta', 'Klara'];
var maleNames = ['Michał', 'Łukasz', 'Mateusz', 'Adam', 'Piotr'];

var allNames = femaleNames.concat(maleNames);
console.log(allNames);

var newName = 'Tomek';
if (allNames.indexOf(newName) === -1) {
	allNames.push(newName);
}
console.log(allNames);


/* 9.1

function getTriangleArea(a, h) {
	if (a > 0 && h > 0) {
		return a * h / 2;
	}
	else {
		return "Nieprawidłowe dane";
	}
}

console.log(getTriangleArea(10, 6));

var triangle1Area = getTriangleArea(3, 4);
var triangle2Area = getTriangleArea(8, 17);
var triangle3Area = getTriangleArea(10, 7);
*/
