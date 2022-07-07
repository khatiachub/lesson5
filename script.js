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

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:35,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        641:{
            items:2
        },
        1025:{
            items:3
        }
    }
})
