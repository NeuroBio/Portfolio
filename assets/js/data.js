const staticText = {
    brand: `Software engineer looking to work with a collaborative team in data
    analysis and software development.  Earned PhD from Vanderbilt University
    in computational biology with five publications.  Took a course in R, and
    self-taught in C#, Angular, typescript, HTML, and CSS.  Earned a
    Certificate in Data Analysis from University of Miami, learning Excel,
    VBA, Python, and SQL.  Developed three live websites and currently acting
    as a consultant for tech start-up TrustiPhi LLC to design and implement
    the frontend for their flagship application. Engages in high level
    discussions with business owners and programmers alike to propose solutions
    to challenging big picture problems.  Enjoys automating workflow to make
    tasks faster, easier, and repeatable.  Strives to write readable code and
    minimize code debt.  Asks for and offers help readily, so that no one is
    reinventing the wheel.  Well positioned to provide the creativity of an
    artist and logical approach of a scientist to application development.`,
    about: `I am scientist redesigning myself into a software engineer.
    I live for overcoming complex challenges and aim to make 
    applications and data stories that are efficient, fast, and
    aesthetically pleasing.`
}

const navLinks = ['Portfolio', 'About', 'Experience', 'Connect'];

const projects = [
    {
        type: 'Javascript',
        showcase: [
            { title: 'Bacterial Biodiversity', number: 4 },
            { title: 'VtM Maps', number: 6 }
        ]
    },
    {
        type: 'Angular',
        showcase: [
            { title: 'Card Database', number: 3 },
            { title: 'Arecace', number: 1 },
            { title: 'Creanza Lab Website', number: 2 }
        ]
    },
    {
        type: 'C# Blazor',
        showcase: [
            { title: 'Song Evolution Model', number: 5 }
        ]
    },
];

const unliveProjects = [
    {
        name: 'Song Evolution Model R Package',
        link: 'https://github.com/NeuroBio/SEM_R_Package',
        languages: 'R'
    },
    {
        name: 'MechaCar Statistical Analysis',
        link: 'https://github.com/NeuroBio/MechaCar_Statistical_Analysis',
        languages: 'R'
    },
    {
        name: 'Mission To Mars Web Scraping',
        link: 'https://github.com/NeuroBio/Mission-to-Mars/',
        languages: 'Python, MongoDB'
    },
    {
        name: 'Movies ETL',
        link: 'https://github.com/NeuroBio/Movies-ETL',
        languages: 'Python, SQL'
    },
    {
        name: 'PyBer Analysis',
        link: 'https://github.com/NeuroBio/PyBer_Analysis',
        languages: 'Python'
    },
    {
        name: 'World Weather Analysis',
        link: 'https://github.com/NeuroBio/World_Weather_Analysis',
        languages: 'Python, APIs'
    }
];

const icons = [
    { type: 'img', link: 'assets/img/logos/r.svg' },
    { type: 'img', link: 'assets/img/logos/c-sharp.svg' },
    { type: 'i', link: 'fa-python' },
    { type: 'i', link: 'fa-angular' },
    { type: 'img', link: 'assets/img/logos/postgres.svg' },
];

