
let searchFun = () =>{
let filter = document.getElementById('searchInput').value.toUpperCase();

let mytable=document.getElementById('myTable');
let tr = mytable.getElementsByTagName('tr');

for (let i=0; i<tr.length; i++){
  let td =tr[i].getElementsByTagName('td')[0];
  if(td){
    let textvalue = td.textContent || td.innerHTML;
    if(textvalue.toUpperCase().indexOf(filter) > -1){
        tr[i].style.display='';      
    }else{
        tr[i].style.display='none'; 
    }
  }
}

}