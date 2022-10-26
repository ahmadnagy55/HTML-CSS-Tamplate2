// modify background navbar on scroll and (hide / show) back to top button
document.body.onscroll = function (){
    let toTop = document.getElementById('toTop'),
        fullWidthNav = document.getElementById('nav-full'),
        activeNaveEl = document.getElementById('active'),
        darkLogo = document.getElementById('dark-logo');
    toTop.innerText = ` ${Math.ceil(((window.scrollY * 100) / document.body.scrollHeight)) + 17}%`;
    window.scrollY > 100 ? toTop.classList.add('show') : toTop.classList.remove('show');
    window.scrollY > 500 ?
        (fullWidthNav.classList.add('scrolledNav'),
            activeNaveEl.classList.add('active'),
            darkLogo.setAttribute('src', './assist/logo-dark.png')) :
        (fullWidthNav.classList.remove('scrolledNav'),
            activeNaveEl.classList.remove('active'),
            darkLogo.setAttribute('src', './assist/logo-light.png'));
};
// show and hide search page 

    let searchIcon = document.getElementById('search'),
    hiddenPage= document.getElementById('hidden-page');
searchIcon.onclick = function () {
    hiddenPage.style.display = 'block';
}
let closeIcon = document.getElementById("icon-close");
closeIcon.onclick = function () {
    hiddenPage.style.display = 'none';
}

// make slider in header
let prev = document.getElementById('prev'),
    next = document.getElementById('next'),
    header = document.getElementById('header'),
    imgArray = ['./assist/business.jpg', './assist/map.jpg', './assist/photodune.jpg', './assist/5.jpg', './assist/6.jpg', './assist/8.jpg', './assist/11.jpg', './assist/14.jpg', './assist/17.jpg'],
    i = 0;

next.onclick = function () { 
    i++;
    i == imgArray.length ? i = 0 : '';
    header.style.backgroundImage = 'url(' + imgArray[i] + ')'
}
prev.onclick = function () { 
    i--;
    i < 0 ? i = imgArray.length-1 : '';
    header.style.backgroundImage = 'url(' + imgArray[i] + ')'
    console.log(i)
}