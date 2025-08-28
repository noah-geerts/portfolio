import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';
import { base } from '$app/paths';

export const items: Array<Project> = [
	{
		slug: 'cpp-nn-library',
		color: '#5e95e3',
		description:
			'Developed a neural network library from scratch to strengthen my understanding of core deep learning concepts, including matrix operations, forward pass, backpropagation, and gradient descent.\n\n**Implementation:** Built support for arbitrary network architectures, 10 activation functions, 5 loss functions, and 1 optimization algorithm, with a modular and easily extendable design.\n\n**Testing:** Wrote comprehensive unit tests using Google Test to ensure correctness and reproducibility.\n\n**Outcome:** Developed a simple, extendable C++ neural network library, intended for further enhancement and use in future projects and experiments as I deepen my machine learning expertise.',
		shortDescription:
			'C++ neural network library with matrix operations, backpropagation, and gradient descent.',
		links: [{ to: 'https://github.com/noah-geerts/simplenn', label: 'GitHub Repo' }],
		logo: Assets.Unknown,
		name: 'C++ Neural Network Library',
		period: {
			from: new Date(2025, 4, 1)
		},
		skills: getSkills('cpp', 'machine-learning'),
		type: 'Library'
	},
	{
		slug: 'easyeats-mobile-app',
		color: '#ff6b6b',
		description:
			'Designed and developed EasyEats, a mobile app that leverages generative AI to create personalized diets and uses a proprietary model to accurately determine users\' caloric requirements. EasyEats also gamifies dieting to make it more fun and interactive for users.\n\n**Agile Development:** Followed agile methodologies with bi-weekly sprints, focusing on a user-centric approach to validate new features with target audience feedback.\n\n**Frontend:** Built with React Native for a seamless user experience.\n\n**Backend:** Deployed an Express server on Amazon ECS Fargate, utilizing Firebase for authentication and database management.\n\n**Integrations:** Integrated Stripe for secure payment processing and Nutritionix and FatSecret APIs for comprehensive nutritional information.\n\n**Testing:** Ensured code quality and reliability through Jest unit tests for both frontend and backend components.\n\n**Outcome:** Successfully deployed 4 beta versions to 20+ testers on TestFlight and Google Play, the app is publicly available on the IOS app store under "EasyEatsDev," and it is being used in a research study at UBC to assess the accuracy of our proprietary energy expenditure models based on change in body tissue.',
		shortDescription:
			'AI-powered mobile app for personalized diets with gamified user experience.',
		links: [{ to: 'https://apps.apple.com/ca/app/easyeatsdev/id6642664922', label: 'App Store Link' }],
		logo: Assets.TM,
		name: 'EasyEats',
		period: {
			from: new Date(2024, 5, 1),
			to: new Date(2025, 4, 30)
		},
		skills: getSkills('react-native', 'express', 'firebase', 'python', 'expo', 'ts', 'js', 'aws', 'system-design'),
		type: 'Mobile Application',
		screenshots: [
			{label: 'Home Page', src: `https://i.imgur.com/Q5GVcSV.png`},
			{label: 'Food Log', src: `https://i.imgur.com/8ps6dXM.png`},
			{label: 'Search for Foods', src: `https://i.imgur.com/ZU5GnKK.png`},
		]
	},
	{
		slug: 'charity-donation-platform',
		color: '#4ecdc4',
		description:
			'Collaborated with a team of 5 to develop a web application enabling companies to host events and pledge donations to charities in exchange for attendees\' contact information. I led team meetings, planning agendas in advance and coordinating discussions to keep the team aligned and on schedule.\n\n**Frontend:** Designed a responsive, intuitive UI using Angular and Kendo UI.\n\n**Backend:** Built a robust backend with ASP.NET Core, EF Core migrations, and MS SQL Server for data management.\n\n**Authentication:** Integrated ASP.NET Identity for secure user authentication and role management.\n\n**Testing:** Employed Jasmine/Karma for frontend testing and XUnit for backend validation to ensure code quality.\n\n**Process:** Followed Scrum methodology with 2-week sprints to organize work and track progress.\n\n**Outcome:** Delivered an easy-to-navigate UI that met all functional and non-functional requirements and earned a grade of 96 in the course.',
		shortDescription:
			'Web platform for companies to host events and pledge donations to charities.',
		links: [],
		logo: Assets.UBC,
		name: 'Charity Donation Platform',
		period: {
			from: new Date(2024, 8, 1),
			to: new Date(2025, 3, 30)
		},
		skills: getSkills('aspnet', 'angular', 'ms-sql', 'ts', 'js', 'html', 'css', 'csharp'),
		type: 'Web Application'
	},
	{
		slug: 'honours-thesis',
		color: '#45b7d1',
		description:
			'Conducted independent research on the impact of dimensionality reduction techniques on similarity search in vector databases, focusing on accuracy and performance trade-offs. Investigated and benchmarked a novel technique called Approximate Distance Comparison Operators (DCOs), which terminate distance calculations early when a high likelihood exists that a candidate is irrelevant, reducing unnecessary computations.\n\n**Implementation:** Built low-level C++ algorithms for approximate DCOs, automated experiments in Linux with Bash, and visualized results in Python.\n\n**Outcome:** Produced an honors thesis benchmarking 2 similarity search algorithms and 5 DCOs on 5 different million-scale, revealing which techniques are the most efficient for different types of data. The thesis publicly available in the UBC Digital Library: https://open.library.ubc.ca/media/stream/pdf/52966/1.0448871/5',
		shortDescription:
			'Research on dimensionality reduction techniques for vector database similarity search.',
		links: [{ to: 'https://open.library.ubc.ca/media/stream/pdf/52966/1.0448871/5', label: 'UBC Digital Library' }, {to: 'https://github.com/noah-geerts/DCOKNN', label: 'GitHub Repo'}],
		logo: Assets.UBC,
		name: 'Honours Thesis',
		period: {
			from: new Date(2024, 8, 1),
			to: new Date(2025, 3, 30)
		},
		skills: getSkills('cpp', 'python'),
		type: 'Research Project'
	},
	{
		slug: 'custom-shell-program',
		color: '#96ceb4',
		description:
			'Effectively led a team with two other students to develop an expandable and robust shell program using Java. Allocated work to each member based on their unique skills, ensured efficient communication to avoid mistakes or duplicate work, and organized regular code reviews to consolidate git branches.\n\n**Testing:** Leveraged unit tests, integration tests, system tests, and static analysis to ensure the software was robust.',
		shortDescription:
			'Led team development of expandable shell program with comprehensive testing.',
		links: [{to: 'https://github.com/noah-geerts/Shell', label: 'GitHub Repo'}],
		logo: Assets.UCL,
		name: 'Custom Shell Program',
		period: {
			from: new Date(2023, 8, 1),
			to: new Date(2023, 11, 30)
		},
		skills: getSkills('java'),
		type: 'System Programming'
	},
	{
		slug: 'neural-denoiser-framerate-enhancer',
		color: '#feca57',
		description:
			'Worked alone to implement a CNN architecture using Python\'s PyTorch framework that effectively denoises input images with an average PSNR of 31. Also implemented a classic MLP that fits to a video using positional encoding of a pixel\'s x, y and frame coordinates, and can generate intermediate frames, resulting in a much smoother, higher framerate video.',
		shortDescription:
			'CNN for image denoising and MLP for video framerate enhancement.',
		links: [],
		logo: Assets.UCL,
		name: 'Neural Denoiser and Neural Framerate Enhancer',
		period: {
			from: new Date(2023, 8, 1),
			to: new Date(2023, 10, 30)
		},
		skills: getSkills('python', 'machine-learning'),
		type: 'Machine Learning'
	},
	{
		slug: 'game-of-amazons-ai',
		color: '#ff9ff3',
		description:
			'Worked alongside three other students to develop a powerful game-playing agent that uses heuristic functions and the Monte-Carlo search algorithm to play Game of Amazons, a variant of chess. Integrated the agent with the game server API.\n\n**Outcome:** This agent performed exceptionally, beating the 20 other teams in the class tournament.',
		shortDescription:
			'AI agent using Monte-Carlo search for Game of Amazons chess variant.',
		links: [{to: 'https://github.com/noah-geerts/Game-of-Amazons', label: 'GitHub Repo'}],
		logo: Assets.UBC,
		name: 'Game of Amazons AI',
		period: {
			from: new Date(2023, 0, 1),
			to: new Date(2023, 2, 30)
		},
		skills: getSkills('java'),
		type: 'AI/Game Development'
	}
];

export const title = 'Projects';
