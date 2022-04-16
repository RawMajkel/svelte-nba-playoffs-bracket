import { Matchup } from '../common/matchup';
import type { Team } from '../common/team';

export const createMatchups = (inputTeams: Team[]): Matchup[] => {
	let result: Matchup[] = [];

	for (let i = 0, j = inputTeams.length - 1; i < inputTeams.length / 2; i++, j--) {
		result.push(new Matchup(inputTeams[i], inputTeams[j]));
	}

	[result[3], result[1]] = [result[1], result[3]];

	return result;
};
