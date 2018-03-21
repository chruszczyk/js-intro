
function drawTree(h) {
	for (var i = 1; i <= h; i++) {
		var tree = "";
		for (var j = i; j <= h; j++) {
			tree += " ";
		}
		for (var k = 0; k < (i*2)-1; k++) {
			tree += "*";
		}
		console.log(tree);
	}
}

drawTree(5);


function drawTreeBasic(h) {
	for (var i = 0; i < h; i++) {
		var star = "";
		for (var j = 0; j <= i; j++) {
			star += "*";
		}
		console.log(star);
	}
}

drawTreeBasic(6);