// hide and show back to top button
document.body.onscroll = function ()
{
    let toTop = document.getElementById('back-to-top');
    if(window.scrollY >= 100)
    {
    toTop.style.display = 'block';
    }else
    {
    toTop.style.display = "none";
    }
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