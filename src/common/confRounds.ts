// import { v4 as uuidv4 } from 'uuid';
import type { round } from './round';

export class confRounds {
	// id: string;
	firstRound: round;
	secondRound: round;
	thirdRound: round;

	constructor(firstRound: round, secondRound: round, thirdRound: round) {
		// this.id = uuidv4();
		this.firstRound = firstRound;
		this.secondRound = secondRound;
		this.thirdRound = thirdRound;
	}
}
