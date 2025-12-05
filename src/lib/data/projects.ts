import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';
import { base } from '$app/paths';

const url = (file: string) => `${base}/screenshots/${file}`;

export const items: Array<Project> = [
	{
		slug: 'yap',
		color: '#4ecdc4',
		description:
			'Built a full-stack chat application to strengthen my experience with real-time communication technologies, focusing on WebSocket implementation, persistent messaging, and modern authentication flows.\n\n**Implementation**: Developed the frontend with modern web technologies and real-time messaging capabilities. Built a robust Node.js TypeScript RESTful API with Socket.io and Engine.io for seamless real-time communication. Integrated Auth0 for secure third-party authentication and user management.\n\n**Database**: Implemented PostgreSQL for persistent message storage and user data management, ensuring reliable data persistence across sessions.\n\n**Outcome**: Successfully created a responsive chat application with real-time messaging, demonstrating proficiency in WebSocket technologies and modern full-stack development patterns.',
		shortDescription:
			'Real-time chat application with WebSocket, Node.js API, and Auth0 authentication.',
		links: [{ to: 'https://github.com/noah-geerts/yap', label: 'GitHub Repo' }],
		logo: Assets.Yap,
		name: 'Yap',
		period: {
			from: new Date(2025, 9, 25),
			to: new Date(2025, 10, 28)
		},
		skills: getSkills(
			'nodejs',
			'websockets',
			'postgresql',
			'oauth2',
			'express',
			'ts',
			'js',
			'html',
			'css'
		),
		type: 'Web Application',
		screenshots: [{ label: 'Demo', src: url('yap/demo.mp4') }]
	},
	{
		slug: 'progress',
		color: '#96ceb4',
		description:
			'Built a cross-platform workout tracking application to enhance my Spring Boot and React development skills, focusing on modern UI frameworks and efficient state management.\n\n**Implementation**: Developed the frontend using React with React Query for efficient data caching and React Router for seamless navigation. Implemented Ant Design UI components for a polished, responsive user interface. Built a robust Spring Boot backend with comprehensive REST API endpoints for workout data management.\n\n**Authentication**: Integrated Auth0 for secure third-party authentication and user session management.\n\n**Deployment**: Hosted PostgreSQL database on AWS RDS for reliable data persistence, deployed the Spring Boot backend using AWS App Runner for scalable server hosting, and served the React frontend through Vercel for optimal performance and CDN delivery.\n\n**Outcome**: Successfully delivered a production-ready workout tracking platform demonstrating full-stack development expertise with modern cloud deployment practices.',
		shortDescription:
			'Cross-platform workout tracking app with Spring Boot backend and React frontend.',
		links: [
			{ to: 'https://github.com/noah-geerts/progress', label: 'GitHub Repo' },
			{ to: 'https://progress.noahgeerts.com', label: 'Progress Web App' }
		],
		logo: Assets.Progress,
		name: 'Progress',
		period: {
			from: new Date(2025, 9, 5),
			to: new Date(2025, 11, 4)
		},
		skills: getSkills(
			'reactjs',
			'springboot',
			'postgresql',
			'oauth2',
			'java',
			'ts',
			'js',
			'html',
			'css',
			'aws'
		),
		type: 'Web Application',
		screenshots: [
			{ label: 'Dashboard', src: url('progress/dashboard.png') },
			{ label: 'Dashboard (Dark)', src: url('progress/dashboard_dark.png') },
			{ label: 'Exercises Page', src: url('progress/exercises.png') },
			{ label: 'Exercises Page (Dark)', src: url('progress/exercises_dark.png') }
		]
	},
	{
		slug: 'taskboard',
		color: '#5e95e3',
		description:
			'Built a full-stack taskboard application to strengthen my experience with modern web development workflows, covering frontend state management, backend API design, and secure authentication.\n\n**Implementation**: Developed the frontend with React, React Router, and React Query for efficient client-side caching and data fetching. Implemented manual JWT and refresh-token authentication using Spring Security and the jwt.io Java library, including token rotation and secure session handling. Integrated a PostgreSQL database with a clean service-layer architecture.\n\n**Deployment**: Hosted the database on AWS RDS, deployed the backend using AWS App Runner, and served the frontend through Vercel for a fully cloud-based, production-ready setup.\n\n**Outcome**: Learned to use Spring Boot as a backend in a simple full-stack app with a CRUD API and authentication. Gained a deep understanding of OAuth2 by implementing it manually.',
		shortDescription:
			'Simple taskboard platform in Spring Boot + React with manual OAuth2 implementation.',
		links: [{ to: 'https://github.com/noah-geerts/taskboard', label: 'GitHub Repo' }],
		logo: Assets.taskboard,
		name: 'Taskboard',
		period: {
			from: new Date(2025, 8, 25),
			to: new Date(2025, 8, 30)
		},
		skills: getSkills(
			'reactjs',
			'springboot',
			'postgresql',
			'oauth2',
			'java',
			'ts',
			'js',
			'html',
			'css',
			'tailwind',
			'aws'
		),
		type: 'Web Application',
		screenshots: [{ label: 'Demo', src: url('taskboard/demo.mp4') }]
	},
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
			from: new Date(2025, 4, 1),
			to: new Date(2025, 4, 25)
		},
		skills: getSkills('cpp', 'machine-learning'),
		type: 'Library',
		screenshots: [
			{ label: 'Basic Usage of the Library', src: url('simplenn/basic_usage.png') },
			{ label: 'Mnist-labeled 0', src: url('simplenn/0.png') },
			{ label: 'Mnist-labeled 4', src: url('simplenn/4.png') },
			{ label: 'Mnist-labeled 1', src: url('simplenn/1.png') },
			{ label: 'Mnist-labeled 7', src: url('simplenn/7.png') },
			{ label: 'Mnist-labeled 2', src: url('simplenn/2.png') }
		]
	},
	{
		slug: 'easyeats-mobile-app',
		color: '#ff6b6b',
		description:
			'Designed and developed EasyEats, a mobile app that leverages generative AI to create personalized diets and uses a proprietary model to accurately determine users\' caloric requirements. EasyEats also gamifies dieting to make it more fun and interactive for users.\n\n**Agile Development:** Followed agile methodologies with bi-weekly sprints, focusing on a user-centric approach to validate new features with target audience feedback.\n\n**Frontend:** Built with React Native for a seamless user experience.\n\n**Backend:** Deployed an Express server on Amazon ECS Fargate, utilizing Firebase for authentication and database management.\n\n**Integrations:** Integrated Stripe for secure payment processing and Nutritionix and FatSecret APIs for comprehensive nutritional information.\n\n**Testing:** Ensured code quality and reliability through Jest unit tests for both frontend and backend components.\n\n**Outcome:** Successfully deployed 4 beta versions to 20+ testers on TestFlight and Google Play, the app is publicly available on the IOS app store under "EasyEatsDev," and it is being used in a research study at UBC to assess the accuracy of our proprietary energy expenditure models based on change in body tissue.',
		shortDescription: 'AI-powered mobile app for personalized diets with gamified user experience.',
		links: [
			{ to: 'https://apps.apple.com/ca/app/easyeatsdev/id6642664922', label: 'App Store Link' }
		],
		logo: Assets.TM,
		name: 'EasyEats',
		period: {
			from: new Date(2024, 5, 1),
			to: new Date(2025, 4, 30)
		},
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
		type: 'Mobile Application',
		screenshots: [
			{ label: 'Home Page', src: url('easyeats/home.PNG') },
			{ label: 'Food Log', src: url('easyeats/log.PNG') },
			{ label: 'Search for Foods', src: url('easyeats/foods.PNG') }
		]
	},
	{
		slug: 'charity-donation-platform',
		color: '#4ecdc4',
		description:
			"Collaborated with a team of 5 to develop a web application enabling companies to host events and pledge donations to charities in exchange for attendees' contact information. I led team meetings, planning agendas in advance and coordinating discussions to keep the team aligned and on schedule.\n\n**Frontend:** Designed a responsive, intuitive UI using Angular and Kendo UI.\n\n**Backend:** Built a robust backend with ASP.NET Core, EF Core migrations, and MS SQL Server for data management.\n\n**Authentication:** Integrated ASP.NET Identity for secure user authentication and role management.\n\n**Testing:** Employed Jasmine/Karma for frontend testing and XUnit for backend validation to ensure code quality.\n\n**Process:** Followed Scrum methodology with 2-week sprints to organize work and track progress.\n\n**Outcome:** Delivered an easy-to-navigate UI that met all functional and non-functional requirements and earned a grade of 96 in the course.\n\n\n*please note this is the only screenshot I have. We handed the source code over to the client so I am unable to link the github repo or get a video recording of the platform until I get their permission*",
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
		type: 'Web Application',
		screenshots: [
			{ label: 'Dashboard (without nav in screenshot)', src: url('charityhub/dashboard.png') }
		]
	},
	{
		slug: 'honours-thesis',
		color: '#45b7d1',
		description:
			'Conducted independent research on the impact of dimensionality reduction techniques on similarity search in vector databases, focusing on accuracy and performance trade-offs. Investigated and benchmarked a novel technique called Approximate Distance Comparison Operators (DCOs), which terminate distance calculations early when a high likelihood exists that a candidate is irrelevant, reducing unnecessary computations.\n\n**Implementation:** Built low-level C++ algorithms for approximate DCOs, automated experiments in Linux with Bash, and visualized results in Python.\n\n**Outcome:** Produced an honors thesis benchmarking 2 similarity search algorithms and 5 DCOs on 5 different million-scale, revealing which techniques are the most efficient for different types of data. The thesis publicly available in the UBC Digital Library: https://open.library.ubc.ca/media/stream/pdf/52966/1.0448871/5',
		shortDescription:
			'Research on dimensionality reduction techniques for vector database similarity search.',
		links: [
			{
				to: 'https://open.library.ubc.ca/media/stream/pdf/52966/1.0448871/5',
				label: 'UBC Digital Library'
			},
			{ to: 'https://github.com/noah-geerts/DCOKNN', label: 'GitHub Repo' }
		],
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
			'Shell program similar to bash with comprehensive unit and integration tests.',
		links: [{ to: 'https://github.com/noah-geerts/Shell', label: 'GitHub Repo' }],
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
			"Worked alone to implement a CNN architecture using Python's PyTorch framework that effectively denoises input images with an average PSNR of 31. Also implemented a classic MLP that fits to a video using positional encoding of a pixel's x, y and frame coordinates, and can generate intermediate frames, resulting in a much smoother, higher framerate video.",
		shortDescription: 'CNN for image denoising and MLP for video framerate enhancement.',
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
		shortDescription: 'AI agent using Monte-Carlo search for Game of Amazons chess variant.',
		links: [{ to: 'https://github.com/noah-geerts/Game-of-Amazons', label: 'GitHub Repo' }],
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
