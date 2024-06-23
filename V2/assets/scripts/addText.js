const portfolioData = new PortfolioData();
d3.select('#teaser').text(portfolioData.teaser);
d3.select('#brand-statement').text(portfolioData.brandStatement);
// d3.select('#about-me').text(staticText.about);

// Copyright info - update as year passes
const year = new Date().getFullYear()
let copyright = 'Copyright © Cristina Robinson 2021'
if (year !== 2021) {
    copyright += `-${year}`
}
d3.select('#copyright-text').text(copyright);
