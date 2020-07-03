const Menubar = document.querySelectorAll('.Menu');

function MouseEnter(){

    Menubar.forEach(function(menu){
        menu.addEventListener('mouseenter', function(){

            Hide(); 
            menu.children[0].classList.remove('hide');
            menu.children[0].classList.add('show');
        })
    })
}
function Hide(){
    Menubar.forEach(function(menu){
        menu.children[0].classList.remove('show');
        menu.children[0].classList.add('hide')
    })
}
function Init(){
    Hide();
    MouseEnter(); 
}
Init();
