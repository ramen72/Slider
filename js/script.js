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
        let dot = document.createElement('span');
        if( i === 0){
            dot.classList.add('active')
        }
        dot.classList.add('dot')
        dot.setAttribute('data-index', i)
        dotsContainer.appendChild(dot);
    }
    let dots = document.querySelectorAll('.dot');


    // Slider Update Function Declaration
    function updateSlider(index){
        if( index >= slideCount ){
            currentSlide = 0;
        }else if( index < 0 ){
            currentSlide = slideCount - 1;
        }else{
            currentSlide = index;
        }
        slides.style.transform = `translateX(${-currentSlide * 100}%)`;
        dots.forEach( dot => dot.classList.remove('active') );
        dots[currentSlide].classList.add('active');
    }

    // Add Event-Listener in Previous & Next Button
    prevButton.addEventListener("click", function(){
        updateSlider(currentSlide - 1 );
    })
    nextButton.addEventListener("click", function(){
        updateSlider(currentSlide + 1 );
    })

    // Add Event-Listener in every dot
    dots.forEach((dot)=>{
        dot.addEventListener('click', function(){
            let index = parseInt(dot.getAttribute('data-index'))
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