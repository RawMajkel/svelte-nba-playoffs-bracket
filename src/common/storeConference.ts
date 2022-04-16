import type { storeRound } from './storeRound';
import type { storeTeam } from './storeTeam';

export class storeConference {
	name: string;
	altName: string;
	teams: storeTeam[];
	firstRound: storeRound;
	secondRound: storeRound;
	finals: storeRound;
	finalistWins: number;

	constructor(
		name: string,
		altName: string,
		teams: storeTeam[],
		firstRound: storeRound,
		secondRound: storeRound,
		finals: storeRound,
		finalistWins: number
	) {
		if (teams.length != 8) {
			throw new Error('Playoff teams must equal 8 for each conference');
		}

		this.name = name;
		this.altName = altName;
		this.teams = teams;
		this.firstRound = firstRound;
		this.secondRound = secondRound;
		this.finals = finals;
		this.finalistWins = finalistWins;
	}
}
