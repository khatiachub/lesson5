let burger=document.getElementById('burgerbar');
let navigation=document.getElementById('burgernav');
let overlay=document.getElementById('burgeroverlay');
burger.addEventListener('click', function(){
    navigation.classList.add('active');
    overlay.classList.add('active')
})
overlay.addEventListener('click', function(){
    navigation.classList.remove('active');
    overlay.classList.remove('active')
})