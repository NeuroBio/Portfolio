const LanguageGroupKey = Object.freeze({
	MAIN: 'main',
	OTHER: 'other',
	MISC: 'misc',
});

const LanguageKey = Object.freeze({
	NODE: 'Node',
	NPM: 'npm',
	GIT: 'git',
	JIRA: 'Jira',
	JASMINE: 'Jasmine',
	PYTHON: 'python',
	R: 'R',
	C_SHARP: 'C#',
	ANGULAR: 'angular',
	REACT: 'react',
	GITHUB: 'github',
	FIREBASE: 'firebase',
	JEST: 'jest',
	CONFLUENCE: 'confluence',
	MARKDOWN: 'markdown',
	BITBUCKET: 'bitbucket',
	BLAZOR: 'blazor',
});

class Language {
	constructor(shortName, longName, src) {
		this.name = shortName;
		this.description = longName;
		if (/\//.test(src)) {
			this.src = src;
			this.class = 'logo';
			this.usesLocalImage = true;
		} else {
			this.class = src;
			this.usesLocalImage = false;
		}
	}
}
class Book {
	constructor(title, description, link) {
		this.title = title;
		this.description = description;
		this.link = link;
	}
}
class Passion {
	constructor(title, description) {
		this.title = title;
		this.description = description;
	}
}
class Link {
	constructor(title, src) {
		this.title = title;
		this.src = src;
	}
}
class Project {
	constructor(title, previewImage, demo, description, languages, links) {
		this.title = title;
		this.previewImage = previewImage;
		this.demo = demo;
		this.description = description;
		this.languages = languages;
		this.links = links;
	}
}

const PRESENT = 'Present'

const MonthKey = Object.freeze({
	JANUARY: 'Jan',
	FEBRUARY: 'Feb', 
	MARCH: 'Mar',
	APRIL: 'Apr',
	MAY: 'May',
	JUNE: 'Jun',
	JULY: 'Jul',
	AUGUST: 'Aug',
	SEPTEMBER: 'Sep',
	OCTOBER: 'Oct',
	NOVEMBER: 'Nov',
	DECEMBER: 'Dec',
});

const MonthValue = Object.freeze({
	[MonthKey.JANUARY]: 1,
	[MonthKey.FEBRUARY]: 2,
	[MonthKey.MARCH]: 3,
	[MonthKey.APRIL]: 4,
	[MonthKey.MAY]: 5,
	[MonthKey.JUNE]: 6,
	[MonthKey.JULY]: 7,
	[MonthKey.AUGUST]: 8,
	[MonthKey.SEPTEMBER]: 9,
	[MonthKey.OCTOBER]: 10,
	[MonthKey.NOVEMBER]: 11,
	[MonthKey.DECEMBER]: 12,
});

const AllLanguages = Object.freeze({
	[LanguageKey.NODE]: new Language('Node', 'Node.js', 'fab fa-node-js'),
	[LanguageKey.NPM]: new Language('npm', 'Node Package Manager', 'fab fa-npm'),
	[LanguageKey.GIT]: new Language('git', 'Git', 'fab fa-git'),
	[LanguageKey.JIRA]: new Language('Jira', 'Jira', 'fab fa-jira'),
	[LanguageKey.JASMINE]: new Language('Jasmine', 'Jasmine (Testing Framework)', '../assets/images/logos/jasmine.svg'),	
	[LanguageKey.PYTHON]: new Language('python', 'Python', 'fab fa-python'),
	[LanguageKey.R]: new Language('R', 'R', 'fab fa-r-project'),
	[LanguageKey.C_SHARP]: new Language('C#', 'C#', '../assets/images/logos/c-sharp.svg'),
	[LanguageKey.ANGULAR]: new Language('angular', 'Angular (Web Framework)', 'fab fa-angular'),
	[LanguageKey.REACT]: new Language('react', 'React (Web Framework)', 'fab fa-react'),
	[LanguageKey.GITHUB]: new Language('github', 'GitHub', 'fab fa-github-square'),
	[LanguageKey.FIREBASE]: new Language('firebase', 'Firebase', '../assets/images/logos/firebase.svg'),
	[LanguageKey.JEST]: new Language('jest', 'Jest (Testing Framework)', '../assets/images/logos/jest.svg'),
	[LanguageKey.CONFLUENCE]: new Language('confluence', 'Confluence', 'fab fa-confluence'),
	[LanguageKey.MARKDOWN]: new Language('markdown', 'Markdown', 'fab fa-markdown'),
	[LanguageKey.BITBUCKET]: new Language('bitbucket', 'Bitbucket', 'fab fa-bitbucket'),
	[LanguageKey.BLAZOR]: new Language('blazor', 'Blazor', '../assets/images/logos/blazor.svg'),
	[LanguageKey.HTML]: new Language('html5', 'HTML 5', 'fab fa-html5'),
});


