let togglebtn = document.querySelector('#checkbox');

togglebtn.addEventListener('change',() => {
    if(togglebtn.checked){
        document.body.classList.add('dark-mode');
    }else{
        document.body.classList.remove('dark-mode');
    }
})