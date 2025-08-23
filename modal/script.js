let trigger=document.querySelector('#trigger');
let wrapper=document.querySelector('.modal-wrapper');
let close=document.querySelector('.close');

trigger.addEventListener('click',function(){
    openmodal();
    // wrapper.classList.add('active');
});

close.addEventListener('click',function(){
    closemodal();
    // wrapper.classList.remove('active');
})

wrapper.addEventListener('click',function(e){
    if(e.target !== this) return;
    closemodal();
    // wrapper.classList.remove('active');
})

function openmodal(){
    wrapper.classList.add('active');
}

function closemodal(){
    wrapper.classList.remove('active');
}