const projectPopups = [
    {
        title: 'Arecace Website',
        number: 1,
        desc: `The website for my original worldbuilding and story project set on the
        fictional planet Arecace.  All of the writing and the majority of the
        art for Arecace were created by me.  This was the first website I
        developed in Angular and remains my testing ground to figure out how to
        build new web components or learn new techniques.  I plan to refactor
        the code in the future to reflect what I’ve learned in the last 3 years.`,
        tools: 'Angular, Firebase, Python, GCP',
        gitHub: 'https://github.com/NeuroBio/ArecaceWebsite',
        live: 'https://arecace.com/home'
    },
    {
        title: 'Creanza Lab Website',
        number: 2,
        desc: `While a member of the Creanza lab, I led a team of novice
        coders, comprised of individuals who had never used Angular, to design and launch 
        the new Creanza Lab website.`,
        tools: 'Angular, Firebase',
        gitHub: 'https://github.com/lab-example-organization/CreanzaLabWebsite',
        live: 'https://creanzalab.com/'
    },
    {
        title: 'Pokémon Card Database',
        number: 3,
        desc: `My most recent Angular project, the Pokémon card database was
        designed to let me upgrade from using an error-ridden
        google doc to catalogue my card collection to an online
        database.   The new interface allows me to quickly update
        my collection and view key information (such as set
        completion statistics) that I previously worked out
        manually.  Although it is not yet integrated into the
        database, the repo includes a python script that pulls
        card set expansion information from Bulbepedia using the
        Wikimedia APIs and cleans it into the format my database expects,
        automating the extract and transform procedure.  The data
        is then manually loaded using an interface on the website.
        In the future, I would like to convert this script into a
        google cloud platform cloud function that I can call on
        demand to load new set expansions into the database on the
        fly.`,
        tools: 'Angular, Firebase, Python, GCP',
        gitHub: 'https://github.com/NeuroBio/pokemon-card-database',
        live: 'https://carddatabase-6dfef.web.app/Masterlist'
    },
    {
        title: 'Bacterial Biodiversity',
        number: 4,
        desc: `This was one of the projects I completed while taking a Data Analytics bootcamp
        from the University of Miami.  Given a JSON object of sample data, I was
        expected to create three interactive charts to display key information from
        each sample for a javascript website.  I was then tasked with customizing
        the website to be more aesthetically pleasing and mobile responsive.`,
        tools: 'Javascript with D3.js and Plotly.js',
        gitHub: 'https://github.com/NeuroBio/Bacteria-Diversity',
        live: 'https://neurobio.github.io/Bacteria-Diversity/'
    },
    {
        title: 'Song Evolution Model',
        number: 5,
        desc: ` For my thesis work, I wanted to study how different evolutionary
        pressures affect song learning in birds.  I coded an agent-based
        simulation model in R, and refactored it into C#, so that it would
        run faster.  To allow other researchers that might want to use the
        model to see how it works without downloading the C# library or R package,
        I used the web assembly tool Blazor to convert the C# library into
        this web app.`,
        tools: 'C#, Blazor, Web Assembly, R',
        gitHub: 'https://github.com/NeuroBio/SEMWebApp',
        live: 'https://neurobio.github.io/SEMWebApp/release/SEMWebApp/dist/'
    },
    {
        title: 'Vampire the Masquerade Maps',
        number: 6,
        desc: `While working on the maps module for my Data Analysis bootcamp,
        I got very excited about how easy leaflet was to use and how
        professional the final maps looked.  It reminded me of my Vampire
        the Masquerade campaign.  During the game, I had struggled to
        commuicate with my players about where locations were when using static
        screenshots of real maps.  I decided to assemble a quick reference map
        based on that game, where I could easily mark key locations
        for players, while giving them the freedom to explore the
        surrounding areas.  While implementing the world map markers, I
        realized I could also use my custom city map with leaflet and
        added it to the website.  Finally, I decided to include additional
        information about the game characters in the website, as being able
        to check who a character is and where they are quickly could 
        save game time that would otherwise be skimming through handwritten notes.
        I am pleased with the outcome and look forward to reusing this code
        for the next game I host.`,
        tools: 'Javascript with D3.js and Leaflet',
        gitHub: 'https://github.com/NeuroBio/VtM-Maps',
        live: 'https://neurobio.github.io/VtM-Maps/'
    },
];

