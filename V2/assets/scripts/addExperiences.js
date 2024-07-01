const experienceContainer = d3.select('#experiences');

// Corporate Experience
experienceContainer.append('h2').text('Corporate Experience');
const corporateButton = 'Corporate Experience';
console.log(PortfolioData.experiences)
PortfolioData.experiences.corporate.forEach((experience) => {
	buildAccordion(corporateButton, experience);
});


// Education
experienceContainer.append('h2').text('Education');


function buildAccordion (buttonTitle, {
	safeId,
	organization,
	positions,
	achievements,
	startExpanded,
}) {
	const epoch = experienceContainer.append('article')
		.attr('class', 'epoch');
	const button = epoch.append('button')
		.attr('title', buttonTitle)
		.attr('id', safeId)
		.attr('type', 'button')
		.attr('class', 'accordion-header')
		.attr('onClick', `${startExpanded ? 'collapse' : 'expand'}Accordion('${safeId}')`);
	
	const lastPosition = positions[0];
	const firstPosition = positions[positions.length - 1];
	const startMonth = firstPosition.startMonth;
	const startYear = firstPosition.startYear;
	const endMonth = lastPosition.endMonth;
	const endYear = lastPosition.endYear;
	const endTime = endYear === PRESENT ? PRESENT : `${endMonth}, ${endYear}`

	const header = button.append('h3')
	const mainText = header.append('span')
	mainText.append('span').text(organization);
	mainText.append('b').text('  |  ');
	mainText.append('span').text(lastPosition.title).attr('class', 'position-text');
	header.append('span').text(`${startMonth}, ${startYear} - ${endTime}`).attr('class', 'dates');
	button.append('i').attr('class', `accordion-icon fas fa-${startExpanded ? 'minus': 'plus'}-circle`);

	const epochContents = epoch.append('section')
		.attr('id', `${safeId}-panel`)
		.attr('class', `accordion-panel ${startExpanded ? 'expanded' : 'collapsed'}`);

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
}

// function calculateTimeAtOrganization(params) {
// 	console.log(params)
// 	const startMonth = params.startMonth;
// 	const startYear = params.startYear;
// 	let endMonth = MonthValue[params.endMonth];
// 	let endYear = params.endYear;

// 	if (endYear === PRESENT) {
// 		endYear = new Date().getFullYear();
// 		endMonth = new Date().getMonth() + 1;
// 	}

// 	const fullYearMonths = (endYear - startYear) * 12;
// 	const firstYearExcludedMonths = (MonthValue[startMonth] - 1);
// 	const monthTotal = fullYearMonths - firstYearExcludedMonths + endMonth;

// 	return monthTotal < 12
// 		? `${monthTotal} months`
// 		: `${parseFloat((Math.round((monthTotal / 12) * 4) / 4).toFixed(2))} years`

// }

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
