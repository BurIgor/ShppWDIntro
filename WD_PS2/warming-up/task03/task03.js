let formTask = document.getElementById('task');

formTask.onsubmit = function(e) {
	e.preventDefault();

	let date1 = formTask.date1.value;
	let date2 = formTask.date2.value;

	/* Determine the order of dates */
	if (date1 > date2) {
		let dateTemp = date1;
		date1 = date2;
		date2 = dateTemp;
	}

	let dateLess = [], dateMore = [], difference = [];
	let term = ['second', 'minute', 'hour', 'day', 'month', 'year'];

	parcingDate(date1, dateLess);
	parcingDate(date2, dateMore);

	/* Calculate the difference between dates */
	for (let i = 0; i < 6; i++) {
		console.log(dateLess[i]);

		/* Check the ratio of date parts */
		if (dateLess[i] > dateMore[i]) {
			switch (i) {
				case 0:  // seconds
				case 1:  // minutes
					dateMore[i] += 60;
					dateMore[i+1]--;
					break;
				case 2:  // hours
					dateMore[i] += 24;
					dateMore[i+1]--;
					break;
				case 3:  // days
					let m = dateMore[i+1];
					dateMore[i] += 31 - ((m == 4) || (m == 6) || (m == 9) || (m == 11) ? 1 : (m == 2 ? 3 : 0));
					dateMore[i+1]--;
					break;
				case 4:  // months
					dateMore[i] += 12;
					dateMore[i+1]--;
					break;
			}
		}

		difference[i] = dateMore[i] - dateLess[i];
	}

	let answer = 'Между датами: ';
	for (i = 5; i >=0 ; i--) {
		answer += difference[i] + ' ' + term[i] + (difference[i] > 1 ? 's' : '') + (i > 0 ? ', ' : '');
	}

	document.getElementById('result').innerHTML = answer;	
}

function parcingDate(date, parseDate) {

	parseDate.push(0); //seconds
	parseDate.push(+date.substring(14)); // minutes
	parseDate.push(+date.substring(11, 13)); // hours
	parseDate.push(+date.substring(8, 10)); //  days
	parseDate.push(+date.substring(5, 7)); // months
	parseDate.push(+date.substring(0, 4)); // years

}