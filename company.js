const person1 = document.querySelector('.person1');
const widget = document.querySelector('#perso1Name');

person1.addEventListener('mouseover', function() {
    widget.style.height = '14.2%'; 
    widget.style.opacity = '0.7'; 
});

person1.addEventListener('mouseout', function() {
    widget.style.height = '0'; 
    widget.style.opacity = '0';
});

const person2=document.querySelector('.person2');
const widget2=document.querySelector('#perso2Name');

person2.addEventListener('mouseover',function(){
widget2.style.height='14.2%';
widget2.style.opacity='0.7';
})

person2.addEventListener('mouseout', function() {
  widget2.style.height = '0'; 
  widget2.style.opacity = '0';
});

const person3=document.querySelector('.person3');
const widget3=document.querySelector('#person3Name');

person3.addEventListener('mouseover',function(){
widget3.style.height='14.2%';
widget3.style.opacity='0.7';
})
person3.addEventListener('mouseout',function(){
  widget3.style.height='0';
  widget3.style.opacity='0';
})
