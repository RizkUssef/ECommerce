const COLOR_BTNS = document.querySelectorAll('.color');
COLOR_BTNS.forEach(color => {
    color.addEventListener('click', () => {
        let colorNameClass = color.className;
        if(!color.classList.contains('active-color')){
            let colorName = colorNameClass.slice(colorNameClass.indexOf(' ') + 1, colorNameClass.length);
            resetActiveBtns();
            color.classList.add('active-color');
            setNewColor(colorName)
        }
    });
})

// resetting all color btns
function resetActiveBtns(){
    COLOR_BTNS.forEach(color => {
        color.classList.remove('active-color');
    });
}

// set new color on the banner right 
function setNewColor(color){
    document.querySelector('.inner_bg .pro_img img').src = `../../img/try/${color}.png`;
}