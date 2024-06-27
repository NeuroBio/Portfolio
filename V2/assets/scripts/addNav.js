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

if (currentPageName !== Page.ABOUT) {
	linkList.append('li').append('a')
		.attr('href', './about.html')
		.attr('class', 'link-button')
		.text('About');
}

if (currentPageName !== Page.HOME) {
	linkList.append('li').append('a')
		.attr('href', './projects.html')
		.attr('class', 'link-button')
		.text('Projects');
}

if (currentPageName !== Page.EXPERIENCE) {
	linkList.append('li').append('a')
		.attr('href', './experience.html')
		.attr('class', 'link-button')
		.text('Experience');
}

// linkList.append('li').append('a')
// 		.attr('href', '#connect') // every page as a footer where the connect info lives
// 		.attr('class', 'link-button')
// 		.text('Connect');
