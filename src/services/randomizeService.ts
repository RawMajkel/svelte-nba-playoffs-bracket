import { storePlayoffsData, finalsData } from '../stores';

const getRandomResult = () => {
	let result: number[] = [];

	let notWinningResult = Math.floor(Math.random() * 3 + 1);
	let randomIndex = Math.floor(Math.random() * 2);
	let secondIndex = randomIndex === 1 ? 0 : 1;

	result[secondIndex] = 4;
	result[randomIndex] = notWinningResult;

	return result;
};

const randomRound = (quantity: number = 1) => {
	let result = [];

	for (let i = 0; i < quantity; i++) {
		result.push(getRandomResult());
	}

	return result;
};

export const randomizeData = () => {
	storePlayoffsData.update((current) => {
		current.west.firstRound.results = randomRound(4);
		current.west.secondRound.results = randomRound(2);
		current.west.finals.results = randomRound();

		current.east.firstRound.results = randomRound(4);
		current.east.secondRound.results = randomRound(2);
		current.east.finals.results = randomRound();

		return current;
	});

	finalsData.update((current) => {
		current.results = randomRound();

		return current;
	});
};
