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

currentPageName === Page.HOME ? createAsCurrentPage('Projects') : createAsLink('./projects.html', 'Projects');
currentPageName === Page.ABOUT ? createAsCurrentPage('About') : createAsLink('./about.html', 'About');
currentPageName === Page.EXPERIENCE ? createAsCurrentPage('Experience') : createAsLink('./experience.html', 'Experience');

function createAsLink(link, text) {
	linkList.append('li').append('a')
		.attr('href', link)
		.attr('class', 'link-button')
		.text(text);
}

function createAsCurrentPage (text) {
	linkList.append('li').append('span')
		.attr('id', 'current-page')
		.text(text);
}