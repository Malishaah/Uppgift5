let menuOpen = false;
let currentFontSize = 16;

/**
 * Togglar hamburgermenyn och ändrar headerns höjd.
 * Växlar även ikonen mellan en meny-ikon och ett stängningskryss.
 * @function toggleMenu
 */
function toggleMenu() {
  const header = document.querySelector('header');
  const menu = document.querySelector('.menu');
  const menuIcon = document.querySelector('.menu-icon i');

  if (menuOpen) {
    header.style.height = '60px';
    menu.style.display = 'none';
    menuIcon.classList.remove('fa-times');
    menuIcon.classList.add('fa-bars');
  } else {
    header.style.height = '100vh';
    menu.style.display = 'block';
    menuIcon.classList.remove('fa-bars');
    menuIcon.classList.add('fa-times');
  }

  menuOpen = !menuOpen;
}

/**
 * Ökar fontstorleken på hela sidan.
 * Fontstorleken ökas stegvis med 2px varje gång funktionen anropas.
 * @function increaseFontSize
 */
function increaseFontSize() {
  const body = document.querySelector('body');
  currentFontSize += 2;
  body.style.fontSize = `${currentFontSize}px`;
}
