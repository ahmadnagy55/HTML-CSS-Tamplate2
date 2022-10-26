document.body.onscroll = function ()
{
    let toTop = document.getElementById('back-to-top');
    toTop.style.display = "none";
    if(window.scrollY >= 200)
    {
    toTop.style.display = 'block';
    }else
    {
    toTop.style.display = "none";
    }
};