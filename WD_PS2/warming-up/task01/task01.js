let form = document.getElementById('solution-form');
form.onsubmit = function(e) {
	e.preventDefault();
	console.log(form.leftMark.value);
}
// console.log(form);
// let leftMark = document.getElementById('leftMark').value;
// console.log(leftMark);
// let rightMark = document.getElementById('rightMark')
// console.log(rightMark);