class Experience {
	constructor(name, expanded, credential, dateRange, positions, achievements, publications) {
		this.organization = name;
		this.safeId = name.replace(/[^a-zA-Z\d]/g, '');
		this.startExpanded = expanded;
		this.credential = credential;
		this.positions = positions;
		this.achievements = achievements;
		this.publications = publications;
		this.dateRange = dateRange || _getDateRange();


		function _getDateRange() {
			const lastPosition = positions[0];
			const firstPosition = positions[positions.length - 1];

			const startMonth = firstPosition.startMonth;
			const startYear = firstPosition.startYear;
			const endMonth = lastPosition.endMonth;
			const endYear = lastPosition.endYear;
			const endTime = endYear === PRESENT ? PRESENT : `${endMonth}, ${endYear}`;
			return `${startMonth}, ${startYear} - ${endTime}`;
		};
	}

	getHighlightedText () {
		return this.credential ? this.credential : this.positions[0].title;
	}
}

class Position {
	constructor(title, startMonth, startYear, endMonth, endYear) {
		this.title = title;
		this.startMonth = startMonth;
		this.startYear = startYear;
		this.endMonth = endMonth;
		this.endYear = endYear;
	}
}
class Achievement {
	constructor(date, text) {
		this.date = date;
		this.text = text;
	}
}

class Publication {
	constructor (citation, articleLink, githubLink, pressReleases) {
		this.citation = citation;
		this.articleLink = articleLink;
		this.githubLink = githubLink;
		this.pressReleases = pressReleases;
	}
 }

 class PressRelease {
	constructor(citation, link) {
		this.citation = citation;
		this.link = link;
	}
 }


