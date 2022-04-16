import type { Team } from './team';

export class MatchupTeam {
	wins: number = 0;

	teamName: string;
	teamFullName: string;
	teamSeed: number;
	teamImgPath: string;

	constructor(team: Team, wins: number = 0) {
		this.wins = wins;

		this.teamName = team.name;
		this.teamFullName = team.fullName;
		this.teamSeed = team.seed;
		this.teamImgPath = team.imgPath;
	}
}
