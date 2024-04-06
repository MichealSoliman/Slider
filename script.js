const initSlider = () =>{
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const slideButton = document.querySelectorAll(".slider-wrapper .slider-button");
    const sliderScrollbar = document.querySelector(".container .slider-scrollbar");
    const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

    slideButton.forEach(button =>{
        button.addEventListener("click", ()=>{
            const direction = button.id === "prev-slide" ? -1 :1
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({left: scrollAmount, behavior: "smooth"});
        })
    })

    const handleSlideButtons =()=>{
        slideButton[0].style.display = imageList.scrollLeft <= 0 ? "none" : "block"
        slideButton[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "block"
    }
    const updateScrollThump = () =>{
        const scrollPosition = imageList.scrollLeft;
        const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
        scrollbarThumb.style.left = `${thumbPosition}px`
    }

    imageList.addEventListener("scroll", ()=>{
        handleSlideButtons();
        updateScrollThump();
    })
}

window.addEventListener('load', initSlider)