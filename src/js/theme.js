
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeSwitchRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');

themeSwitchRef.addEventListener('change', event => {
    bodyRef.className = event.currentTarget.checked ? Theme.DARK : Theme.LIGHT;
    localStorage.setItem('theme', bodyRef.className);
});

if (localStorage.getItem('theme') === Theme.DARK ) {
    bodyRef.className = Theme.DARK;
    themeSwitchRef.checked = !themeSwitchRef.checked;
};
