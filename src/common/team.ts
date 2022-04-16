import { v4 as uuidv4 } from 'uuid';

export class Team {
	id: string;
	seed: number;
	name: string;
	img: string;

	constructor(seed: number, name: string, img: string) {
		this.id = uuidv4();
		this.seed = seed;
		this.name = name;
		this.img = img;
	}
}
