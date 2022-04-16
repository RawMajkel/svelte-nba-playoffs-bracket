import { v4 as uuidv4 } from 'uuid';
import type { Team } from './team';

export class Conference {
	readonly id: string;
	name: string;
	img: string;
	teams: Team[];

	constructor(name: string, img: string, teams: Team[] = []) {
		this.id = uuidv4();
		this.name = name;
		this.img = img;
		this.teams = teams;
	}
}
