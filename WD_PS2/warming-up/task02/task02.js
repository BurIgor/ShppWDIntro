let formTask1 = document.getElementById('task1');
let formTask2 = document.getElementById('task2');
let seconds = 0;
let hh = mm = ss = 0;

formTask1.onsubmit = function(e) {
	e.preventDefault();

	seconds = formTask1.seconds.value;

	hh = Math.floor(seconds / 3600);
	seconds -= hh * 3600;
	mm = Math.floor(seconds / 60);
	seconds -= mm * 60;
	ss = seconds;

	let strResult = '   Результат: ' + (hh < 10 ? '0' : '') + hh + ':'
			+ (mm < 10 ? '0' : '') + mm + ':'
			+ (ss < 10 ? '0' : '') + ss;
	
	document.getElementById('result-time').innerHTML = strResult;
}

formTask2.onsubmit = function(e) {
	e.preventDefault();

	let time = formTask2.time.value;
	
	if (time.search(/\d:\d{2}:\d{2}/) == -1) {
		alert('Вы должны ввести выражение в формате "12:34:56"');
		return;
	}

	let hhmmss = time.split(':');

	seconds = 0;
	for (let i = 0, j = 3600; i < 3; i++) {
		seconds += hhmmss[i] * j;
		j /= 60;
	}

	document.getElementById('result-seconds').innerHTML = '   Результат: ' + seconds;
}