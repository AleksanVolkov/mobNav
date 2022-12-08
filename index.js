const burger = document.querySelector('.header_burger'),
        menu= document.getElementById('menu_list');



burger.addEventListener('click', ()=>{
    menu.classList.toggle('active');
    burger.classList.toggle('activeA');
    burger.classList.toggle('activeB');
    console.log('clik')
})