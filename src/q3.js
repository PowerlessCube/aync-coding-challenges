// (#Q3) Print numbers from 1 to 10 with delay of 1 second between each value being printed
const oneToTenInSeconds = () => {
	let start = 1,
		end = 10;
	for (let i = 0; i < end; i++) {
		setTimeout(() => console.log(start++), i * 1000);
	}
};

oneToTenInSeconds();
