// Your code goes here


const logoHeading = 
document.querySelector(".content-section");

logoHeading.addEventListener('mouseover', e => {
e.target.style.color = "red";
console.log(e);
});


const h2text = document.querySelector('h2');
h2text.addEventListener('mouseDown', e => {
e.target.innerHTML = "The mouse button is held down.";
});

const h4text = document.querySelector('h4');
logoHeading.addEventListener('wheel', e => {

e.target.style.fontSize = "20px";

});
        
const h4text = document.querySelector("h4");
logoHeading.addEventListener("load", e => {
e.Target.focus();

});
            
const contentSection = document.querySelector('.content-section');
logoHeading.addEventListener('blur', e => {
    e.target.blur();
});
                
const window = document.querySelector('.window');
window.addEventListener('resize', e => {
let a = 0;
let y = x += 2
    e.target.innerHTML = y;
    
});
                    
const inversecontent = document.querySelector('.content-section inverse-content');
logoHeading.addEventListener('scroll', e => {

  e.target.innerHTML = "something happened";

});
                    
const contentdestination = document.querySelector('.content-destination');
logoHeading.addEventListener('select', e => {

    e.target.innerHTML = "something happened";


});
                            
const logoHeading = document.querySelector('.logo-heading');
logoHeading.addEventListener('dblclick', e => {
e.tasrget.innerHTML = "I was double-clicked!";
});
                                
const newbtn = document.querySelector('btn');
newbtn.addEventListener('click', e => {
e.target.alert("Hello World!");
      
});

const navbar = document.querySelector(".nav");
navbar.addEventListener('click', e => {
    e.preventDefault();


});