// search-form

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
  searchForm.classList.toggle('active');
  shoppingCart.classList.remove('active');
  loginForm.classList.remove('active');
  navbar.classList.remove('active');
};

// shopping-cart

let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () => {
  shoppingCart.classList.toggle('active');
  searchForm.classList.remove('active');
  loginForm.classList.remove('active');
  navbar.classList.remove('active');
};

// login-form

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () => {
  loginForm.classList.toggle('active');
  searchForm.classList.remove('active');
  shoppingCart.classList.remove('active');
  navbar.classList.remove('active');
};

// navbar

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
  navbar.classList.toggle('active');
  searchForm.classList.remove('active');
  shoppingCart.classList.remove('active');
  loginForm.classList.remove('active');
};

window.onscroll = () => {
  searchForm.classList.remove('active');
  shoppingCart.classList.remove('active');
  loginForm.classList.remove('active');
  navbar.classList.remove('active');
};

// product slider
var swiper = new Swiper('.product-slider', {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1020: {
      slidesPerView: 3
    }
  }
});

// review slider

var swiper = new Swiper('.review-slider', {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1020: {
      slidesPerView: 3
    }
  }
});

// Scroll active
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('.navbar a[href*=' + sectionId + ']')
        .classList.add('active');
    } else {
      document
        .querySelector('.navbar a[href*=' + sectionId + ']')
        .classList.remove('active');
    }
  });
}
window.addEventListener('scroll', scrollActive);
