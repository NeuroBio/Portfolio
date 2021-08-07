// Stored Text
d3.select('#brand-statement').text(staticText.brand);
d3.select('#about').text(staticText.about);

// Copyright info - update as year passes
const year = new Date().getFullYear()
let copyright = 'Copyright © Cristina Robinson 2021'
if (year !== 2021) {
    copyright += `-${year}`
}
d3.select('#copyright').text(copyright);
