const circle = document.querySelector('.progress-ring__circle');
const radius = circle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;
const input = document.querySelector('.percent');
const toggle_animate = document.querySelector('.switch-animated');
const animate = document.querySelector('.progress-ring__circle');
const hider = document.querySelector('.hider');
const ring = document.querySelector('.progress-ring');
let isAnimate = 1;
let isHidden = 0;

input.addEventListener('change', function() {
    this.value = this.value.replace(/[^0-9\-]/g, '');
    this.value = this.value.replace(/^0+/, '');
    if (input.value > 100) input.value = 100;
    else if (input.value < 0) input.value = 0;
    setProgress(input.value);
})

hider.addEventListener('change', function() {
    if(isHidden){
        isHidden = 0;
        ring.style.display = 'block'
    }else{
        isHidden = 1;
        ring.style.display = 'none'
    }
})

toggle_animate.addEventListener('change', function() {
    if(isAnimate){
        isAnimate = 0;
        animate.style.transition = '0s'
    }else{
        isAnimate = 1;
        animate.style.transition = '1s'
    }
})

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = circumference;

function setProgress(percent){
    const offset = circumference - percent / 100 * circumference
    circle.style.strokeDashoffset = offset;
}
setProgress(75)


// function toggle(el) {
//     isHidden(el) ? show(el) : hide(el)
// }
// function isHidden(el) {

//     var width = el.offsetWidth, height = el.offsetHeight,
//         tr = el.nodeName.toLowerCase() === "tr"



//     return width === 0 && height === 0 && !tr ?

//         true : width > 0 && height > 0 && !tr ? false : getRealDisplay(el)

// }