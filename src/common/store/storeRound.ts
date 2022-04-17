export class storeRound {
	name: string;
	altName: string;
	results: [number, number][];

	constructor(name: string, altName: string, results: [number, number][]) {
		this.name = name;
		this.altName = altName;
		this.results = results;
	}
}
