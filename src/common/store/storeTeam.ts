import { v4 as uuidv4 } from 'uuid';

export class storeTeam {
	id: string;
	name: string;
	city: string;
	abbr: string;
	fullName: string;
	seed: number;
	imgPath: string;

	static readonly imgPath: string = 'https://logotyp.us/files';

	constructor(seed: number, name: string, city: string, abbr: string, imgName: string = null) {
		this.id = uuidv4();
		this.fullName = `${city} ${name}`;

		this.seed = seed;
		this.name = name;
		this.abbr = abbr;
		this.city = city;

		let testPath: string = imgName ? imgName : this.fullName.toLowerCase().replace(' ', '-');
		this.imgPath = `${storeTeam.imgPath}/${testPath}.svg`;
	}
}
