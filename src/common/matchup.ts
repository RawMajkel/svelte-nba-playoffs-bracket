import { v4 as uuidv4 } from 'uuid';
import type { Team } from './team';

export class Matchup {
	readonly id: string;
	higherTeam: Team;
	lowerTeam: Team;

	constructor(incomingTeamOne: Team, incomingTeamTwo: Team) {
		this.id = uuidv4();

		if (incomingTeamOne.seed < incomingTeamTwo.seed) {
			this.higherTeam = incomingTeamOne;
			this.lowerTeam = incomingTeamTwo;
		} else {
			this.higherTeam = incomingTeamTwo;
			this.lowerTeam = incomingTeamOne;
		}
	}
}
