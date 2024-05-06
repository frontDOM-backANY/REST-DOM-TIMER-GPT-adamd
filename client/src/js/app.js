
import { generateNavbar } from './navbar.js';
import { generateMainContent, initializeNavigation } from './main.js';
import { generateFooter } from './footer.js';
import { generateLoginModal, initializeLoginModal } from './login.js';


function assemblePageContent() {
    const appDiv = document.getElementById('app');

    const navbarHTML = generateNavbar();
    const mainHTML = generateMainContent();
    const footerHTML = generateFooter();
    const loginModalHTML = generateLoginModal();

    appDiv.innerHTML = navbarHTML + mainHTML + footerHTML + loginModalHTML;

    document.title = 'Dynamic Web App';

    document.querySelectorAll('nav a').forEach((link) => {
        link.addEventListener('click', function () {
            document.querySelectorAll('nav a').forEach((a) => a.classList.remove('active'));
            this.classList.add('active');
        });
    });

    initializeNavigation();
    initializeLoginModal();
}

assemblePageContent();