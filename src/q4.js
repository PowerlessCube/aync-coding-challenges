// (#Q4) Print numbers from 1 to 10 with delay of 1 second between each value being printed using setInterval
const oneToTenWithSetInterval = () => {
	let count = 1;
	const start = setInterval(() => console.log(count++), 1000);
	setTimeout(() => clearInterval(start), 11000);
};

oneToTenWithSetInterval();
