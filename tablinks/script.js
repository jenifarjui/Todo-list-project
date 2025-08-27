function openTab(evt, tabId){
      // Hide all tab contents
    let tabcontent=document.querySelectorAll('.tabContent');

    for(let i=0;i<tabcontent.length;i++){
        tabcontent[i].style.display='none';
    }
// Remove 'active' class from all buttons
    let tablinks=document.querySelectorAll('.tablinks');
    for(let i=0;i<tablinks.length;i++){
        tablinks[i].classList.remove('active');
 
    }
 // Show the clicked tab's content   
    document.getElementById(tabId).style.display = 'block';


 // Add 'active' class to the clicked button
        evt.currentTarget.classList.add('active');
  

}