export class storeFinals {
	name: string;
	altName: string;
	teams: string[] = [];
	results: number[] = [0, 0];

	constructor(name: string, altName: string, results: number[]) {
		this.name = name;
		this.altName = altName;
		this.results = results;
	}
}
