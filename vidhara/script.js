let navState = false;

function handleOnMenu() {
    const nav = document.getElementById('navbarBasicExample');
    navState = !navState;

    nav.style.display = navState ? 'block' : 'none';
}