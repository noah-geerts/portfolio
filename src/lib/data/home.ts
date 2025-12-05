import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Noah';

export const lastName = 'Geerts';

export const description = 'Full Stack Developer';

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/noah-geerts' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/noahgeerts'
	},
	{
		platform: Platform.Email,
		link: 'noahgeerts@outlook.com'
	}
];

export const skills = getSkills('springboot', 'aws', 'reactjs', 'html');
