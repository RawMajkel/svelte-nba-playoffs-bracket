import { v4 as uuidv4 } from 'uuid';
import type { Team } from './team';

export class Conference {
	readonly id: string;
	name: string;
	fullName: string;
	teams: Team[];

	constructor(name: string, fullName: string, teams: Team[] = []) {
		if (teams.length != 8) {
			throw new Error('Playoff teams must equal 8 for each conference');
		}

		this.id = uuidv4();
		this.name = name;
		this.fullName = fullName;
		this.teams = teams;
	}
}
