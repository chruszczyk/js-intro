// 9.3
var text = "Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.";
var dinosaur = "triceratops";
var dinosaurUpper = dinosaur.toUpperCase();
var textReplaced = text.replace("Velociraptor", dinosaurUpper);

console.log(text);
console.log(textReplaced.slice(0, textReplaced.length / 2));