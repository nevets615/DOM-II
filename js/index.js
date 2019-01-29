// Your code goes here


const logoHeading = 
document.querySelector(".content-section");

logoHeading.addEventListener('mouseOver', e => {
document.querySelector(".content-section").style.color = "red";

});


const h2text = document.querySelector('h2');
h2text.addEventListener('mouseDown', e => {
    document.querySelector("h2").innerHTML = "The mouse button is held down.";
});

const h4text = document.querySelector('h4');
logoHeading.addEventListener('wheel', e => {

    let x = event.deltaX;
    document.querySelector('h4').innerHTML = x;
  

});
        
const logoHeading = document.querySelector("logo-heading");
logoHeading.addEventListener("load", e => {

    document.querySelector("logo-heading").focus();

});
            
const logoHeading = document.querySelector('logo-heading');
logoHeading.addEventListener('blur', e => {
    document.querySelector("logo-heading").blur();
});
                
const logoHeading = document.querySelector('logo-heading');
logoHeading.addEventListener('resize', e => {

    
    

});
                    
const logoHeading = document.querySelector('logo-heading');
logoHeading.addEventListener('scroll', e => {

    document.getElementById("logo-heading").innerHTML = "something happened";

});
                    
const logoHeading = document.querySelector('logo-heading');
logoHeading.addEventListener('select', e => {

    document.querySelector("logo-heading").innerHTML = "something happened";


});
                            
const logoHeading = document.querySelector('logo-heading');
logoHeading.addEventListener('dblclick', e => {

});
                                
const logoHeading = document.querySelector('logo-heading');
logoHeading.addEventListener('click', e => {


});
