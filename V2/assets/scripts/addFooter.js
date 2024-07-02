const footer = d3.select('footer');

// add socials
const socials = footer.append('section')
	.attr('id', 'connect')
	.text('Connect with me:');
const socialsList = socials.append('ul')
	.attr('class', 'flatten');


const gitHub = socialsList.append('li').append('a')
	.attr('aria-label', 'Link to my Github')
	.attr('href', 'https://github.com/NeuroBio');
gitHub.append('i')
	.attr('class', 'fab fa-github');

const linkedIn = socialsList.append('li').append('a')
	.attr('aria-label', 'Link to my LinkedIn')
	.attr('href', 'https://www.linkedin.com/in/cristina-robinson-88938052/');
linkedIn.append('i')
	.attr('class', 'fab fa-linkedin');

const email = socialsList.append('li').append('a')
	.attr('aria-label', 'Link to my email')
	.attr('href', 'mailto: cristinamrobinson@gmail.com');
email.append('i')
	.attr('class', 'fas fa-envelope');

// add copyright
const copyRight = footer.append('section')
	.attr('id', 'copyright')
	.append('small')
	.attr('id', 'copyright-text')

// update as year passes
const year = new Date().getFullYear()
let copyright = 'Copyright © Cristina Robinson 2021'
if (year !== 2021) {
    copyright += `-${year}`
}
copyRight.text(copyright);
