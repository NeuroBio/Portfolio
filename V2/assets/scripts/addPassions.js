const passions = d3.select('#passion-list');
PortfolioData.passions.forEach((passion) => {
	const container = passions.append('p');
	
	const title = container.append('span')
		.attr('class', 'passion-title')
		.text(passion.title);
	title.append('br');
	
	container.append('span')
		.text(passion.description);
});
