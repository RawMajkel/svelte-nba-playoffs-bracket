import { readable, writable } from 'svelte/store';
import { storeTeam } from './common/store/storeTeam';
import { storeConference } from './common/store/storeConference';
import { storePayoffs } from './common/store/storePayoffs';
import { storeRound } from './common/store/storeRound';
import { storeFinals } from './common/store/storeFinals';

const west = new storeConference(
	'Western',
	'West',
	[
		new storeTeam(1, 'Suns', 'Phoenix', 'PHX'),
		new storeTeam(2, 'Grizzlies', 'Memphis', 'MEM'),
		new storeTeam(3, 'Warriors', 'Golden State', 'GSW', 'warriors'),
		new storeTeam(4, 'Mavericks', 'Dallas', 'DAL'),
		new storeTeam(5, 'Jazz', 'Utah', 'UTA'),
		new storeTeam(6, 'Nuggets', 'Denver', 'DEN'),
		new storeTeam(7, 'Timberwolves', 'Minnesota', 'MIN', 'timberwolves'),
		new storeTeam(8, 'Pelicans', 'New Orleans', 'NOP', 'pelicans')
	],
	new storeRound('First round', '', [
		[4, 2],
		[4, 2],
		[4, 3],
		[3, 4]
	]),
	new storeRound('Second round', 'Conference Semifinals', [
		[4, 0],
		[3, 4]
	]),
	new storeRound('Semifinals', 'Conference finals', [[2, 4]])
);

const east = new storeConference(
	'Eastern',
	'East',
	[
		new storeTeam(1, 'Heat', 'Miami', 'MIA'),
		new storeTeam(2, 'Celtics', 'Boston', 'BOS'),
		new storeTeam(3, 'Bucks', 'Milwaukee', 'MIL'),
		new storeTeam(4, '76ers', 'Philadelphia', 'PHI', '76ers'),
		new storeTeam(5, 'Raptors', 'Toronto', 'TOR'),
		new storeTeam(6, 'Bulls', 'Chicago', 'CHI'),
		new storeTeam(7, 'Nets', 'Brooklyn', 'BKN'),
		new storeTeam(8, 'Hawks', 'Atlanta', 'ATL')
	],
	new storeRound('First round', '', [
		[4, 0],
		[4, 0],
		[0, 4],
		[4, 0]
	]),
	new storeRound('Second round', 'Conference Semifinals', [
		[4, 2],
		[4, 3]
	]),
	new storeRound('Semifinals', 'Conference finals', [[0, 4]])
);

const finals = new storeFinals('Finals', 'NBA Finals', [3, 4]);
const playoffs = new storePayoffs('NBA 2022 Playoffs', west, east);

export const storePlayoffsData = readable(playoffs);
export const tbd = readable(new storeTeam(0, 'TBD', 'TBD', 'TBD', 'nba'));
export const finalsData = writable(finals);
