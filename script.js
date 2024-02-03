document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('header nav ul li a');
    const header = document.querySelector('.header');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            const offsetTop = targetElement.offsetTop;

            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        });
    });

    window.addEventListener('scroll', function() {
        var header = document.querySelector('header');
        var scrollPosition = window.scrollY;
    
        if (scrollPosition > 200) {
            header.classList.add('header-change');
        } else {
            header.classList.remove('header-change');
        }
    });
    
});
