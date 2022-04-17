import { v4 as uuidv4 } from 'uuid';
import type { matchupTeam } from './matchupTeam';

export class matchup {
	id: string;
	higherTeam: matchupTeam;
	lowerTeam: matchupTeam;
	isTbd: boolean;

	constructor(
		incomingTeamOne: matchupTeam,
		incomingTeamTwo: matchupTeam,
		results: number[] = [0, 0]
	) {
		this.id = uuidv4();
		this.validate(results);

		if (incomingTeamOne.teamSeed < incomingTeamTwo.teamSeed) {
			this.higherTeam = incomingTeamOne;
			this.lowerTeam = incomingTeamTwo;
		} else {
			this.higherTeam = incomingTeamTwo;
			this.lowerTeam = incomingTeamOne;
		}
	}

	setResults(results: number[]) {
		this.validate(results);

		this.higherTeam.setWins(results[0]);
		this.lowerTeam.setWins(results[1]);
	}

	resetWins() {
		this.higherTeam.resetWins();
		this.lowerTeam.resetWins();
	}

	private validate(results: number[]) {
		if (results[0] == 4 && results[1] == 4) {
			throw new Error('Results cannot be equal 4 at the same time');
		}

		results.forEach((el) => {
			if (el > 4) {
				throw new Error('Result cannot be higher than 4');
			} else if (el < 0) {
				throw new Error('Result cannot be less than 0');
			}
		});
	}
}
