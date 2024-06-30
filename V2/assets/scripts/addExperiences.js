const experienceContainer = d3.select('#experiences');

// Corporate Experience
experienceContainer.append('h2').text('Corporate Experience');
buildAccordion({
	organization: 'RF-SMART',
	buttonTitle: 'Corporate Experience',
	positions: [
		{
			position: 'Senior Software Developer',
			startMonth: MonthKey.DECEMBER,
			startYear: 2023,
			endMonth: PRESENT,
			endYear: PRESENT,
		},
		{
			position: 'Software Developer II',
			startMonth: MonthKey.JANUARY,
			startYear: 2023,
			endMonth: MonthKey.NOVEMBER,
			endYear: 2023,
		},
		{
			position: 'Software Developer I',
			startMonth: MonthKey.JANUARY,
			startYear: 2022,
			endMonth: MonthKey.NOVEMBER,
			endYear: 2022,
		}
	],
});


// Education
experienceContainer.append('h2').text('Education');


function buildAccordion ({
	organization,
	buttonTitle,
	positions
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
	const buttonText = `${organization} - ${calculateTimeAtCompany(fullTimeAtOrganization)}, ${lastPosition.position}`;
	button.append('h3').text(buttonText);
	button.append('i').attr('class', 'accordion-icon fas fa-plus-circle')
}

function calculateTimeAtCompany(params) {
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
	const firstYearExcludedMonths = (MonthValue[startMonth] - 1)
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
	d3.select(`#${organization} .accordion-panel`)
		.attr('class', 'accordion-panel expanded');
}

function collapseAccordion (organization) {
	console.log('collapsing...')
	d3.select(`#${organization}`)
		.attr('onClick', `expandAccordion('${organization}')`);
	d3.select(`#${organization} i`)
		.attr('class', 'accordion-icon fas fa-plus-circle');
	d3.select(`#${organization} .accordion-panel`)
		.attr('class', 'accordion-panel collapsed');
}
