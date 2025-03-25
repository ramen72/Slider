// Add "DOMContentLoaded" EventListener in document
document.addEventListener('DOMContentLoaded', function(){

    // Select DOM Element
    let slider = document.querySelector ('.slider');
    let slides = document.querySelector ('.slides');
    let dotsContainer = document.querySelector('.dots');
    let prevButton = document.querySelector('.prev');
    let nextButton = document.querySelector('.next');
    let slide = document.querySelectorAll('.slide');
    let slideCount = slide.length 
    let currentSlide = 0;

    // Creating Dots
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
    

    // Slider Update Function Declaration
    function updateSlider(index){
        if( index >= slideCount ){
            currentSlide = 0;
        } else if( index < 0 ){
            currentSlide = slideCount - 1;
        }else{
            currentSlide = index;
        }
        slides.style.transform = `translateY(${-(currentSlide * 100)/slideCount}%)`;
        console.log(currentSlide * 100)
        dotsList.forEach(dot => dot.classList.remove('active'));
        dotsList[currentSlide].classList.add('active');
    }

    // Add Event-Listener in Previous & Next Button
    nextButton.addEventListener("click",function(){
        console.log(currentSlide + 1);
        updateSlider(currentSlide + 1)
    })
    prevButton.addEventListener("click",function(){
        console.log(currentSlide - 1);
        updateSlider(currentSlide - 1)
    })

     // Add Event-Listener in every dot
    dotsList.forEach(dot=>{
        dot.addEventListener("click",function(){
            let index = dot.getAttribute("data-index")
            updateSlider(index)
        })
    })

    // Creating Auto Play
    let autoSlide;
    function startAutoPlay(){
        autoSlide = setInterval(()=>{
            updateSlider(currentSlide + 1)
        },3000)
    }

    // Stop Auto Play function declaration  
    function stopAutoPlay(){
        clearInterval(autoSlide);
    }

    // Auto Play start and stop execution
    startAutoPlay()
    slider.addEventListener("mouseover",stopAutoPlay)
    slider.addEventListener("mouseout",startAutoPlay)



})