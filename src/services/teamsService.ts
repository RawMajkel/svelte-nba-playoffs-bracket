import type { storeTeam } from '../common/storeTeam';
import type { storeRound } from '../common/storeRound';
import { round } from '../common/round';
import { matchup } from '../common/matchup';
import { matchupTeam } from '../common/matchupTeam';
import { tbd } from '../stores';

const tbdTeam = new matchupTeam(tbd, 0, true);

const createFirstRoundMatchups = (inputTeams: storeTeam[], results: number[][]): matchup[] => {
	let result: matchup[] = [];

	for (let i = 0, j = inputTeams.length - 1; i < inputTeams.length / 2; i++, j--) {
		result.push(new matchup(new matchupTeam(inputTeams[i]), new matchupTeam(inputTeams[j])));
	}

	[result[3], result[1]] = [result[1], result[3]];

	for (let i = 0; i < result.length; i++) {
		result[i].setResults(results[i]);
	}

	return result;
};

const createMatchups = (teams: matchupTeam[], results: number[][]): matchup[] => {
	let data: matchup[] = [];

	for (let i = 0; i < teams.length; i++) {
		if (i % 2 === 0) {
			data.push(new matchup(teams[i], teams[i + 1]));
		}
	}

	for (let i = 0; i < data.length; i++) {
		data[i].setResults(results[i]); // tutaj problem
	}

	return data;
};

const getFirstRoundWinners = (previousRound: round): matchupTeam[] => {
	let result: matchupTeam[] = [];

	previousRound.matchups.forEach((matchup) => {
		if (matchup.higherTeam.wins === 4) {
			result.push(matchup.higherTeam);
		} else if (matchup.lowerTeam.wins === 4) {
			result.push(matchup.lowerTeam);
		} else {
			result.push(tbdTeam);
		}
	});

	return result;
};

export const createFirstRoundData = (inputTeams: storeTeam[], incomingRound: storeRound): round => {
	const matchups = createFirstRoundMatchups(inputTeams, incomingRound.results);
	return new round(incomingRound.name, incomingRound.altName, matchups);
};

export const createSecondRoundData = (firstRound: round, incomingRound: storeRound): round => {
	const firstRoundWinners = getFirstRoundWinners(firstRound);
	const matchups = createMatchups(firstRoundWinners, incomingRound.results);

	return new round(incomingRound.name, incomingRound.altName, matchups);
};

export const createNextRoundData = (previousRound: round, incomingRound: storeRound): round => {
	const firstRoundWinners = getFirstRoundWinners(previousRound);
	const matchups = createMatchups(firstRoundWinners, incomingRound.results);

	let test = new round(incomingRound.name, incomingRound.altName, matchups);
	return test;
};
