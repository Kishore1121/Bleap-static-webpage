// Tab container

let tabs = document.querySelectorAll(".tabs h3");
          let tabContents = document.querySelectorAll(".tab-content div");
            tabs.forEach((tab, index) => {
            tab.addEventListener("click", () => {
                tabContents.forEach((content) => {
                content.classList.remove("active");
                });
                tabs.forEach((tab) => {
                tab.classList.remove("active");
                });
                tabContents[index].classList.add("active");
                tabs[index].classList.add("active");
            });
        });



// FAQ content
var faq = document.getElementsByClassName("faq-page");
        var i;

        for (i = 0; i < faq.length; i++) {
            faq[i].addEventListener("click", function () {
                /* Toggle between adding and removing the "active" class,
                to highlight the button that controls the panel */
                this.classList.toggle("active");

                /* Toggle between hiding and showing the active panel */
                var body = this.nextElementSibling;
                if (body.style.display === "block") {
                    body.style.display = "none";
                } else {
                    body.style.display = "block";
                }
            });
        }

 // Testimonial slider
 
    $(document).ready(function(){  
        // get the number of slides
        var total = $('.my-slider .my-slide').length,      
        rand = Math.floor( Math.random() * total ); // random number
        $('.my-slider').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: false,
                speed: 300,
                infinite: true,
                autoplaySpeed: 1800,
                slide: ".my-slide",
                autoplay: true
            });
        $('.my-slider').slick('slickGoTo', rand);
        //this is also works $('.my-slider')[0].slick.slickGoTo(rand);
    
    });

    // Image Testimonial slider
    
    $(document).ready(function(){
        $('.carousel').slick({
        slidesToShow: 4,
        dots:false,
        arrows: false,
        centerMode: true,
        infinite: true,
        autoplaySpeed: 800,
        autoplay: true
        
    });
    });
