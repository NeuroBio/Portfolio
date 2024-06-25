
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

const LanguageKeys = {
	MAIN: 'main',
	OTHER: 'other',
	MISC: 'misc',
};


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

	books: [
		new Book('Patterns, Principles, and Practices of Domain-Driven Design',
			`This is the first Domain-Driven Design book where I understood everything the authors were saying.
			The book opens on DDD philosophy instead of the tactical patterns.
			I found immediate use for the philosophy side and its focus on collaboration and fully exploring the problem domain.`,
			'https://www.amazon.com/Patterns-Principles-Practices-Domain-Driven-Design/dp/1118714709'
		),
	],

	languages: {
		[LanguageKeys.MAIN]: {
			Node: new Language('Node', 'Node.js', 'fab fa-node-js'),
			npm: new Language('npm', 'Node Package Manager', 'fab fa-npm'),
			git: new Language('git', 'Git', 'fab fa-git'),
			Jira: new Language('Jira', 'Jira', 'fab fa-jira'),
			Jasmine: new Language('Jasmine', 'Jasmine (Testing Framework)', '../assets/images/logos/jasmine.svg'),		
		},
		[LanguageKeys.OTHER]: {
			python: new Language('python', 'Python', 'fab fa-python'),
			R: new Language('R', 'R', 'fab fa-r-project'),
			'C#': new Language('C#', 'C#', '../assets/images/logos/c-sharp.svg'),
			angular: new Language('angular', 'Angular (Web Framework)', 'fab fa-angular'),
			react: new Language('react', 'React (Web Framework)', 'fab fa-react'),
		},
		[LanguageKeys.MISC]: {
			github: new Language('github', 'GitHub', 'fab fa-github-square'),
			firebase: new Language('firebase', 'Firebase', '../assets/images/logos/firebase.svg'),
			jest: new Language('jest', 'Jest (Testing Framework)', '../assets/images/logos/jest.svg'),
			confluence: new Language('confluence', 'Confluence', 'fab fa-confluence'),
			markdown: new Language('markdown', 'Markdown', 'fab fa-markdown'),
			bitbucket: new Language('bitbucket', 'Bitbucket', 'fab fa-bitbucket'),
		},
	},
}

