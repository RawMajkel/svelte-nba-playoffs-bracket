import type { storeTeam } from '../common/store/storeTeam';
import type { storeConference } from '../common/store/storeConference';
import type { storeRound } from '../common/store/storeRound';
import { round } from '../common/round';
import { matchup } from '../common/matchup';
import { get } from 'svelte/store';
import { tbd } from '../stores';
import { confRounds } from '../common/confRounds';

const tbdTeam = get(tbd);

const getSortedTeamIds = (unsortedTeams: storeTeam[]): string[] => {
	let result: string[] = [];

	const sorted = sortPlayoffStandings(unsortedTeams);
	sorted.forEach((team) => result.push(team.id));

	return result;
};

const sortPlayoffStandings = (unsortedTeams: storeTeam[]) => {
	let result = [...unsortedTeams];

	[result[1], result[2], result[3], result[7]] = [result[7], result[3], result[2], result[1]];
	[result[3], result[4], result[6], result[7]] = [result[4], result[3], result[7], result[6]];

	return result;
};

const createRound = (storeRound: storeRound, sortedTeams: string[]) => {
	const matchups = createMatchups(sortedTeams, storeRound.results);
	return new round(storeRound.name, storeRound.altName, matchups);
};

const createMatchups = (roundTeams: string[], results: number[][]): matchup[] => {
	let result: matchup[] = [];

	for (let i = 0, j = 0; i < roundTeams.length; i++) {
		if (i % 2 !== 0) continue;

		const newMatchup = new matchup(roundTeams[i], roundTeams[i + 1], results[j]);
		result = [...result, newMatchup];
		j++;
	}

	return result;
};

const getWinners = (round: round): string[] => {
	let winners: string[] = [];

	round.matchups.forEach((matchup) => {
		if (matchup.results[0] === 4) {
			winners.push(matchup.firstTeamId);
		} else if (matchup.results[1] === 4) {
			winners.push(matchup.secondTeamId);
		} else {
			winners.push(tbdTeam.id);
		}
	});

	return winners;
};

export const createConferenceMatchups = (conference: storeConference): confRounds => {
	const sortedTeams = getSortedTeamIds(conference.teams);

	const firstRound = createRound(conference.firstRound, sortedTeams);
	const firstRoundTeams = getWinners(firstRound);

	const secondRound = createRound(conference.secondRound, firstRoundTeams);
	const secoundRoundWinners = getWinners(secondRound);

	const thirdRound = createRound(conference.finals, secoundRoundWinners);
	const winners = getWinners(thirdRound);

	return new confRounds(firstRound, secondRound, thirdRound, winners[0]);
};
