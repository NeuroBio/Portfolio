const projectContainer = d3.select('#project-container');
const demoContainer = d3.select('#demo-container');
const demo = d3.select('#demo');

PortfolioData.projects.forEach((project) => {
	const { title, previewImage, demo, description, languages, links, } = project;
	const outerContainer = projectContainer.append('article')
		.attr('class', 'project');

	outerContainer.append('h3').text(title)

	const mainContent = outerContainer.append('section')
		.attr('class', 'project-content');

	const demoButton = mainContent.append('button')
		.attr('class', 'demo-button')
		.attr('type', 'button')
		.attr('title', `View Demo for ${title}`)
		.attr('onClick', `openDemo('${demo}')`);

	demoButton.append('img')
		.attr('src', previewImage)
		.attr('class', 'project-image')
		.attr('alt', '');
	demoButton.append('i')
		.attr('class', 'fas fa-play-circle demo-icon');
	
	const textContent = mainContent.append('section')
		.attr('class', 'project-text');
	

	textContent.append('p').text(description);

	let tools;
	if (languages.length > 0) {
		tools = textContent.append('section')
			.attr('class', 'project-tools');
		tools.append('span').text('Tools: ');
	}

	languages.forEach((language) => {
		const languageWithTooltip = tools.append('section')
			.attr('class', 'tooltip');
		const icon = language.usesLocalImage
			? languageWithTooltip.append('img')
			: languageWithTooltip.append('i');

		icon.attr('src', language.src)
			.attr('class', language.class)
			.attr('alt', language.description);
		languageWithTooltip.append('span')
			.attr('class', 'tooltip-text')
			.text(language.description)
	});

	const footer = outerContainer.append('section')
		.attr('class', 'project-footer');
	
	links.forEach((link, i) => {
		footer.append('a')
			.attr('class', 'project-link')
			.attr('href', link.src)
			.text(link.title)

		if (i + 1 !== links.length) {
			footer.append('span')
				.attr('class', 'link-separator');
		} 
	});
});

function openDemo(demoLink) {
	demoContainer
		.attr('class', 'open')
		.attr('onkeyup', 'checkKeyAndContinue(event)')
	demo.attr('src', demoLink)
	demo.node().focus();
}

function checkKeyAndContinue(e) {
	if (e.code === 'Escape') {
		closeDemo();
	}
  }

function closeDemo() {
	demoContainer.attr('onkeyup', '')
	demoContainer.attr('class', 'closed');
}