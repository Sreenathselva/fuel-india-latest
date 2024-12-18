// navbar
const navEl=document.querySelector('#navbar')
window.addEventListener('scroll' ,( ) =>{
if(window.scrollY >= 56){
  navEl.classList.add('navbar-scrolled');
}
else if(window.scrollY <=56){
  navEl.classList.remove('navbar-scrolled');
}
});

function scrollToSection(event, sectionId) {
    event.preventDefault(); // Prevent default anchor behavior
    document.querySelector(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
    setActiveClass(event.target.parentElement);
  }
  
  function setActiveClass(element) {
    const navItems = document.querySelectorAll('.navUl li');
    navItems.forEach(item => item.classList.remove('active'));
    element.classList.add('active');
  }
  
  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
  
    sections.forEach(section => {
        if (
            scrollPosition >= section.offsetTop - section.offsetHeight / 2 &&
            scrollPosition < section.offsetTop + section.offsetHeight - section.offsetHeight / 2
        ) {
            const id = section.getAttribute('id');
            const navItem = document.querySelector(`a[href="#${id}"]`).parentElement;
            setActiveClass(navItem);
        }
    });
  });


     // JavaScript to handle the slideshow
     
     document.addEventListener('DOMContentLoaded', () => {
      const slides = document.querySelectorAll('.home-slide');
      let currentSlide = 0;

      const changeSlide = () => {
          slides.forEach(slide => slide.classList.remove('active'));
          slides[currentSlide].classList.add('active');
          currentSlide = (currentSlide + 1) % slides.length; 
      };

      setInterval(changeSlide, 5000);
  });



// OUR CLIENTS CAROUSEL //

$('.our-top').owlCarousel({
    items:4,
    loop:true,
    margin:20,
    autoplay: true,
    nav: false,
    dots: false,
    slideBy:1,
    smartSpeed:800,
    autoplayTimeout: 3000,
    rtl:true,
    responsiveClass:true,
    responsive:{
      0:{
          items:2,
      },
      600:{
          items:2,
          nav:false
      },
      1000:{
          items:4,
      }
  }
  })

  $('.our-bot').owlCarousel({
    items:4,
    loop:true,
    margin:20,
    autoplay: true,
    nav: false,
    dots: false,
    slideBy:1,
    smartSpeed:800,
    autoplayTimeout: 3000,
    rtl:false,
    responsiveClass:true,
    responsive:{
      0:{
          items:2,
      },
      600:{
          items:2,
          nav:false
      },
      1000:{
          items:4,
      }
  }
  })


// //   home triangle

const cover = document.getElementById('overview');
const tri1 = document.querySelector('.bg-tri1');
const tri2 = document.querySelector('.bg-tri2');

cover.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e; // Get mouse position
    const { width, height, left, top } = cover.getBoundingClientRect();

    // Normalize mouse coordinates within #cover
    const x = (clientX - left) / width;
    const y = (clientY - top) / height;

    // Calculate movement offset
    const offsetX = (x - 0.5) * 20; // Scale the movement
    const offsetY = (y - 0.5) * 20;

    // Apply transformations to triangles
    // tri1?.style?.transform = translate(`${offsetX}px, ${offsetY}px`);
    // tri2?.style?.transform = translate(`${-offsetX}px, ${-offsetY}px`);
});
