let menuList = document.querySelectorAll('.js-left-menu-home');
let navMenuListItems = document.querySelector('.nav').childNodes
let menuArrow = document.querySelectorAll('.fa-chevron-down');


menuList.forEach((li)=> {
    li.addEventListener('click', (e) => {
        e.stopPropagation()
        if(e.currentTarget.nextElementSibling.classList.contains('show')){
            e.currentTarget.nextElementSibling.classList.remove('show')
            e.currentTarget.querySelector('.fa-chevron-down').classList.remove('arrow-rotate')
         } else {
            e.currentTarget.nextElementSibling.classList.add('show')
            e.currentTarget.querySelector('.fa-chevron-down').classList.add('arrow-rotate')
         }
    })
})