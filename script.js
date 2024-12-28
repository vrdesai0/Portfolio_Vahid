let menu = document.getElementById('menu');
let cancel = document.getElementById('cancel');
let menulist = document.getElementById('menulist');

window.onresize = displayWindowSize;
window.onload = displayWindowSize;
 
  let w;
function displayWindowSize() {
    w = window.innerWidth;
    if (w<=768) {
        menu.style.display = 'block';
        
        menu.addEventListener('click', ()=> {
            menulist.style.display = 'block';
            cancel.style.display = 'block';
            menu.style.display = 'none';
        });
        cancel.addEventListener('click', ()=> {
    
            menulist.style.display = 'none';
            cancel.style.display = 'none';
            menu.style.display = 'block';
        });
    }
    else {
        menulist.style.display = 'none';
            cancel.style.display = 'none';
            menu.style.display = 'none';
    }
}

    



let exp = document.getElementById('exp');
let edu = document.getElementById('edu');
let sk = document.getElementById('sk');
let aboutbtn = document.getElementById('aboutbtn');

let exper = document.getElementById('exper');
let educ = document.getElementById('educ');
let skills = document.getElementById('skills');
let about = document.getElementById('about');

window.onload = activecall;

function activecall() {
    exper.classList.add('active');
    exp.classList.add('activebutton');
}
exp.addEventListener('click', ()=> {
    exper.classList.add('active');
    exp.classList.add('activebutton');

    educ.classList.remove('active');
    edu.classList.remove('activebutton');
    skills.classList.remove('active');
    sk.classList.remove('activebutton');
    about.classList.remove('active');
    aboutbtn.classList.remove('activebutton');
})
edu.addEventListener('click', ()=> {
    educ.classList.add('active');
    edu.classList.add('activebutton');

    exper.classList.remove('active');
    exp.classList.remove('activebutton');
    skills.classList.remove('active');
    sk.classList.remove('activebutton');
    about.classList.remove('active');
    aboutbtn.classList.remove('activebutton');
})
sk.addEventListener('click', ()=> {
    skills.classList.add('active');
    sk.classList.add('activebutton');

    exper.classList.remove('active');
    exp.classList.remove('activebutton');
    educ.classList.remove('active');
    edu.classList.remove('activebutton');
    about.classList.remove('active');
    aboutbtn.classList.remove('activebutton');
})
aboutbtn.addEventListener('click', ()=> {
    about.classList.add('active');
    aboutbtn.classList.add('activebutton');

    skills.classList.remove('active');
    sk.classList.remove('activebutton');
    exper.classList.remove('active');
    exp.classList.remove('activebutton');
    educ.classList.remove('active');
    edu.classList.remove('activebutton');
})

