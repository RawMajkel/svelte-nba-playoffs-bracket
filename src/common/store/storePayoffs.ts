import type { storeConference } from './storeConference';

export class storePayoffs {
	name: string;
	west: storeConference;
	east: storeConference;

	constructor(name: string, west: storeConference, east: storeConference) {
		this.name = name;
		this.west = west;
		this.east = east;
	}
}
