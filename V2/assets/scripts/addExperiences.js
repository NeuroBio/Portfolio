const experienceContainer = d3.select('#experiences');

// Corporate Experience
experienceContainer.append('h2').text('Corporate Experience');
buildAccordion({
	organization: 'RF-SMART',
	buttonTitle: 'Corporate Experience',
	startExpanded: true,
	positions: [
		{
			title: 'Senior Software Developer',
			startMonth: MonthKey.DECEMBER,
			startYear: 2023,
			endMonth: PRESENT,
			endYear: PRESENT,
		},
		{
			title: 'Software Developer II',
			startMonth: MonthKey.JANUARY,
			startYear: 2023,
			endMonth: MonthKey.NOVEMBER,
			endYear: 2023,
		},
		{
			title: 'Software Developer I',
			startMonth: MonthKey.JANUARY,
			startYear: 2022,
			endMonth: MonthKey.DECEMBER,
			endYear: 2022,
		}
	],
	achievements: [
		`(2024) Won the "Most Likely To Implement" category in RF-SMART's HackFest`,
		`(2023) Became the dev team lead for Outbound Products`,
		`(2022) Earned a High Altitude Award - RF-SMART's individual merit award (nominated by manager)`,
		`(2022) Built an integration testing framework prototype to run our code in a 3rd party environment.`,
		`(2022 - 2024) Earned 6 DYSTs - RF-SMART's peer recognition award`,
	],
});


// Education
experienceContainer.append('h2').text('Education');


function buildAccordion ({
	organization,
	buttonTitle,
	positions,
	achievements,
	startExpanded,
}) {
	const epoch = experienceContainer.append('article')
		.attr('class', 'epoch');
	const button = epoch.append('button')
		.attr('title', buttonTitle)
		.attr('id', organization)
		.attr('type', 'button')
		.attr('class', 'accordion-header')
		.attr('onClick', `collapseAccordion('${organization}')`);
	
	const lastPosition = positions[0];
	const firstPosition = positions[positions.length - 1];
	const fullTimeAtOrganization = {
		startMonth: firstPosition.startMonth,
		startYear: firstPosition.startYear,
		endMonth: lastPosition.endMonth,
		endYear: lastPosition.endYear,
	}
	const timeAtOrganization = calculateTimeAtOrganization(fullTimeAtOrganization);
	const buttonText = `${organization}  -  ${lastPosition.title}, ${timeAtOrganization}`;
	button.append('h3').text(buttonText);
	button.append('i').attr('class', `accordion-icon fas fa-${startExpanded ? 'minus': 'plus'}-circle`);

	const epochContents = epoch.append('section')
		.attr('id', `${organization}-panel`)
		.attr('class', `accordion-panel ${startExpanded ? 'expanded' : 'collapsed'}`);

	if (positions.length > 1) {
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
			achievementsList.append('li')
				.attr('class', 'achievement')
				.text(achievement);
		});
	}
}

function calculateTimeAtOrganization(params) {
	console.log(params)
	const startMonth = params.startMonth;
	const startYear = params.startYear;
	let endMonth = MonthValue[params.endMonth];
	let endYear = params.endYear;

	if (endYear === PRESENT) {
		endYear = new Date().getFullYear();
		endMonth = new Date().getMonth() + 1;
	}

	const fullYearMonths = (endYear - startYear) * 12;
	const firstYearExcludedMonths = (MonthValue[startMonth] - 1);
	const monthTotal = fullYearMonths - firstYearExcludedMonths + endMonth;

	return monthTotal < 12
		? `${monthTotal} months`
		: `${parseFloat((Math.round((monthTotal / 12) * 4) / 4).toFixed(2))} years`

}

function expandAccordion (organization) {
	console.log('expanding...')
	d3.select(`#${organization}`)
		.attr('onClick', `collapseAccordion('${organization}')`)
	d3.select(`#${organization} i`)
		.attr('class', 'accordion-icon fas fa-minus-circle');
	d3.select(`#${organization}-panel`)
		.attr('class', 'accordion-panel expanded');
}

function collapseAccordion (organization) {
	console.log('collapsing...')
	d3.select(`#${organization}`)
		.attr('onClick', `expandAccordion('${organization}')`);
	d3.select(`#${organization} i`)
		.attr('class', 'accordion-icon fas fa-plus-circle');
	d3.select(`#${organization}-panel`)
		.attr('class', 'accordion-panel collapsed');
}
