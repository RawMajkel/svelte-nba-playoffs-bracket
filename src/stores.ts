import { readable } from 'svelte/store';
import { storeTeam } from './common/store/storeTeam';
import { storeConference } from './common/store/storeConference';
import { storePayoffs } from './common/store/storePayoffs';
import { storeRound } from './common/store/storeRound';

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
		[1, 4],
		[4, 2],
		[4, 3],
		[3, 3]
	]),
	new storeRound('Second round', 'Conference Semifinals', [
		[4, 0],
		[0, 0]
	]),
	new storeRound('Semifinals', 'Conference finals', [[0, 0]]),
	0
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
		[0, 4],
		[4, 0]
	]),
	new storeRound('Semifinals', 'Conference finals', [[0, 0]]),
	0
);

const playoffs = new storePayoffs('NBA 2022 Playoffs', west, east);

export const storePlayoffsData = readable(playoffs);
export const tbd = readable(new storeTeam(0, 'TBD', 'TBD', 'TBD', 'nba'));
