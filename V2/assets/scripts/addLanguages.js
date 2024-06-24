const mainLanguages = d3.select('#main-language-card-container');

PortfolioData.mainLanguages.forEach((language) => {
	console.log(language)
	const iconContainer = mainLanguages.append('article')
		.attr('class', 'language-card');
	const icon = language.usesLocalImage
		? iconContainer.append('img')
		: iconContainer.append('i')

	icon.attr('id', language.name)
		.attr('src', language.src)
		.attr('class', language.class);
});
