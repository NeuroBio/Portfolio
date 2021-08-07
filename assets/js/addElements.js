const icons = [
    { type: 'img', link: 'assets/img/logos/r.svg' },
    { type: 'img', link: 'assets/img/logos/c-sharp.svg' },
    { type: 'i', link: 'fa-python' },
    { type: 'i', link: 'fa-angular' },
    { type: 'img', link: 'assets/img/logos/postgres.svg' },
]
const languageIcons = d3.select('#icon-row');


icons.forEach(icon => {
    if (icon.type === 'img') {
        languageIcons.append('div').attr('class', 'col')
            .append('i').attr('class', 'fab fa-3x')
            .append('img').attr('class', 'icon').attr('src', icon.link);
    } else {
        languageIcons.append('div').attr('class', 'col')
        .append('i').attr('class', `fab fa-3x fa-brands ${icon.link}`);
    }
});

{/*  <div class="col">
                        <i class="fab fa-brands fa-python fa-3x"></i>
                    </div> */}