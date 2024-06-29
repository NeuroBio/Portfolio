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

		// https://code-namer.firebaseapp.com/
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
			'',
			`Made for convenience and trolling.
			Includes commands for DnD and VtM dice rolls, prompt generators, and fetching web scraped data.
			I used it as an opportunity to start from nothing and see what inconveniences drove me to improve the dev experience.
			I quickly realized that I now expect all my projects to have:
			lint auto-fix on save, a unit testing framework for TDD, and path aliases. 
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
			'',
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
			'../assets/images/projects/SEM.png',
			'',
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
			'../assets/images/projects/VtMMaps.png',
			'',
			`A app for my Vampire the Masquerade Campaign: Phoenix Heat.
			It acts as a quick references for the NPCs my players had met, as well as in-game locations.
			Includes two maps: one for real world Phoenix and a second for fictional town Hartstone
			where the players where based.
			`,
			[],
			[
				new Link('Live Project', 'https://carddatabase-6dfef.web.app/Masterlist'),
				new Link('Repo', 'https://github.com/NeuroBio/CardDatabase_ng14'),
			]
		),
		new Project(
			'Card Database',
			'../assets/images/projects/Cards.png',
			'',
			`A app for managing my pokemon card collection.
			The app itself is mostly focused on tracking and organizing cards.
			There's also a set of python scripts for web scraping expansion sets from Bulbapedia that are run in the CLI.
			I'm starting to get a lot of data (over 20K cards), which causes performance issues in the app.
			At the moment, I added a card cache to make reloads faster.
			The next steps will be changing my app to request and display data differently to reduce lag.
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
}

