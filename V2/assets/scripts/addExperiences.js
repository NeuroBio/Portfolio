
function expandAccordion () {
	console.log('expanding...')
	d3.select('.accordion-header')
		.attr('onClick', 'collapseAccordion()');
	d3.select('.accordion-panel')
		.attr('class', 'accordion-panel expanded');
}

function collapseAccordion () {
	console.log('collapsing...')
	d3.select('.accordion-header')
		.attr('onClick', 'expandAccordion()');
	d3.select('.accordion-panel')
		.attr('class', 'accordion-panel collapsed');
}
