let form = document.getElementById('solution-form');

form.onsubmit = function(e) {
	e.preventDefault();
	
	let leftNumber = Math.min(form.leftMark.value, form.rightMark.value);
	let rightNumber = Math.max(form.leftMark.value, form.rightMark.value);

	if (Number.isNaN(leftNumber)) {
		alert("Некорректный ввод. Нужно ввести числа!");
		return;
	}

	let sum = 0, remainder = 0;

	for (let i = leftNumber; i <= rightNumber; i++) {
		remainder = Math.abs(i % 10);
		if ((remainder % 10 == 2) || (remainder % 10 == 3) || (remainder % 10 == 7)) 
			sum += i;		
	}

	document.getElementById('result').innerHTML = 'Результат: ' + sum;
}