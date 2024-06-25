

const { languages } = PortfolioData;


const mainLanguagesElement = d3.select('#main-languages');
const otherLanguagesElement = d3.select('#other-languages');
const miscLanguagesElement = d3.select('#misc-languages');

const displayElement = {
	[LanguageKeys.MAIN]: d3.select('#main-tool-name'),
	[LanguageKeys.OTHER]: d3.select('#other-tool-name'),
	[LanguageKeys.MISC]: d3.select('#misc-tool-name'),
}

populateLanguages({
	languageSection: mainLanguagesElement,
	languageKey: LanguageKeys.MAIN,
	cssClass: 'language-card',
});

populateLanguages({
	languageSection: otherLanguagesElement,
	languageKey: LanguageKeys.OTHER,
	cssClass: 'language-card-smaller',
});

populateLanguages({
	languageSection: miscLanguagesElement,
	languageKey: LanguageKeys.MISC,
	cssClass: 'language-card-smaller',
});


function populateLanguages({ languageSection, languageKey, cssClass }) {
	Object.values(languages[languageKey]).forEach((language) => {
		const iconContainer = languageSection.append('article')
			.attr('class', cssClass)
			.attr('onmouseover', `showToolName('${language.name}', '${languageKey}')`)
			.attr('onmouseout', `hideToolName('${languageKey}')`);
		
		const icon = language.usesLocalImage
			? iconContainer.append('img')
			: iconContainer.append('i');
		icon.attr('id', language.name)
			.attr('src', language.src)
			.attr('class', language.class)
			.attr('alt', language.description);
	});
}

function showToolName (id, languageKey) {
	const language = languages[languageKey][id];
	displayElement[languageKey].text(language.description);
}

function hideToolName (languageKey) {
	displayElement[languageKey].text('')
}
