// import { v4 as uuidv4 } from 'uuid';

export class matchup {
	// id: string;
	firstTeamId: string;
	secondTeamId: string;
	results: number[] = [0, 0];

	constructor(firstTeamId: string, secondTeamId: string, results: number[]) {
		// this.id = uuidv4();
		this.firstTeamId = firstTeamId;
		this.secondTeamId = secondTeamId;

		this.setResults(results);
	}

	setResults(results: number[]) {
		this.validateResults(results);

		this.results[0] = results[0];
		this.results[1] = results[1];
	}

	private validateResults(results: number[]) {
		if (results.length !== 2) {
			throw new Error('Results msut be 2 length');
		}

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
