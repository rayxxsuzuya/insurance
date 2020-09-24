$(function() {
    $('.slider__inner').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1048,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 760,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 507,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      });
});


let tabs = document.querySelectorAll('.tabs');
let contents = document.querySelectorAll('.contents');

for (let x = 0; x < tabs.length; x++) {
    for (let i = 0; i < tabs[x].children.length; i++) {
        tabs[x].children[i].addEventListener('click', function(e) {
            e.preventDefault();
            for (let j = 0; j < tabs[x].children.length; j++) {
                tabs[x].children[j].classList.remove('active');
                contents[x].children[j].classList.remove('active');
            }
            tabs[x].children[i].classList.add('active');
            contents[x].children[i].classList.add('active');
        });
    }
}

let button = document.querySelectorAll('.policy-arrow__wrapper');
let show = document.querySelectorAll('.policy__show');


for (let i = 0; i < button.length; i++) {
  button[i].addEventListener('click', function(e) {
    e.preventDefault();
    this.classList.toggle('active');
    show[i].classList.toggle('active');
  });
}
