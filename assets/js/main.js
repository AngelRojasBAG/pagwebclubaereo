'use strict';
const menu = document.querySelector('.menu');
const nav = document.querySelector('#navigation');
function closeMenu(){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');}
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
document.addEventListener('keydown',event=>{if(event.key==='Escape')closeMenu();});
const dialog=document.querySelector('#photo-dialog');
const photo=dialog.querySelector('img');
document.querySelectorAll('[data-photo]').forEach(button=>button.addEventListener('click',()=>{photo.src=button.dataset.photo;photo.alt=button.querySelector('img').alt;dialog.showModal();}));
dialog.querySelector('.close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close();});