const PortfolioData = {
	brandStatement: `Driven by challenge and curiosity.
		I combine an artist's creativity with a scientist's logical approach to solve software engineering problems.
		Any complex system interests me, from neuronal development to bird song evolution to warehouse inventory management.
		I’m passionate about reducing code debt, improving testing methods, and learning better architectural design.
		Though highly independent with my own work, I’m a team player.
		In discussion, I ask questions and suggest alternative approaches.
		Reinventing the wheel wastes time, so I readily teach newer devs and talk through code problems.
		With my academic background, I’m experienced in presenting, data analysis, and formal writing.
		My illustration and creative writing hobbies have been surprisingly handy at work too.
		Every job or lab I’ve worked in has recognized my potential and been sad to see me go.
		Not just for my work ethic, but also for my (apparently) unforgettable laugh and oddball sense of humor.`,
		
	teaser: `An-ex scientist, I refactored myself into a software engineer.
		I live for overcoming complex challenges.  My goal is to make 
		applications that are maintainable, performant, and aesthetically pleasing.`,

	projects: [
		new Project(
			'Arecace (Worldbuilding Project)',
			'../assets/images/projects/Arecace.jpg',
			'../assets/videos/ArecaceDemo.mp4',
			`A showcase website for my original story and Worldbuilding project.
			This was one of my first websites.
			It was where I began to understand the power of modular code...
			and started to feel the pain of refactoring code without automated tests.
			`,
			[
				AllLanguages[LanguageKey.ANGULAR],
				AllLanguages[LanguageKey.FIREBASE],
				AllLanguages[LanguageKey.PYTHON],
			],
			[
				new Link('Live Project', 'https://arecace.com/home'),
				new Link('Repo', 'https://github.com/NeuroBio/ArecaceWebsite'),
			]
		),
		new Project(
			'Discord Bot',
			'../assets/images/projects/discordbot.jpg',
			'../assets/videos/DiscordBotDemo.mp4',
			`Made for convenience and trolling.
			Includes commands dice rolls, generators, and fetching web-scraped data.
			I started from nothing to see what inconveniences drove me to improve the dev experience.
			I realized all my projects need to have:
			linting on save, a unit tests for TDD, and path aliases. 
			`,
			[
				AllLanguages[LanguageKey.NODE],
				AllLanguages[LanguageKey.JASMINE],
			],
			[
				new Link('Repo', 'https://github.com/NeuroBio/DiscordBot'),
			]
		),
		new Project(
			'Code Namer',
			'../assets/images/projects/CodeNamer.jpg',
			'../assets/videos/CodeNamerDemo.mp4',
			`An April Fool's Day prank app.
			Based on a number of long running jokes at work, DDD concepts, and my personal sense of humor.
			This project was an excuse to learn react in my personal time back when we planned to transition
			to using react for our application's frontend.
			`,
			[
				AllLanguages[LanguageKey.REACT],
			],
			[
				new Link('Live Project', 'https://code-namer.firebaseapp.com/'),
				new Link('Repo', 'https://github.com/NeuroBio/Code-Namer-React-App'),
			]
		),
		new Project(
			'Song Evolution Model',
			'../assets/images/projects/SEM.jpg',
			'../assets/videos/SEMDemo.mp4',
			`An agent based model I developed for my PhD thesis.
			It simulates how birdsong evolves under different selection pressures.
			Initially written in R, the model ran too slow to generate the volume of data I needed.
			I learned C# and rewrote my model in it, earning 10x speed increases.
			`,
			[
				AllLanguages[LanguageKey.R],
				AllLanguages[LanguageKey.C_SHARP],
				AllLanguages[LanguageKey.BLAZOR],
			],
			[
				new Link('Live Project', 'https://neurobio.github.io/SEMWebApp/release/SEMWebApp/dist/'),
				new Link('C# Library', 'https://github.com/NeuroBio/SongEvolutionModelLibrary'),
				new Link('C# Programs', 'https://github.com/NeuroBio/SongEvolutionModelPrograms'),
				new Link('R Repo', 'https://github.com/NeuroBio/SEM_R_Package'),
				new Link('Webapp Repo', 'https://github.com/NeuroBio/SEMWebApp'),
			]
		),
		new Project(
			'VtM Maps',
			'../assets/images/projects/VtMMaps.jpg',
			'../assets/videos/VtMMapsDemo.mp4',
			`A app for my Vampire the Masquerade Campaign: Phoenix Heat.
			It acted as a quick reference for the NPCs my players had met, as well as in-game locations.
			Includes two maps: one for real world Phoenix and a second for fictional town Hartstone,
			where the players where based.
			`,
			[],
			[
				new Link('Live Project', 'https://neurobio.github.io/VtM-Maps/'),
				new Link('Repo', 'https://github.com/NeuroBio/VtM-Maps'),
			]
		),
		new Project(
			'Card Database',
			'../assets/images/projects/Cards.jpg',
			'../assets/videos/CardsDemo.mp4',
			`For managing my pokemon card collection.
			The app focuses on tracking and organizing cards.
			Web scraping scripts for fetch expansion sets from Bulbapedia.
			At over 20K cards in the database, there are now performance issues.
			The next steps will be focused on reducing lag.
			`,
			[
				AllLanguages[LanguageKey.ANGULAR],
				AllLanguages[LanguageKey.FIREBASE],
				AllLanguages[LanguageKey.PYTHON],
			],
			[
				new Link('Live Project', 'https://carddatabase-6dfef.web.app/Masterlist'),
				new Link('Repo', 'https://github.com/NeuroBio/CardDatabase_ng14'),
			]
		),
	],
	
	passions: [
		new Passion(
			'Test-Driven Development',
			`Writing automated tests is coding.  Running them is way faster than manual testing during development.`
		),
		new Passion(
			'Clean Architecture',
			`Learning how to write it.  Implementing it.  Recognizing when simple CRUD is sufficient.`
		),
		new Passion(
			'Code Review',
			`Having another set of eyes on your code helps ensure you build a maintainable product.`
		)
	],
	
	books: [
		new Book('Patterns, Principles, and Practices of Domain-Driven Design',
			`This is the first DDD I've understood.
			It opens on DDD philosophy instead of the tactical patterns.
			I quickly found use for the philosophy and its focus on collaboration and fully exploring the problem domain.`,
			'https://www.amazon.com/Patterns-Principles-Practices-Domain-Driven-Design/dp/1118714709'
		),
		new Book('Refactoring: Improving the Design of Existing Code',
			`I picked up some new tricks, put names to my existing techniques,
			and learned new ways to explain the value behind specific refactors.
			An excellent reference book.
			`,
			'https://www.amazon.com/Refactoring-Improving-Existing-Addison-Wesley-Signature-dp-0134757599/dp/0134757599/ref=dp_ob_title_bk'
		)
	],

	languages: {
		[LanguageGroupKey.MAIN]: {
			[LanguageKey.NODE]: AllLanguages[LanguageKey.NODE],
			[LanguageKey.NPM]: AllLanguages[LanguageKey.NPM],
			[LanguageKey.GIT]: AllLanguages[LanguageKey.GIT],
			[LanguageKey.JIRA]: AllLanguages[LanguageKey.JIRA],
			[LanguageKey.JASMINE]: AllLanguages[LanguageKey.JASMINE],		
		},
		[LanguageGroupKey.OTHER]: {
			[LanguageKey.PYTHON]: AllLanguages[LanguageKey.PYTHON],
			[LanguageKey.R]: AllLanguages[LanguageKey.R],
			[LanguageKey.C_SHARP]: AllLanguages[LanguageKey.C_SHARP],
			[LanguageKey.ANGULAR]: AllLanguages[LanguageKey.ANGULAR],
			[LanguageKey.REACT]: AllLanguages[LanguageKey.REACT],
		},
		[LanguageGroupKey.MISC]: {
			[LanguageKey.GITHUB]: AllLanguages[LanguageKey.GITHUB],
			[LanguageKey.FIREBASE]: AllLanguages[LanguageKey.FIREBASE],
			[LanguageKey.JEST]: AllLanguages[LanguageKey.JEST],
			[LanguageKey.CONFLUENCE]: AllLanguages[LanguageKey.CONFLUENCE],
			[LanguageKey.MARKDOWN]: AllLanguages[LanguageKey.MARKDOWN],
			[LanguageKey.BITBUCKET]: AllLanguages[LanguageKey.BITBUCKET],
		},
	},

	experiences: {
		corporate: [
			new Experience(
				'RF-SMART',
				true,
				'',
				'',
				[
					new Position('Senior Software Developer', MonthKey.DECEMBER, 2023, PRESENT, PRESENT),
					new Position('Software Developer II', MonthKey.JANUARY, 2023, MonthKey.NOVEMBER, 2023),
					new Position('Software Developer I', MonthKey.JANUARY, 2022, MonthKey.DECEMBER, 2022),
				],
				[
					new Achievement('2024',	`Won the "Most Likely To Implement" category in the company HackFest`),
					new Achievement('2023', `Became the dev team lead for Outbound Products`),
					new Achievement('2022', `Earned a High Altitude - individual merit award (nominated by manager)`),
					new Achievement('2022',	`Built an integration testing framework prototype to run our code in a 3rd party environment`),
					new Achievement('2022 - 2024', `Earned 6 DYSTs - peer recognition award`),
				],
				[],
			),
			new Experience(
				'TrustiPhi, LLC',
				false,
				'',
				'',
				[new Position('Programming Consultant', MonthKey.AUGUST, 2020, MonthKey.JANUARY, 2022)],
				[new Achievement('2021', `Resigned and reimplemented the frontend for the company's flagship security application.`)],
				[],
			)
		],
		education: [
			new Experience(
				'University of Miami',
				false,
				'Certificate in Data Analytics',
				`${MonthKey.MAY}, ${2021} - ${MonthKey.OCTOBER}, ${2021}`,
				[],
				[],
				[],
			),
			new Experience(
				'Vanderbilt University',
				false,
				'Ph.D. in Computational Biology',
				`${MonthKey.AUGUST}, ${2013} - ${MonthKey.OCTOBER}, ${2019}`,
				[
					new Position('PhD Candidate under Dr. Nicole Creanza', MonthKey.JUNE, 2017, MonthKey.AUGUST, 2019),
					new Position('PhD Candidate under Dr. Donna Webb', MonthKey.MAY, 2014, MonthKey.MAY, 2017),
				],
				[],
				[
					new Publication(
						` R. Gordon, A. Ravignani, J. Hyland Bruno, <b>C. Robinson</b>, A. Scartozzi,
						R. Embalabala, M. Niarchou, 23andMe Research Team, N. Cox, N. Creanza. (2021)
						Linking the genomic signatures of human beat synchronization and learned
						song in birds. <i>Phil Trans B</i>. 376(1835)`,
						'https://royalsocietypublishing.org/doi/abs/10.1098/rstb.2020.0329'
					),
					new Publication(
						`<b>C. Robinson</b>, K. Snyder, N. Creanza. (2019).
						Correlated evolution between repertoire size and song plasticity predicts that
						sexual selection on song promotes open-ended learning. <i>eLife</i>. 8: e44454.`,
						'https://elifesciences.org/articles/44454',
						'https://github.com/CreanzaLab/SongLearningEvolution',
						[
							new PressRelease(
								`<b>PRESS:</b> <i>The Conversation</i>, September 3, 2019 - Complex birdsongs help biologists piece together the evolution of lifelong learning`,
								'https://theconversation.com/complex-birdsongs-help-biologists-piece-together-the-evolution-of-lifelong-learning-122009'
							),
							new PressRelease(
								`<b>PRESS:</b> <i>Research News @ Vanderbilt</i>, High standards of female songbirds could be driving their mates to evolve`,
								'https://news.vanderbilt.edu/2019/09/04/high-standards-of-female-songbirds-could-be-driving-their-mates-to-evolve/'
							)
						]
		
					),
					new Publication(
						` <b>C. Robinson</b>, N. Creanza. (2019). Species‐level repertoire size predicts
						a correlation between individual song elaboration and reproductive success.
						<i>Ecology and Evolution</i>. 9(14): 8362-8377.`,
						'https://onlinelibrary.wiley.com/doi/full/10.1002/ece3.5418',
						'https://github.com/CreanzaLab/RepertoireSizeReproductiveSuccess',
					),
					new Publication(
						`<b>C. Robinson</b>, M. Patel, D. Webb. (2016). Super resolution microscopy is poised to
						reveal new insights into the formation and maturation of dendritic spines. <i>F1000Research</i>.
						5(F100 Faculty Rev), 1468.`,
						'https://f1000research.com/articles/5-1468/v1',
						''
					),
					new Publication(
						`J. Evans, <b>C. Robinson</b>, M. Shi, D. Webb. (2015).
						The guanine nucleotide exchange factor (GEF) asef2 promotes dendritic spine
						formation via rac activation and spinophilin-dependent targeting.
						<i>Journal of Biological Chemistry</i>. 290, 10295-10398.`,
						'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4400342/',
						''
					)
				],
			),
			new Experience(
				'Ohio Northern University',
				false,
				'B.S. in Molecular Biology and Behavioral Neuroscience',
				`${MonthKey.AUGUST}, ${2009} - ${MonthKey.MAY}, ${2013}`,
				[new Position('Research Assistant under Dr. Phillip Zoladz', MonthKey.DECEMBER, 2010, MonthKey.MAY, 2013)],
				[],
				[
					new Publication(
						`P. Zoladz, H. Burke, <b>C. Robinson</b>, S. Woelke, B. Wentz, J. Pisansky,
						J. McKay, K. Dexter, J. Talbot. (2014). Blunted Corticosterone Response to
						Acute Predator Stress Results in Long-Term Spatial Memory Impairment. <i>SOJ Psychology</i>. 1(1): 7.`,
						'https://symbiosisonlinepublishing.com/psychology/psychology02.php',
					),
					new Publication(
						`H. Burke, <b>C. Robinson</b>, B. Wentz, J. McKay, K. Dexter., J. Pisansky, J. Talbot, P. Zoladz.
						(2013). Sex-specific impairment of spatial memory in rats following a reminder of predator stress.
						<i>Stress</i>. 16(4): 469-76.`,
						'https://www.tandfonline.com/doi/abs/10.3109/10253890.2013.791276?journalCode=ists20',
					)
				],
			),
		]
	}
}

