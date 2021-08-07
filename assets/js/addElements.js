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


// add project pop ups
const body = d3.select('body');
projectPopups.forEach(project => {
    // add the modal
    const popup = body
        .append('div').attr('class', 'modal portfolio-modal mfp-hide').attr('id', `portfolio-modal-${project.number}`)
        .append('div').attr('class', 'portfolio-modal-dialog')
            .attr('onClick', `if (event.srcElement==this) {$('#portfolio-modal-${project.number}').modal('hide');}`)
        .append('div').attr('class', 'bg-tertiary smooth-corners pop-up');

    //  add header and content slots
    popup
        .append('h2').attr('class', 'text-secondary text-uppercase bg-quaternary align-apart').text(project.title)
        .append('a').attr('class', 'close-button portfolio-modal-dismiss').attr('href', '#').attr('data-dismiss', 'modal')
        .append('i').attr('class', 'fa fa-2x fa-times close-link');
    const content = popup.append('div').attr('class', 'center-contents container');

    // add top image, and slot for description and links (content)
    content.append('img').attr('class', 'fit-image mb-5').attr('alt', '')
        .attr('src', `assets/img/portfolio/project${project.number}.png`);
    const description = content.append('div').attr('class', 'col-lg-8');
    description.append('hr');
    description.append('p').text(project.desc);
    
    // Tools
    const tools = description.append('p');
    tools.append('b').text('Tools and Languages: ');
    tools.append('span').text(project.tools);
    description.append('hr');
    
    // Links to code and website
    const links = description.append('div').attr('class', 'text-center');
    links.append('a').text('Live Website').attr('class', 'btn btn-primary')
        .attr('href', project.live);
    links.append('a').text('View Code').attr('class', 'btn btn-primary')
        .attr('href', project.gitHub);
    description.append('br');
});
