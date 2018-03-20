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

