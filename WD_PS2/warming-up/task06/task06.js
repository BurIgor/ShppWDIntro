let formTask = document.getElementById('task');

formTask.onsubmit = function(e) {
	e.preventDefault();

	const text = formTask.text.value;
	let regular = formTask.regular.value;
	let indReg = '';

	if (regular.search(/^(\/.+\/[img]{0,3})$/) != -1){
		indReg = regular.substring(regular.lastIndexOf('/') + 1);
		regular = regular.substring(1, regular.lastIndexOf('/'));
	}

	if (indReg.search('g') == -1)
		indReg += 'g';		

	document.getElementById('markedText').innerHTML = '<br>' + 
		text.replace(new RegExp(regular, indReg), '<mark>$&</mark>');
}