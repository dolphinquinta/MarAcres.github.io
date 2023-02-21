const menuu = document.querySelector('.menuu');
const menu = document.querySelector('.menu-navegacion');

/*console.log(menuu);
console.log(menu);*/



menuu.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})


window.addEventListener('click', e=>{
    if(menu.classList.contains('spread')
         && e.target != menu &&  e.target != menuu     ){
            menu.classList.toggle("spread")
    }
})

