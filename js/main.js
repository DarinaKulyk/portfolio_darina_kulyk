const buttons = document.querySelectorAll(".tabs-menu-item");
const sections = document.querySelectorAll(".tab-item");


buttons.forEach((btn)=>{
    btn.addEventListener("click", ()=>{
        buttons.forEach((btn)=>{
            btn.classList.remove("active");
        });
        btn.classList.add("active");
        const id = btn.id;
        sections.forEach((section)=>{
            section.classList.remove("active");
        });
        const req = document.getElementsByClassName(`tab-item-${id}`);
        req[0].classList.add("active");
    })
})


let darkToggle = document.querySelector('#darkToggle');

darkToggle.addEventListener('click', ()=> {
    document.body.classList.toggle('dark');
    if(!document.body.classList.contains('dark')) {
        document.documentElement.style.setProperty('--bg', '#fff');
        document.documentElement.style.setProperty('--text', '#1A1A1A');
        document.documentElement.style.setProperty('--white', '#1A1A1A');
        document.documentElement.style.setProperty('--social-icon', '#1A1A1A');
    } else {
        document.documentElement.style.setProperty('--bg', '#111111');
        document.documentElement.style.setProperty('--text', '#C4C4C4');
        document.documentElement.style.setProperty('--white', '#fff');
        document.documentElement.style.setProperty('--social-icon', '#C4C4C4');

    }

});


document.querySelectorAll('.menu-item').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const id = this.getAttribute('data-anchor')

        if(id === 'projects') {
            document.querySelector('.tab-item.active .card-wrapper').scrollIntoView({
                behavior: 'smooth'
            });
        } else {
            document.querySelector(`#${id}`).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});