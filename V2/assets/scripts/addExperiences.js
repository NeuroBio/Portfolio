const experienceContainer = d3.select('#experiences');

// Corporate Experience
experienceContainer.append('h2').text('Corporate Experience');
const corporateButton = 'Corporate Experience';
PortfolioData.experiences.corporate.forEach((experience) => buildAccordion(corporateButton, experience));


// Education
experienceContainer.append('h2').text('Education');
const educationButton = 'Education';
PortfolioData.experiences.education.forEach((experience) => buildAccordion(educationButton, experience));


function buildAccordion (buttonTitle, experience) {
	const { organization, safeId, dateRange, positions, achievements, publications, startExpanded } = experience;

	const isExpandable = (positions.length > 0 || achievements.length > 0 || publications.length > 0);
	const epoch = experienceContainer.append('article')
		.attr('class', 'epoch');
	const button = epoch.append('button')
		.attr('title', buttonTitle)
		.attr('id', safeId)
		.attr('type', 'button')
		.attr('class', 'accordion-header');

	if (isExpandable) {
		button.attr('onClick', `${startExpanded ? 'collapse' : 'expand'}Accordion('${safeId}')`);
	}
	
	const header = button.append('h3');
	const mainText = header.append('span');
	mainText.append('span').text(organization);
	mainText.append('b').text('  |  ');
	mainText.append('span').text(experience.getHighlightedText()).attr('class', 'position-text');
	header.append('span').attr('class', 'dates').text(dateRange);
	
	if (isExpandable) {
		button.append('i').attr('class', `accordion-icon fas fa-${startExpanded ? 'minus': 'plus'}-circle`);
	}

	const epochContents = epoch.append('section')
		.attr('id', `${safeId}-panel`)
		.attr('class', `accordion-panel ${startExpanded ? 'expanded' : 'collapsed'}`);

	if (positions.length > 0) {
		epochContents.append('h4').text('Positions');
		const positionList = epochContents.append('ul');
		positions.forEach((position) => {
			const positionEntry = positionList.append('li')
				.attr('class', 'position')

			positionEntry.append('span').text(position.title);
			const endPeriod = position.endYear === PRESENT
				? PRESENT
				: `${position.endMonth}, ${position.endYear}`
			positionEntry.append('i').text(`(${position.startMonth}, ${position.startYear} - ${endPeriod})`);
		});
	}

	if (achievements.length > 0) {
		epochContents.append('h4').text('Achievements');
		const achievementsList = epochContents.append('ul');
		achievements.forEach((achievement) => {
			const achievementEntry = achievementsList.append('li')
				.attr('class', 'achievement')

			achievementEntry.append('span').text(achievement.text);
			achievementEntry.append('i').text(achievement.date);
		});
	}

	if (publications.length > 0) {
		epochContents.append('h4').text('Publications');
		const publicationList = epochContents.append('ul');
		publications.forEach((publication) => {
			const publicationEntry = publicationList.append('li')
				.attr('class', 'publication')
			publicationEntry.append('span').html(publication.citation);
			const publicationLinks = publicationEntry.append('span')
				.attr('class', 'publicationLinks');
			const articleLink = publicationLinks.append('a')
				.attr('aria-label', 'journal article link')
				.attr('href', publication.articleLink)
				.attr('class', 'publicationLink');
			articleLink.append('i').attr('class', 'fas fa-file-invoice')
			if (publication.githubLink) {
				const githubLink = publicationLinks.append('a')
					.attr('aria-label', 'github repo link')
					.attr('href', publication.githubLink)
					.attr('class', 'publicationLink');
				githubLink.append('i').attr('class', 'fab fa-github-square')	
			}
		});
	}
}

function expandAccordion (organization) {
	console.log('expanding...', organization)
	d3.select(`#${organization}`)
		.attr('onClick', `collapseAccordion('${organization}')`)
	d3.select(`#${organization} i`)
		.attr('class', 'accordion-icon fas fa-minus-circle');
	d3.select(`#${organization}-panel`)
		.attr('class', 'accordion-panel expanded');
}

function collapseAccordion (organization) {
	console.log('collapsing...', organization)
	d3.select(`#${organization}`)
		.attr('onClick', `expandAccordion('${organization}')`);
	d3.select(`#${organization} i`)
		.attr('class', 'accordion-icon fas fa-plus-circle');
	d3.select(`#${organization}-panel`)
		.attr('class', 'accordion-panel collapsed');
}
