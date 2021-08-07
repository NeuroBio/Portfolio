// Add Nav Links
const nav = d3.select('#main-nav');
navLinks.forEach(link => {
    nav
        .append('li').attr('class', 'nav-item')
        .append('a').attr('class', 'nav-link').attr('href', `#${link.toLowerCase()}`).text(link)
});

// Add Projects
const projectsSection  = d3.select('#projectsSection');

projects.forEach((projectType, i) => {
    // project section header
    projectsSection.append('h3').text(`${projectType.type} Projects`)
    const projectRow = projectsSection.append('div').attr('class', 'row')

    // display for each project
    projectType.showcase.forEach(showcase => {
        const projectLink = projectRow
            .append('div').attr('class', 'col-md-6 col-lg-4')
            .append('a').attr('class', 'portfolio-item d-block mx-auto')
                .attr('data-toggle', 'modal').attr('data-target', `#portfolio-modal-${showcase.number}`);

        const projectInfo = projectLink
            .append('div').attr('class', 'portfolio-item-caption d-flex position-absolute h-100 w-100')
            .append('div').attr('class', 'portfolio-item-caption-content my-auto w-100 text-center text-white')
                .attr('id', `portfolio-item-${showcase.number}`);

        projectInfo.append('p').text(showcase.title);
        projectInfo.append('i').attr('class', 'fas fa-search-plus fa-2x');

        projectLink.append('img').attr('class', 'img-fluid')
            .attr('src', `assets/img/portfolio/project${showcase.number}.png`).attr('alt', '');
    });
    // divders between project sections
    if (i < projects.length - 1 ) {
        projectsSection.append('hr').attr('class', 'credential-divider hr-recolor')
    }
});

// Add Icons
const languageIcons = d3.select('#icon-row');

icons.forEach(icon => {
    if (icon.type === 'img') {
        languageIcons
            .append('div').attr('class', 'col')
            .append('i').attr('class', 'fab fa-3x')
            .append('img').attr('class', 'icon').attr('src', icon.link);
    } else {
        languageIcons
            .append('div').attr('class', 'col')
            .append('i').attr('class', `fab fa-3x fa-brands ${icon.link}`);
    }
});
