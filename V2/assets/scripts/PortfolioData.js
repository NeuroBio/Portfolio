
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

	mainLanguages: [
		new Language('Node', 'Node.js', 'fab fa-node-js'),
		new Language('npm', 'Node Package Manager', 'fab fa-npm'),
		new Language('git', 'git', 'fab fa-git'),
		new Language('Jira', 'Jira', 'fab fa-jira'),
		new Language('Jasmine', 'Jasmine Testing Framework', '../assets/images/logos/jasmine.svg'),		
	],
	otherLanguages: [
		new Language(),
	],
}

