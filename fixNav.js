var myID = document.getElementById('header');

var myScrollFunc = function()
{
    var y = window.scrollY;
    if (y >= 95) 
        {
            myID.className = 'page-header fixed'
        } 
    else 
        {
            myID.className = 'page-header'
        }
};

window.addEventListener("scroll", myScrollFunc);