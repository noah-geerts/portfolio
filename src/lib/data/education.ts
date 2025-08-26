import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'BSc Honours of Computer Science',
		description: '',
		location: 'British Columbia, Canada',
		logo: Assets.UBC,
		name: '',
		organization: 'UBC',
		period: { from: new Date(2021, 10, 7), to: new Date(2025, 4, 30) },
		shortDescription: '',
		slug: 'ubc-education-item',
		subjects: ['Data structure and algorithms', 'Java', 'Python', 'C++', 'Databases', 'Software development', 'Frontend', 'Backend', 'Mathematics', 'Physics']
	},
	{
		degree: 'Exchange Program - Computer Science',
		description: '',
		location: 'London, United Kingdom',
		logo: Assets.UCL,
		name: '',
		organization: 'UCL',
		period: { from: new Date(2023, 10, 25), to: new Date(2024, 1, 5) },
		shortDescription: '',
		slug: 'ucl-education-item',
		subjects: ['Software development', 'Computer graphics', 'Machine learning', 'Image processing']
	},
];

export const title = 'Education';
