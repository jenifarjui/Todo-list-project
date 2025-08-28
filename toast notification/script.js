let toastbox=document.getElementById('toastBox');
let successmsg='<i class="fa-solid fa-check"></i>  Success! Your action was completed successfully.';
let errormsg='<i class="fa-solid fa-xmark"></i>  Error! Unable to complete your request.';
let invalidsmsg='<i class="fa-solid fa-triangle-exclamation"></i>  Invalid request. Please try again.';

function showtoast(msg){
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastbox.appendChild(toast);

console.log(msg)
    if(msg.includes('Invalid')){
        toast.classList.add('invalid');
    }
    if(msg.includes('Error')){
        toast.classList.add('error');
    }
    setTimeout(()=>{
        toast.remove();
    },5000);
   
}

