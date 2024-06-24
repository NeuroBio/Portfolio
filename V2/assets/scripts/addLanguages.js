const mainLanguages = PortfolioData.mainLanguages;
const mainLanguagesElement = d3.select('#main-language-card-container');
const mainToolName = d3.select('#main-tool-name')


function showToolName (id) {
	const language = mainLanguages.find(x => x.name === id);
	mainToolName.text(language.description);
}

function hideToolName () {
	mainToolName.text('')
}

mainLanguages.forEach((language) => {
	const iconContainer = mainLanguagesElement.append('article')
		.attr('class', 'language-card')
		.attr('onmouseover', `showToolName('${language.name}')`)
		.attr('onmouseout', `hideToolName()`);
	
	const icon = language.usesLocalImage
		? iconContainer.append('img')
		: iconContainer.append('i');
	icon.attr('id', language.name)
		.attr('src', language.src)
		.attr('class', language.class)
		.attr('alt', language.description);
});
