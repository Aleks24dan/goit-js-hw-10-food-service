'use strict'

const checkBoxToggle = document.querySelector('#theme-switch-toggle')
const body = document.querySelector('body')


const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const {LIGHT, DARK} = Theme;

checkBoxToggle.checked = JSON.parse(localStorage.getItem('checkbox'))
changeTheme()

function changeTheme() {
  if (checkBoxToggle.checked) {
    body.classList.add(DARK)
  }else if(!checkBoxToggle.checked)
   
   {body.classList.remove(LIGHT)}
    
}
 checkBoxToggle.addEventListener('change', onChange)
function onChange (event) {
  if(event.target.checked)
  {
    body.classList.add(DARK)
    body.classList.remove(LIGHT)
localStorage.setItem('checkbox', checkBoxToggle.checked)
  } else {
    body.classList.add(LIGHT)
    body.classList.remove(DARK)
    const a = localStorage.setItem('checkbox', checkBoxToggle.checked)
      console.log(a);
  }
}

