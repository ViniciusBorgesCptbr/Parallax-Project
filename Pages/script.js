let text = document.getElementById('text');
let sun = document.getElementById('sun')
let cloud1 = document.getElementById('clouds');
let cloud2 = document.getElementById('cloud');
let cloud3 = document.getElementById('cloudstree');

//before assaingment get the value of the property of the element
window.addEventListener('scroll', () => {
    let value = window.scrollY;
    console.log(value);
    
    text.style.marginTop = value * 2.5 + 'px';
    sun.style.marginTop = value * 2 + 'px';
    cloud1.style.left = value * -1.5 + 'px';
    cloud2.style.left = value * 2 + 'px'; //problemas na hora de scrollar
    cloud3.style.marginTop = value * 2.5 + 'px';

})

// gradiant yellow background