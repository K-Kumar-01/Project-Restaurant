
let content_container = document.getElementById('content');
console.log(content_container);

let navbar = document.createElement('div');
navbar.id= 'navbar';

let info_conatainer = document.createElement('div');
info_conatainer.id='info_conatainer';

// create a home link
let brand = document.createElement('div');
brand.id='brand';
brand.innerHTML='BRAND';
navbar.appendChild(brand);

// create link for navigations and all
let navigation = document.createElement('div');
navigation.id = 'navigation'
let menu = document.createElement('span')
menu.innerHTML="Menu"
let contact_us = document.createElement('span')
contact_us.innerHTML='Contact Us'
let about_us = document.createElement('span')
about_us.innerHTML='About Us'
navigation.appendChild(menu)
navigation.appendChild(contact_us)
navigation.appendChild(about_us)
navbar.appendChild(navigation);

content_container.appendChild(navbar);

import {infoHeadingFunc, infoDetailsFunc,infoHeading,infoDetails} from './homeInfo.js'

brand.addEventListener('click',()=>{
  removeInfo();
  infoHeadingFunc();
  infoDetailsFunc();
})



content_container.appendChild(info_conatainer);


import {infoHeadingMenuFunc,infoDetailsMenuFunc} from './menuINfo.js';
menu.addEventListener('click',(e)=>{
  removeInfo();
  e.target.classList.add('active');
  infoHeadingMenuFunc();
  infoDetailsMenuFunc();
})


import {infoHeadingContactFunc,infoDetailsContactFunc} from './contactUsInfo.js';
contact_us.addEventListener('click',(e)=>{
  removeInfo();
  e.target.classList.add('active');
  infoHeadingContactFunc();
  infoDetailsContactFunc();
})

import {infoHeadingAboutFunc,infoDetailsAboutFunc} from './aboutUsInfo.js';
about_us.addEventListener('click',(e)=>{
  removeInfo();
  e.target.classList.add('active');
  infoHeadingAboutFunc();
  infoDetailsAboutFunc();
})

function removeInfo(){
  infoHeading.innerHTML='';
  infoDetails.innerHTML='';
  menu.classList.remove('active');
  contact_us.classList.remove('active');
  about_us.classList.remove('active');
}

//listens for submit
document.addEventListener('submit',(e)=>{
  
  alert('Your details have been Submitted. You will get notifications from us now')
  removeInfo();
  infoHeadingFunc();
  infoDetailsFunc();


})


infoHeadingFunc();
infoDetailsFunc();
