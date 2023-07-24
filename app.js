let slides = document.querySelectorAll(".slide");
let nextBtn = document.querySelector('.nextBtn');
let prevBtn = document.querySelector(".prevBtn");
console.log(nextBtn);

slides.forEach(function(slide,index){
    slide.style.left = `${index*100}%`;
});

let counter = 0;
    nextBtn.addEventListener('click', function(){
        counter++;
        courasel();
    })
    prevBtn.addEventListener('click', function(){
        counter--;
        courasel();
    });

function courasel(){
   /*  if(counter === slides.length){
        counter = 0;
    }
    if(counter < 0){
        counter = slides.length - 1;
    } */
    if(counter<slides.length -1){
        nextBtn.style.display = "block"
    }else {
        nextBtn.style.display = 'none';
    }

    if(counter > 0){
        prevBtn.style.display = "block";
    }
    slides.forEach(function(slide){
        slide.style.transform = `translateX(-${counter*100}%)`;
    })
}

prevBtn.style.display = 'none';