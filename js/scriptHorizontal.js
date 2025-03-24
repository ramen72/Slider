document.addEventListener('DOMContentLoaded', function(){
    let slides = document.querySelector ('.slides');
    let dotsContainer = document.querySelector('.dots');
    let prevButton = document.querySelector('.prev');
    let nextButton = document.querySelector('.next');
    let slide = document.querySelectorAll('.slide');
    let slideCount = slide.length 
    let currentSlide = 0;

    for( let i = 0; i < slideCount; i++){
        console.log(i);
        let createDot = document.createElement("span");
        if( i === 0 ){
            createDot.classList.add("active");
        }
        createDot.classList.add("dot");
        createDot.setAttribute("data-index",i)
        dotsContainer.appendChild(createDot)
    }

    let dotsList = document.querySelectorAll('.dot')
    

    function updateSlider(index){
        if( index >= slideCount ){
            currentSlide = 0;
        } else if( index < 0 ){
            currentSlide = slideCount - 1;
        }else{
            currentSlide = index;
        }
        slides.style.transform = `translateY(${-currentSlide * 100}%)`;
        console.log(currentSlide * 100)
        // dotsList.forEach((index)=>{
        //     createDot.classList.remove("active");
        // })
    }


    nextButton.addEventListener("click",function(){
        console.log(currentSlide + 1);
        updateSlider(currentSlide + 1)
    })




})