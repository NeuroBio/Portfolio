const footer = d3.select('footer');

const socials = footer.append('section')
	.attr('id', 'connect')
	.text('Connect with me:');
const socialsList = socials.append('ul')
	.attr('class', 'flatten');

addSocial({
	socialsList,
	link: 'https://github.com/NeuroBio',
	text: 'Link to my Github',
	iconClass: 'fab fa-github',
});
addSocial({
	socialsList,
	link: 'https://www.linkedin.com/in/cristina-robinson-88938052/',
	text: 'Link to my LinkedIn',
	iconClass: 'fab fa-linkedin',
});
addSocial({
	socialsList,
	link: 'mailto: cristinamrobinson@gmail.com',
	text: 'Link to my email',
	iconClass: 'fas fa-envelope',
});

const resume = socialsList.append('li')
	.attr('id', 'resume');
const resumeDownload = resume.append('a')
	.attr('crossorigin','anonymous')
	.attr('href', '../assets/C.Robinson-Resume.pdf')
	.text('Resume ');
resumeDownload.append('i').attr('class', 'fas fa-download')


const copyRight = footer.append('section')
	.attr('id', 'copyright')
copyRight.append('small')
	.attr('id', 'copyright-text')
	.text(getCopyRightWithCurrentYear());


function addSocial({ socialsList, link, text, iconClass }) {
	const social = socialsList.append('li').append('a')
		.attr('aria-label', text)
		.attr('href', link);
	social.append('i').attr('class', iconClass);
}

function getCopyRightWithCurrentYear() {
	const year = new Date().getFullYear()
	let copyright = 'Copyright © Cristina Robinson 2021'
	if (year !== 2021) {
		copyright += `-${year}`
	}
	return copyright;
}

