import type { round } from './round';

export class confRounds {
	firstRound: round;
	secondRound: round;
	thirdRound: round;
	winnerId: string;

	constructor(firstRound: round, secondRound: round, thirdRound: round, winnerId: string) {
		this.firstRound = firstRound;
		this.secondRound = secondRound;
		this.thirdRound = thirdRound;
		this.winnerId = winnerId;
	}
}
