
    let slide=document.querySelector('.slide');
    let image=document.querySelectorAll('.image');
    let prevbtn=document.querySelector('.prev-slide');
    let nextbtn=document.querySelector('.next-slide');
    let sliderIndex=0;

    image[sliderIndex].classList.add('active');

    prevbtn.addEventListener('click',prevslide);
    nextbtn.addEventListener('click',nextslide);
    function prevslide(){
        image[sliderIndex].classList.remove('active');
        sliderIndex=(sliderIndex === image.length - 1) ? 0: sliderIndex + 1;
        image[sliderIndex].classList.add('active');
        slide.style.transform = `translateX(-${sliderIndex * 100}%)`;
    }
    function nextslide(){
        image[sliderIndex].classList.remove('active');
        sliderIndex=(sliderIndex === image.length - 1) ? 0: sliderIndex + 1;
        image[sliderIndex].classList.add('active');
        slide.style.transform = `translateX(-${sliderIndex * 100}%)`;
    }
