import type { matchup } from './matchup';

export class round {
	name: string;
	altName: string;
	matchups: matchup[];

	constructor(name: string, altName: string, matchups: matchup[]) {
		this.name = name;
		this.altName = altName;
		this.matchups = matchups;
	}
}
