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

export const conferences = readable(new NbaStore(conferencesData));
