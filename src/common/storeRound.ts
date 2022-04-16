export class storeRound {
	name: string;
	altName: string;
	results: number[][];

	constructor(name: string, altName: string, results: number[][]) {
		this.name = name;
		this.altName = altName;
		this.results = results;
	}
}
