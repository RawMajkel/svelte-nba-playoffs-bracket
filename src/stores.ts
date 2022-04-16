import { readable } from 'svelte/store';
import { Team } from './common/team';
import { Conference } from './common/conference';

const conferencesData: Conference[] = [
	new Conference('west', 'https://via.placeholder.com/300x300', [
		new Team(1, 'lorem ipsum', 'https://via.placeholder.com/150x150'),
		new Team(2, 'lorem ipsum', 'https://via.placeholder.com/150x150'),
		new Team(3, 'lorem ipsum', 'https://via.placeholder.com/150x150'),
		new Team(4, 'lorem ipsum', 'https://via.placeholder.com/150x150'),
		new Team(5, 'lorem ipsum', 'https://via.placeholder.com/150x150'),
		new Team(6, 'lorem ipsum', 'https://via.placeholder.com/150x150'),
		new Team(7, 'lorem ipsum', 'https://via.placeholder.com/150x150'),
		new Team(8, 'lorem ipsum', 'https://via.placeholder.com/150x150')
	]),
	new Conference('east', 'https://via.placeholder.com/300x300', [
		new Team(1, 'lorem ipsum', 'https://via.placeholder.com/150x150'),
		new Team(2, 'lorem ipsum', 'https://via.placeholder.com/150x150'),
		new Team(3, 'lorem ipsum', 'https://via.placeholder.com/150x150'),
		new Team(4, 'lorem ipsum', 'https://via.placeholder.com/150x150'),
		new Team(5, 'lorem ipsum', 'https://via.placeholder.com/150x150'),
		new Team(6, 'lorem ipsum', 'https://via.placeholder.com/150x150'),
		new Team(7, 'lorem ipsum', 'https://via.placeholder.com/150x150'),
		new Team(8, 'lorem ipsum', 'https://via.placeholder.com/150x150')
	])
];

class Store {
	readonly data: Conference[];

	constructor(conferences: Conference[]) {
		this.data = conferences;
	}
}

export const conferences = readable(new Store(conferencesData));
