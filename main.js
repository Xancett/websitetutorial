// Get hamburger menu
var menu = document.getElementById('menu');
// Get navigation
var nav = document.getElementById('nav');
// Get exit
var exit = document.getElementById('exit');

menu.addEventListener('click', function(e) { // Click event
    nav.classList.toggle('hide-mobile'); // attach and detach hide-mobile
    e.preventDefault(); // Prevent browser page from going up
});

exit.addEventListener('click', function(e) {
    nav.classList.add('hide-mobile'); // attach and detach hide-mobile
    e.preventDefault(); // Prevent browser page from going up
});