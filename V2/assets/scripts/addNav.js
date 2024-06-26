const Page = Object.freeze({
	HOME: 'home-page',
	ABOUT: 'about-page',
	EXPERIENCE: 'experience-page',
});

const nav = d3.select('nav');

const linkList = nav.append('ul')
	.attr('class', 'flatten');


const currentPage = d3.select('body');
const currentPageName = currentPage.attr('id');
const onHome = currentPageName === Page.HOME;

if (currentPageName !== Page.ABOUT) {
	linkList.append('li').append('a')
		.attr('href', onHome ? 'pages/about.html' : './about.html')
		.attr('class', 'link-button')
		.text('About');
}

if (!onHome) {
	linkList.append('li').append('a')
		.attr('href', '../index.html')
		.attr('class', 'link-button')
		.text('Projects');
}

if (currentPageName !== Page.EXPERIENCE) {
	linkList.append('li').append('a')
		.attr('href', onHome ? 'pages/experience.html' : './experience.html')
		.attr('class', 'link-button')
		.text('Experience');
}

// linkList.append('li').append('a')
// 		.attr('href', '#connect') // every page as a footer where the connect info lives
// 		.attr('class', 'link-button')
// 		.text('Connect');
