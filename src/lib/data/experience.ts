import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'tm-network-cto',
		company: 'TM Network Inc.',
		description:
			"TM Network Inc. started with EasyEats, a mobile nutrition platform created to help people achieve their health and fitness goals through personalized diets and gamified accountability. While developing EasyEats, my cofounder and I realized that even with positive UI feedback, we hadn't truly validated whether we were solving a pressing problem for our users. This experience taught us the value of deep customer understanding and led us to pivot toward a mission closer to our own experiences: helping university students study more effectively, particularly in courses where practice materials are limited and difficult to find.\n\nWith this new direction, we began by interviewing nearly 100 UBC students to understand their pain points and validate assumptions about their study needs. Recognizing that professors are key players in the learning process, we are also conducting interviews with faculty to explore how they might integrate with our solution and support student success.\n\nAs founder and CTO, I lead both the business and development sides of TM Network:\n\nCustomer Discovery & Business Strategy: Conduct interviews with students and professors to validate assumptions, identify pain points, and refine our business model. Collaborate with my cofounder to adjust the company direction based on these insights.\n\nProduct Design & Development: Design solutions to address validated student problems and lead full-stack development from concept to deployment. Previously developed EasyEats with React Native, Express, Firebase, and Stripe, deploying multiple beta versions to TestFlight and Google Play.",
		contract: ContractType.SelfEmployed,
		type: 'Technology & Business',
		location: 'Kelowna, British Columbia, Canada',
		period: { from: new Date(2024, 5, 1), to: new Date(2025, 8, 25) },
		skills: getSkills(
			'react-native',
			'express',
			'nodejs',
			'oauth2',
			'firebase',
			'python',
			'expo',
			'ts',
			'js',
			'aws',
			'system-design'
		),
		name: 'Chief Technology Officer',
		color: 'blue',
		links: [
			{
				to: 'https://www.linkedin.com/company/tm-network-easyeats/posts/?feedView=all',
				label: 'Linkedin',
				newTab: true
			},
			{
				to: 'https://www.dnb.com/business-directory/company-profiles.tm_network_inc.8d4f20dfa819abe29efecd98bd1325fe.html',
				label: 'dun & bradstreet',
				newTab: true
			}
		],
		logo: Assets.TM,
		shortDescription:
			'Founder and CTO leading business strategy and full-stack development for TM Network, pivoting from EasyEats nutrition platform to student study solutions.'
	},
	{
		slug: 'king-taps-porter',
		company: 'King Taps',
		description:
			"As a Porter, I significantly enhanced the bar's efficiency by effectively managing my time and prioritizing tasks, which ensured timely support for bartenders and maintained a clean and organized environment. My strong communication skills allowed me to efficiently communicate with bartenders, allowing us to work together to provide an excellent guest experience.",
		contract: ContractType.Contract,
		type: 'Hospitality',
		location: 'Kelowna, British Columbia, Canada',
		period: { from: new Date(2024, 4, 1), to: new Date(2024, 8, 30) },
		skills: getSkills(),
		name: 'Porter',
		color: 'green',
		links: [{ to: 'https://kingtaps.com/locations/lakeside/', label: 'Website', newTab: true }],
		logo: Assets.KT,
		shortDescription:
			'Enhanced bar efficiency through time management and task prioritization, supporting bartenders and maintaining organized environment.'
	},
	{
		slug: 'king-taps-expeditor',
		company: 'King Taps',
		description:
			'As an Expeditor, I coordinated between the kitchen and service staff to ensure every dish reached the right customer quickly and accurately. I relied on strong communication and organizational skills to anticipate issues, respond immediately when orders were delayed or dropped, and adjust priorities in real time to maintain a seamless dining experience.',
		contract: ContractType.Contract,
		type: 'Hospitality',
		location: 'Kelowna, British Columbia, Canada',
		period: { from: new Date(2023, 4, 1), to: new Date(2023, 7, 31) },
		skills: getSkills(),
		name: 'Expeditor',
		color: 'green',
		links: [{ to: 'https://kingtaps.com/locations/lakeside/', label: 'Website', newTab: true }],
		logo: Assets.KT,
		shortDescription:
			'Coordinated between kitchen and service staff to ensure accurate and timely food delivery, maintaining seamless dining experience.'
	},
	{
		slug: 'michael-kidston-survey',
		company: 'Michael Kidston Land Surveying',
		description:
			'As an Assistant Survey Technician, I collaborated closely with the team to navigate logistical challenges and proactively planned workflows to ensure surveys were completed accurately and efficiently. This experience strengthened my skills in problem-solving, communication, and attention to detail—abilities I carry over to software development.',
		contract: ContractType.Contract,
		type: 'Surveying',
		location: '100 Mile House, British Columbia, Canada',
		period: { from: new Date(2021, 5, 1), to: new Date(2022, 6, 31) },
		skills: getSkills(),
		name: 'Assistant Survey Technician',
		color: 'orange',
		links: [],
		logo: Assets.Unknown,
		shortDescription:
			'Collaborated with team to navigate logistical challenges and plan workflows for accurate and efficient survey completion.'
	}
];

export const title = 'Experience';
