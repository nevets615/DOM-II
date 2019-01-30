// Your code goes here


const logoHeading = 
document.querySelector(".content-section");

logoHeading.addEventListener('mouseover', e => {
e.target.style.color = "red";
console.log(e);
});


const h2text = document.querySelector('h2');
h2text.addEventListener('mousedown', e => {
e.target.innerHTML = "The mouse button is held down.";
});

const h4text = document.querySelector('h4');
h4text.addEventListener('wheel', e => {

e.target.style.fontSize = "20px";

});
        
const destination = document.querySelector(".destination");
destination.addEventListener("load", e => {
e.Target.innerHTML = "something happened.";

});
            
const contentSection = document.querySelector('.content-section');
contentSection.addEventListener('blur', e => {
e.target.alert("something happened");
});
                
const windows = document.querySelector('.window');
windows.addEventListener('resize', e => {
let a = 0;
let y = a += 2;
    e.target.innerHTML = y;
    
});
                    
// const inversecontent = document.querySelector('.content-section inverse-content');
// inversecontent.addEventListener('scroll', e => {

//   e.target.innerHTML = "something happened";

// });
                    
const contentdestination = document.querySelector('.content-destination');
contentdestination.addEventListener('select', e => {

e.target.innerHTML = "something happened";


});
                            
const contentsection1 = document.querySelector('.logo-heading');
contentsection1.addEventListener('dblclick', e => {
console.log(`I was double-clicked!: ${e.target}`);

});
                                
const newbtn = document.querySelector('.btn');
newbtn.addEventListener('click', e => {
e.target.innerHTML = "hello world";
e.stopPropagation(); 
});

const navbar = document.querySelector(".nav");
navbar.addEventListener('click', e => {
    e.preventDefault();


});

const containerBtn = document.querySelector('.container');
containerBtn.addEventListener('click', e => {
console.log(`something happened ${e.target}`);

});