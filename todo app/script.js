let name=document.querySelector('#name');
let roll=document.querySelector('#roll');
let dept=document.querySelector('#dept');
let cgpa=document.querySelector('#cgpa');
let btn=document.querySelector('#btn');

btn.addEventListener('click',function(pera){
    pera.preventDefault();
    

    if(name.value==''){
        alert('name fill is empty');
    }
    else if(roll.value==''){
        alert('roll fill is empty');
    }
    else if(dept.value==''){
        alert('dept fill is empty');
    }
    else if(cgpa.value==''){
        alert('cgpa fill is empty');
    }
    else{
        let tbody=document.querySelector('#tbody');
        let tr=document.createElement('tr');

        let td=document.createElement('td');
        td.innerHTML=name.value;
        tr.appendChild(td);

        let tdid=document.createElement('td');
        tdid.innerHTML=roll.value;
        tr.appendChild(tdid);

        let tddept=document.createElement('td');
        tddept.innerHTML=dept.value;
        tr.appendChild(tddept);

        let tdcgpa=document.createElement('td');
        tdcgpa.innerHTML=cgpa.value;
        tr.appendChild(tdcgpa);

        tbody.appendChild(tr);
    }
})