function addtask(){
    let newtask=document.createElement('li');
    let tasklist=document.getElementById('list');
    let deletebtn=document.createElement('button')
    tasklist.appendChild(newtask)
    newtask.textContent=document.getElementById('inputtask').value
    document.getElementById('inputtask').value=''
    deletebtn.textContent='Delete';
    newtask.appendChild(deletebtn)
    deletetask();
}
function deletetask(){
    // let deletebtn=document.createElement('button')
    // deletebtn.textContent='Delete';
    // newtask.appendChild(deletebtn)
    deletebtn.onclick=function(){
        newtask.remove();
    }
}