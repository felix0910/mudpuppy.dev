let dvd = document.getElementById('dvd')
let x_incr = 1;
let y_incr = 1;
let x_mouse;
let y_mouse;

function init()
{
    dvd.style.position = 'absolute';
    dvd.style.zIndex = -1;
    dvd.style.top = Math.floor(Math.random() * (window.innerHeight - dvd.offsetHeight));
    dvd.style.left = Math.floor(Math.random() * (window.innerWidth - dvd.offsetWidth));
    //document.body.style.background = '#4d4d4d';
    setInterval(frame, 5);
}

function handle_collision() {
    let dvd_height = dvd.offsetHeight;
    let dvd_width = dvd.offsetWidth;
    let dvd_top = dvd.offsetTop;
    let dvd_left = dvd.offsetLeft;
    let win_height = window.innerHeight;
    let win_width = window.innerWidth;

    if(dvd_left <= 0 || dvd_left + dvd_width >= win_width)
    {
        x_incr = ~x_incr + 1;
    }

    if(dvd_top <= 0 || dvd_top + dvd_height >= win_height)
    {
        y_incr = ~y_incr + 1;
    }
    let xin = false;
    let yin = false;

   /* if(x_mouse > dvd_left && x_mouse < (dvd_left + dvd_width))
        xin = true;
    if(y_mouse > dvd_top && y_mouse < (dvd_top + dvd_height))
        yin = true;
    if(xin == true && yin == true)
    {
        dvd.style.top = Math.floor(Math.random() * (window.innerHeight - dvd_height));
        dvd.style.left = Math.floor(Math.random() * (window.innerWidth - dvd_width));
        x_incr = ~x_incr + 1;
        y_incr = ~y_incr + 1;
    }*/
}

function frame() {
    handle_collision();
    dvd.style.top = dvd.offsetTop + y_incr;
    dvd.style.left = dvd.offsetLeft + x_incr;
}

init();

document.onmousemove = function(e){
    x_mouse = e.clientX;
    y_mouse = e.clientY;
};