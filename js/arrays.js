/* Date Variables */

var now = new Date();
now.setDate(now.getDate());
now = now.toDateString()

var currentYear = new Date().getFullYear()

var bday = new Date("October 16 " + currentYear).toDateString();

/* Background Image Array */

if (now == bday) {
    var images = ['assets/images/specialbg/01.jpg', 'assets/images/specialbg/02.jpg', 'assets/images/specialbg/03.jpg',
        'assets/images/specialbg/04.jpg', 'assets/images/specialbg/05.jpg', 'assets/images/specialbg/06.jpg',
        'assets/images/specialbg/07.jpg', 'assets/images/specialbg/08.jpg', 'assets/images/specialbg/09.jpg',
        'assets/images/specialbg/10.jpg'
    ];
    document.getElementsByClassName('background')[0].style.backgroundImage = 'url(' + images[Math.floor(
        Math.random() *
        images.length)] + ')';
    document.getElementsByClassName('background')[0].style.filter = 'blur(5px) brightness(50%)';
} else {
    var images = ['assets/images/bg/01.jpg', 'assets/images/bg/02.jpg', 'assets/images/bg/03.jpg',
        'assets/images/bg/04.jpg', 'assets/images/bg/05.jpg', 'assets/images/bg/06.jpg',
        'assets/images/bg/07.jpg', 'assets/images/bg/08.jpg', 'assets/images/bg/09.jpg',
        'assets/images/bg/10.jpg', 'assets/images/bg/11.jpg', 'assets/images/bg/12.jpg',
        'assets/images/bg/13.jpg', 'assets/images/bg/14.jpg', 'assets/images/bg/15.jpg',
        'assets/images/bg/16.jpg', 'assets/images/bg/17.jpg', 'assets/images/bg/18.jpg',
        'assets/images/gifbg/01.gif', 'assets/images/gifbg/02.gif', 'assets/images/gifbg/03.gif',
        'assets/images/gifbg/04.gif', 'assets/images/gifbg/05.gif', 'assets/images/gifbg/06.gif',
        'assets/images/gifbg/07.gif', 'assets/images/gifbg/08.gif'
    ];
    document.getElementsByClassName('background')[0].style.backgroundImage = 'url(' + images[Math.floor(
        Math.random() *
        images.length)] + ')';
}

/* Profile Icon Array */

if (now == bday) {
    var images = ['assets/images/logo/02.png'];
    document.getElementsByClassName('pfp')[0].src = images[Math.floor(
        Math.random() *
        images.length)];
} else {
    var images = ['assets/images/logo/01.png'];
    document.getElementsByClassName('pfp')[0].src = images[Math.floor(
        Math.random() *
        images.length)];
}