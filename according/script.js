
let items=document.querySelectorAll('.according-items');

items.forEach(item => {
    let title=item.querySelector('.title');
    let content =item.querySelector('.according-content');

    title.addEventListener('click',() => {
        for(let i =0; i<items.length;i++){
            if(items[i] !=item){
                items[i].classList.remove('active');
            }else{
                item.classList.toggle('active');
            }
        }
        
    });
});