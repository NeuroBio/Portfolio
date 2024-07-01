const experienceContainer = d3.select('#experiences');

// Corporate Experience
experienceContainer.append('h2').text('Corporate Experience');
const corporateButton = 'Corporate Experience';
const educationButton = 'Education';

PortfolioData.experiences.corporate.forEach((experience) => {
	const mainText = buildAccordion(corporateButton, experience);

	const lastPosition = experience.positions[0];

	mainText.append('span').text(experience.organization);
	mainText.append('b').text('  |  ');
	mainText.append('span').text(lastPosition.title).attr('class', 'position-text');
});


// Education
experienceContainer.append('h2').text('Education');
PortfolioData.experiences.education.forEach((experience) => {
	const mainText = buildAccordion(educationButton, experience);

	mainText.append('span').text(experience.organization);
	mainText.append('b').text('  |  ');
	mainText.append('span').text(experience.credential).attr('class', 'position-text');
});

function buildAccordion (buttonTitle, { safeId, dateRange, positions, achievements, startExpanded }) {
	const isExpandable = (positions.length > 0 || achievements.length > 0);
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

	// return this part because it changes
	return mainText;
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
