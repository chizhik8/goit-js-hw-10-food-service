import itemsTemplate from '../templates/gallery-items.hbs';
import menuItems from '../menu.json';

const markup = itemsTemplate(menuItems);
const menuRef = document.querySelector('.js-menu');

menuRef.insertAdjacentHTML('beforeend', markup);
