import type { storeTeam } from '../common/store/storeTeam';
import { get } from 'svelte/store';
import { storePlayoffsData, tbd } from '../stores';

const getAllTeams = (): storeTeam[] => {
	let teams: storeTeam[] = [];

	const storeData = get(storePlayoffsData);
	const tbdTeam = get(tbd);

	storeData.west.teams.forEach((team) => teams.push(team));
	storeData.east.teams.forEach((team) => teams.push(team));
	teams.push(tbdTeam);

	return teams;
};

export const getTeamById = (teamId: string): storeTeam => {
	const teams = getAllTeams();
	const result = teams.find((x) => x.id === teamId);

	if (result === undefined) {
		console.error(`Team not found ${teamId}`);
	}

	return result;
};
