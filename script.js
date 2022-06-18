let burger=document.getElementById('burgerbar');
let navigation=document.getElementById('burgernav');
let overlay=document.getElementById('burgeroverlay');
let xicon=document.getElementById('x-icon');
burger.addEventListener('click', function(){
    navigation.classList.add('activee');
    overlay.classList.add('activee');
})
overlay.addEventListener('click', function(){
    navigation.classList.remove('activee');
    overlay.classList.remove('activee');
})
xicon.addEventListener('click', function(){
    navigation.classList.remove('activee');
    overlay.classList.remove('activee');
})