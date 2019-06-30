let formTask = document.getElementById('task');

formTask.onsubmit = function(e) {
	e.preventDefault();

	let widthPole = formTask.poleWidth.value;
	let dimensions = formTask.dimensions.value;

	// Get the width and height of the board
	let i = dimensions.indexOf('x');
	let widthBoard = dimensions.substring(0, i);
	let heightBoard = dimensions.substring(i+1);

	if (i < 0 || widthBoard <= 0 || heightBoard <=0) {
		alert('Заданы некорректные размеры доски.');
		return;
	}

	// Ensure that the bottom left corner of the board is black
	let evenColor = 'white';
	let oddColor = 'black';

	if (heightBoard % 2) {
		evenColor = 'black';
		oddColor = 'white';
	}	

	let board = document.getElementById('chessBoard');
	board.innerHTML = '';

	for (let i = 0; i < heightBoard; i++) {
		let row = board.appendChild(document.createElement('div'));
		for (let j = 0; j < widthBoard; j++) {
			row.appendChild(document.createElement('span'));
		}
	}

	let oddPole = document.querySelectorAll('#chessBoard div:nth-child(odd) span:nth-child(even), #chessBoard div:nth-child(even) span:nth-child(odd)');
	let evenPole = document.querySelectorAll('#chessBoard div:nth-child(even) span:nth-child(even), #chessBoard div:nth-child(odd) span:nth-child(odd)');

	for (i = 0; i < oddPole.length; i++) 
		oddPole[i].style.backgroundColor = oddColor;
	for (i = 0; i < evenPole.length; i++)
		evenPole[i].style.backgroundColor = evenColor;

	let pole = document.querySelectorAll('#chessBoard span');
	for (i = 0; i < pole.length; i++) {
		pole[i].style.width = '' + widthPole + 'px';
		pole[i].style.height = '' + widthPole + 'px';
	}
}