const credentials = [
    {
        where: 'TrustiPhi LLC',
        when: 'Aug 2020 - Present',
        what: 'Programming Consultant',
        descInnerHTML: `Using an iterative, mockup process, completed an extensive
        redesign of TrustiPhi’s flagship angular app to provide a consistent,
        intuitive user-experience.  Responsible for developing new features of
        the redesigned application including resolvers and unit tests.  Extended
        and improved base functionality as well as implementing changes to meet
        web accessibility standards.  As part of this project, wrote over 50
        JIRA tasks.`
    },
    {
        where: 'University of Miami',
        when: 'May 2021 - October 2021',
        what: 'Certificate in Data Analytics',
        descInnerHTML: ` Learned Excel, VBA, Python, PostgreSQL, and techniques
        for big data analytics during a 24-week course. See
        <a href="https://bootcamp.miami.edu/data/">course description.</a>`
    },
    {
        where: 'Vanderbilt University',
        when: 'May 2013 - Oct 2019',
        what: 'Ph.D. in Computational Biology',
        descInnerHTML: ` <ol><li>Examined how birdsong evolves using a
        simulation model I developed in R and C#.</li> <li>Compiled published
        data and performed meta data analysis to understand the relationship
        between birdsong complexity and reproductive success.</li></ol>
        <i>Thesis Advisors:</i> Dr. Donna Webb (2014-2017, deceased) & Dr.
        Nicole Creanza (2017-2019)`,
        publications: [
            {
                citationInnerHTML: `<b>C. Robinson</b>, N. Creanza. (2021). Modeling the evolutionary
                interactions of sexual selection and learning strategies on the duration
                of song-learning in birds. <i>PLoS Computational Biology</i>. (under review).`,
                github: 'https://github.com/CreanzaLab/SongEvolutionModel',
            },
            {
                citationInnerHTML: ` R. Gordon, A. Ravignani, J. Hyland Bruno, <b>C. Robinson</b>, A. Scartozzi,
                R. Embalabala, M. Niarchou, 23andMe Research Team, N. Cox, N. Creanza. (2021)
                Linking the genomic signatures of human beat synchronization and learned
                song in birds. <i>Phil Trans B</i>. 376(1835)`,
                link: 'https://royalsocietypublishing.org/doi/abs/10.1098/rstb.2020.0329'
            },
            {
                citationInnerHTML: `<b>C. Robinson</b>, K. Snyder, N. Creanza. (2019).
                Correlated evolution between repertoire size and song plasticity predicts that
                sexual selection on song promotes open-ended learning. <i>eLife</i>. 8: e44454.`,
                github: 'https://github.com/CreanzaLab/SongLearningEvolution',
                link: 'https://elifesciences.org/articles/44454',
                press: [
                    {
                        citationInnerHTML: ` PRESS: <i>The Conversation</i>, September 3, 2019 - Complex birdsongs help biologists piece together the evolution of lifelong learning`,
                        link: 'https://theconversation.com/complex-birdsongs-help-biologists-piece-together-the-evolution-of-lifelong-learning-122009'
                    },
                    {
                        citationInnerHTML: `PRESS: <i>Research News @ Vanderbilt</i>, High standards of female songbirds could be driving their mates to evolve`,
                        link: 'https://news.vanderbilt.edu/2019/09/04/high-standards-of-female-songbirds-could-be-driving-their-mates-to-evolve/'
                    }
                ]

            },
            {
                citationInnerHTML: ` <b>C. Robinson</b>, N. Creanza. (2019). Species‐level repertoire size predicts
                a correlation between individual song elaboration and reproductive success.
                <i>Ecology and Evolution</i>. 9(14): 8362-8377.`,
                github: 'https://github.com/CreanzaLab/RepertoireSizeReproductiveSuccess',
                link: 'https://onlinelibrary.wiley.com/doi/full/10.1002/ece3.5418',
            },
            {
                citationInnerHTML: `<b>C. Robinson</b>, M. Patel, D. Webb. (2016). Super resolution microscopy is poised to
                reveal new insights into the formation and maturation of dendritic spines. <i>F1000Research</i>.
                5(F100 Faculty Rev), 1468.`,
                link: 'https://f1000research.com/articles/5-1468/v1'
            },
            {
                citationInnerHTML: `J. Evans, <b>C. Robinson</b>, M. Shi, D. Webb. (2015).
                The guanine nucleotide exchange factor (GEF) asef2 promotes dendritic spine
                formation via rac activation and spinophilin-dependent targeting.
                <i>Journal of Biological Chemistry</i>. 290, 10295-10398.`,
                link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4400342/',
            }
        ]
    },
    {
        where: 'Ohio Northern University',
        when: 'Aug 2009 - May 2013',
        what: 'B.S. in Molecular Biology and Behavioral Neuroscience',
        descInnerHTML: `Research Assistant 2010-2013<br>
        <i>Research Advisor:</i> Dr. Phillip Zoladz`,
        publications: [
            {
                citationInnerHTML: `P. Zoladz, H. Burke, <b>C. Robinson</b>, S. Woelke, B. Wentz, J. Pisansky,
                J. McKay, K. Dexter, J. Talbot. (2014). Blunted Corticosterone Response to
                Acute Predator Stress Results in Long-Term Spatial Memory Impairment. <i>SOJ Psychology</i>. 1(1): 7.`,
                link: 'https://symbiosisonlinepublishing.com/psychology/psychology02.php',
            },
            {
                citationInnerHTML: `H. Burke, <b>C. Robinson</b>, B. Wentz, J. McKay, K. Dexter., J. Pisansky, J. Talbot, P. Zoladz.
                (2013). Sex-specific impairment of spatial memory in rats following a reminder of predator stress.
                <i>Stress</i>. 16(4): 469-76.`,
                link: 'https://www.tandfonline.com/doi/abs/10.3109/10253890.2013.791276?journalCode=ists20',
            }
        ]
    }
];
