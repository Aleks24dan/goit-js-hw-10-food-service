
import menuTamplater from './tamplates/menutmp.hbs';
import menuData from './menu.json';
import './js/theme';
const menuItem = document.querySelector('.js-menu');

function tamplateCreater(menuData) {
    return menuTamplater(menuData);

}

menuItem.insertAdjacentHTML('beforeend',tamplateCreater(menuData))
