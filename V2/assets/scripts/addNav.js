const Page = Object.freeze({
	HOME: 'home-page',
	ABOUT: 'about-page',
});

const nav = d3.select('nav');

const linkList = nav.append('ul')
	.attr('class', 'flatten');


const currentPage = d3.select('body');
const currentPageName = currentPage.attr('id');
const onHome = currentPageName === Page.HOME;
const onAbout = currentPageName === Page.ABOUT;

linkList.append('li').append('a')
	.attr('href', onAbout ? '' : 'pages/about.html')
	.attr('class', 'link-button')
	.text('About');

linkList.append('li').append('a')
	.attr('href', onHome ? '#projects' : '../index.html#projects')
	.attr('class', 'link-button')
	.text('Projects');


linkList.append('li').append('a')
	.attr('href', onHome ? '#experience' : '../index.html#experience')
	.attr('class', 'link-button')
	.text('Experience');

linkList.append('li').append('a')
	.attr('href', '#connect') // every page as a footer where the connect info lives
	.attr('class', 'link-button')
	.text('Connect');
