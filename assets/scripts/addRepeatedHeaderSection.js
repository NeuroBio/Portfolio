const tagSection = d3.select('#header-info');


const upperSection = tagSection.append('section')
	.attr('id', 'header-w-avatar');

const avatarSection = upperSection.append('section')
	.attr('id', 'header-avatar-container');
avatarSection.append('img')
	.attr('id', 'header-avatar')
	.attr('alt', '');

const nameText = upperSection.append('section')
	.attr('id', 'header-title');
nameText.append('h1').text('Cristina Robinson')

tagSection.append('h2').text('Programmer - Scientist - Artist');