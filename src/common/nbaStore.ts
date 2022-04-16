import type { Conference } from './conference';

export class NbaStore {
	readonly data: Conference[];

	constructor(conferences: Conference[]) {
		if (conferences.length != 2) {
			throw new Error('There must be exactly 2 conferences');
		}

		this.data = conferences;
	}
}
