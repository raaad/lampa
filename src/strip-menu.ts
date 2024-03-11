import styleBody from './strip-menu.css?inline';

const el = document.createElement('style');
el.innerHTML = styleBody;
document.getElementsByTagName('head')[0].appendChild(el);

console.log('##### MENU ITEM PATCHED');
