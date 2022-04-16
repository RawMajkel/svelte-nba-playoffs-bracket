import { v4 as uuidv4 } from 'uuid';
import type { Team } from './team';

export class Conference {
	readonly id: string;
	name: string;
	fullName: string;
	teams: Team[];

	constructor(name: string, fullName: string, teams: Team[] = []) {
		this.id = uuidv4();
		this.name = name;
		this.fullName = fullName;
		this.teams = teams;
	}
}
