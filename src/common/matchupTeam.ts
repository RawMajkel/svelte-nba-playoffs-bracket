import type { storeTeam } from './storeTeam';

export class matchupTeam {
	teamName: string;
	teamFullName: string;
	teamSeed: number;
	teamImgPath: string;
	wins: number;
	isTbd: boolean = false;

	constructor(team: storeTeam, wins = 0, isTbd = false) {
		this.wins = wins;

		this.teamName = team.name;
		this.teamFullName = team.fullName;
		this.teamSeed = team.seed;
		this.teamImgPath = team.imgPath;
		this.isTbd = isTbd;
	}

	setWins(wins: number) {
		this.wins = wins;
	}

	resetWins() {
		this.wins = 0;
	}
}
