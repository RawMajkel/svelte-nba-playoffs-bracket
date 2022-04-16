import { readable } from 'svelte/store';
import { Team } from './common/team';
import { Conference } from './common/conference';
import { NbaStore } from './common/nbaStore';

const conferencesData: Conference[] = [
	new Conference('West', 'Western', [
		new Team(1, 'Suns', 'Phoenix', 'PHX'),
		new Team(2, 'Grizzlies', 'Memphis', 'MEM'),
		new Team(3, 'Warriors', 'Golden State', 'GSW', 'warriors'),
		new Team(4, 'Mavericks', 'Dallas', 'DAL'),
		new Team(5, 'Jazz', 'Utah', 'UTA'),
		new Team(6, 'Nuggets', 'Denver', 'DEN'),
		new Team(7, 'Timberwolves', 'Minnesota', 'MIN', 'timberwolves'),
		new Team(8, 'Pelicans', 'New Orleans', 'NOP', 'pelicans')
	]),
	new Conference('East', 'Eastern', [
		new Team(1, 'Heat', 'Miami', 'MIA'),
		new Team(2, 'Celtics', 'Boston', 'BOS'),
		new Team(3, 'Bucks', 'Milwaukee', 'MIL'),
		new Team(4, '76ers', 'Philadelphia', 'PHI', '76ers'),
		new Team(5, 'Raptors', 'Toronto', 'TOR'),
		new Team(6, 'Bulls', 'Chicago', 'CHI'),
		new Team(7, 'Nets', 'Brooklyn', 'BKN'),
		new Team(8, 'Hawks', 'Atlanta', 'ATL')
	])
];

const playoffTree = {
	west: {
		name: 'Western',
		altName: 'West',
		teams: [
			new Team(1, 'Suns', 'Phoenix', 'PHX'),
			new Team(2, 'Grizzlies', 'Memphis', 'MEM'),
			new Team(3, 'Warriors', 'Golden State', 'GSW', 'warriors'),
			new Team(4, 'Mavericks', 'Dallas', 'DAL'),
			new Team(5, 'Jazz', 'Utah', 'UTA'),
			new Team(6, 'Nuggets', 'Denver', 'DEN'),
			new Team(7, 'Timberwolves', 'Minnesota', 'MIN', 'timberwolves'),
			new Team(8, 'Pelicans', 'New Orleans', 'NOP', 'pelicans')
		],
		firstRound: {
			name: 'First round',
			altName: '',
			results: [
				[0, 0],
				[0, 0],
				[0, 0],
				[0, 0]
			]
		},
		secondRound: {
			name: 'Second round',
			altName: 'Conference Semifinals',
			results: [
				[0, 0],
				[0, 0]
			]
		},
		finals: {
			name: 'Second round',
			altName: 'Conference finals',
			results: [[0, 0]]
		}
	},
	east: {
		name: 'Eastern',
		altName: 'East',
		teams: [
			new Team(1, 'Heat', 'Miami', 'MIA'),
			new Team(2, 'Celtics', 'Boston', 'BOS'),
			new Team(3, 'Bucks', 'Milwaukee', 'MIL'),
			new Team(4, '76ers', 'Philadelphia', 'PHI', '76ers'),
			new Team(5, 'Raptors', 'Toronto', 'TOR'),
			new Team(6, 'Bulls', 'Chicago', 'CHI'),
			new Team(7, 'Nets', 'Brooklyn', 'BKN'),
			new Team(8, 'Hawks', 'Atlanta', 'ATL')
		],
		firstRound: {
			name: 'First round',
			altName: '',
			results: [
				[0, 0],
				[0, 0],
				[0, 0],
				[0, 0]
			]
		},
		secondRound: {
			name: 'Second round',
			altName: 'Conference Semifinals',
			results: [
				[0, 0],
				[0, 0]
			]
		},
		finals: {
			name: 'Second round',
			altName: 'Conference finals',
			results: [[0, 0]]
		}
	},
	finals: {
		name: 'Finals',
		altName: 'NBA Finals',
		results: [[0, 0]]
	}
};

export const conferences = readable(new NbaStore(conferencesData));
