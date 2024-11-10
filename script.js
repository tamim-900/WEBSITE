let menuicon = document.querySelector('#menu-icon');
let novbar = document.querySelector('.navbar');




let section = document.querySelector('section');
let navlinks = document.querySelector('header nav  ul li a')



window.onscroll = ( ) => {
    section.foreEach(sec => {
        let top = window .scrollY;
        let offset  = sec.offset - 150;
        let height = sec.offsetHeight;
        let id =sec.getAttibute('id');


        if (top >= offset && top < offset + height ){
            navlinks.foreEach(link => {
                link.classlist.remove('active');
                document.querySelector('header nav ul li a[href*=' + id + ' ] ')
            })
        }

    })

}
