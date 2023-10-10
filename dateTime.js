function formatEpochTime(epochTime) {
	let date = new Date(epochTime * 1000);
	const offset = (date.getTimezoneOffset() / 60);
	date.setHours(date.getHours()+5-offset)
	return date.toLocaleString([],{hour: "2-digit", minute:'2-digit'})
}

function fromatShortDateMonthTime(epochTime) {
	let date = new Date(epochTime * 1000);
	const offset = (date.getTimezoneOffset() / 60);
	date.setHours(date.getHours()+5-offset)
	return (date.toLocaleString([],{weekday: "short", month:'short', day:'numeric'}))
}

function fromatDateMonthTime(epochTime) {
	let date = new Date(epochTime * 1000);
	const offset = (date.getTimezoneOffset() / 60);
	date.setHours(date.getHours()+5-offset)
	return (date.toLocaleString([],{weekday: "long", month:'long', day:'numeric'}))
}

function updateClassDate() {
	const classDateElements = document.querySelectorAll('.dateTime');

	classDateElements.forEach((element) => {
		const epochTime = parseInt(element.textContent);
		if (!isNaN(epochTime)) {
			element.textContent = formatEpochTime(epochTime);
		}
	});

	const classDateYYElements = document.querySelectorAll('.date');

	classDateYYElements.forEach((element) => {
		const epochTime = parseInt(element.textContent);
		if (!isNaN(epochTime)) {
			element.textContent = fromatDateMonthTime(epochTime);
		}
	});
	
	const classDateShortElements = document.querySelectorAll('.dateShort');

	classDateShortElements.forEach((element) => {
		const epochTime = parseInt(element.textContent);
		if (!isNaN(epochTime)) {
			element.textContent = fromatShortDateMonthTime(epochTime);
		}
	});
}


document.addEventListener('DOMContentLoaded', updateClassDate);
