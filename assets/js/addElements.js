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



// Add Project Popups
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



// Add Credentials
credentials.forEach((cred, i) => {
    // set up credential header
    const container = d3.select('#credentials').append('div').attr('class', 'credential');
    container
        .append('h3').attr('class', 'location').text(`${cred.where} | `)
        .append('span').attr('class', 'credential-date text-muted').text(cred.when);
    container.append('p').attr('class', 'lead').text(cred.what);

    // set up credential body
    const desc = container.append('p').attr('class', 'credential-description');
    desc.html(cred.descInnerHTML);

    // add publications
    if (cred.publications) {
        desc.append('br');
        desc.append('br');
        desc.append('h4').html('<i>Publications:</i>')
        const pubList = desc.append('ol');
        cred.publications.forEach(pub => {
            const pubDisplay = pubList.append('li').html(pub.citationInnerHTML);
            // add links to github and article
            if (pub.github) {
                pubDisplay
                    .append('a').attr('class', 'btn-pubs text-center rounded-circle')
                        .attr('aria-label', 'github-link').attr('href', pub.github)
                    .append('i').attr('class', 'fab fa-github');
            }
            if (pub.link) {
                pubDisplay
                .append('a').attr('class', 'btn-pubs text-center rounded-circle')
                    .attr('aria-label', 'Link-to-article').attr('href', pub.link)
                .append('i').attr('class', 'bi bi-journal-richtext');
            }
            // add press releases
            if (pub.press) {
                const pressDisplay = pubDisplay.append('ul');
                pub.press.forEach(press => {
                    pressDisplay
                        .append('li').html(press.citationInnerHTML)
                        .append('a').attr('class', 'btn-pubs text-center rounded-circle')
                            .attr('aria-label', 'Link-to-article').attr('href', press.link)
                        .append('i').attr('class', 'bi bi-newspaper');
                });
            }
        });
    }
    if (i < credentials.length - 1) {
        container.append('hr').attr('class', 'credential-divider');
    }
});


{/* 
       

                <ul>
                    <li>
                        PRESS: <i>The Conversation</i>, September 3, 2019 - Complex birdsongs help biologists piece together the evolution of lifelong learning
                        <a class="btn-pubs text-center rounded-circle" aria-label="Link to article"
                            href="https://theconversation.com/complex-birdsongs-help-biologists-piece-together-the-evolution-of-lifelong-learning-122009">
                            <i class="bi bi-newspaper"></i>
                        </a>
                    </li>
                    <li>
                        PRESS: <i>Research News @ Vanderbilt</i>, High standards of female songbirds could be driving their mates to evolve
                        <a class="btn-pubs text-center rounded-circle" aria-label="Link to article"
                            href="https://news.vanderbilt.edu/2019/09/04/high-standards-of-female-songbirds-could-be-driving-their-mates-to-evolve/">
                            <i class="bi bi-newspaper"></i>
                        </a>
                    </li>
                </ul>
            </li>
            <li>
                <b>C. Robinson</b>, N. Creanza. (2019). Species‐level repertoire size predicts
                a correlation between individual song elaboration and reproductive success.
                <i>Ecology and Evolution</i>. 9(14): 8362-8377.
                <a class="btn-pubs text-center rounded-circle" aria-label="Link to article"
                    href="https://onlinelibrary.wiley.com/doi/full/10.1002/ece3.5418">
                    <i class="bi bi-journal-richtext"></i>
                </a>
                <a class="btn-pubs text-center rounded-circle" aria-label="github-link"
                    href="https://github.com/CreanzaLab/RepertoireSizeReproductiveSuccess">
                        <i class="fab fa-github"></i>
                </a>
            </li>
            <li>
                <b>C. Robinson</b>, M. Patel, D. Webb. (2016). Super resolution microscopy is poised to
                reveal new insights into the formation and maturation of dendritic spines. <i>F1000Research</i>.
                5(F100 Faculty Rev), 1468.
                <a class="btn-pubs text-center rounded-circle" aria-label="Link to article"
                    href="https://f1000research.com/articles/5-1468/v1">
                    <i class="bi bi-journal-richtext"></i>
                </a>
            </li>
            <li>
                J. Evans, <b>C. Robinson</b>, M. Shi, D. Webb. (2015).
                The guanine nucleotide exchange factor (GEF) asef2 promotes dendritic spine
                formation via rac activation and spinophilin-dependent targeting.
                <i>Journal of Biological Chemistry</i>. 290, 10295-10398.
                <a class="btn-pubs text-center rounded-circle" aria-label="Link to article"
                    href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4400342/">
                    <i class="bi bi-journal-richtext"></i>
                </a>
            </li>
        </ol>
    </p>
</div> */}
