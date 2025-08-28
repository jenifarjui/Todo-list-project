let dropArea=document.getElementById('drop-area');
let inputFile=document.getElementById('input-file');
let imgview=document.getElementById('img-view');

inputFile.addEventListener('change', uploadImage)
    function uploadImage(){
        let imglink = URL.createObjectURL(inputFile.files[0]);
        imgview.style.backgroundImage= `url(${imglink})`;
        imgview.style.border=0;
        imgview.textContent='';

}

dropArea.addEventListener('dragover',function(e){
    e.preventDefault();
})

dropArea.addEventListener('drop',function(e){
    e.preventDefault();
    inputFile.files = e.dataTransfer.files;
    uploadImage();
})