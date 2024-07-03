const { books } = PortfolioData;

const bookList = d3.select('#book-list');

books.forEach((book) => {
	const bookEntry = bookList.append('li')
		.attr('class', 'book')

	bookEntry.append('a')
		.attr('class', 'book-link')
		.attr('href', book.link)
		.text(book.title)
	
	bookEntry.append('p')
		.text(book.description)

});
