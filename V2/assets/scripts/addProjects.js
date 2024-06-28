const projectContainer = d3.select('#project-container');

PortfolioData.projects.forEach((project) => {
	const { title, previewImage, description, languages, links } = project;
	const outerContainer = projectContainer.append('article')
		.attr('class', 'project');

	outerContainer.append('h3').text(title)

	const mainContent = outerContainer.append('section')
		.attr('class', 'project-content');

	const demoButton = mainContent.append('button')
		.attr('class', 'demo-button')
		.attr('type', 'button')
		.attr('title', `View Demo for ${title}`)

	demoButton.append('img')
		.attr('src', previewImage)
		.attr('class', 'project-image');
	
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
		const icon = language.usesLocalImage
			? tools.append('img')
			: tools.append('i');

		icon.attr('id', language.name)
			.attr('src', language.src)
			.attr('class', language.class)
			.attr('alt', language.description);
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
