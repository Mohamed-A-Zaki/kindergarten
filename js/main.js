AOS.init({
  duration: 1500,
});

const swiper = new Swiper(".swiper", {
  spaceBetween: 30,
  grabCursor: true,
  loop: true,

  // effect: "coverflow",

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },

  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

/****************** start gallery section *************************/

let gallery_items = document.querySelectorAll(".gallery .item");
let modal_img = document.querySelector(".modal img");
let modal_title = document.querySelector(".modal .modal-title");

gallery_items.forEach((element, index) => {
  element.addEventListener("click", () => {
    // add image to modal
    modal_img.src = `img/portfolio-${index + 1}.jpg`;
    // add image number to modal title
    modal_title.innerHTML = `Image ${index + 1}`;
  });
});

let gallery_tabs = document.querySelectorAll(".gallery .btn-group .btn");

gallery_tabs.forEach((element) => {
  element.addEventListener("click", () => {
    // category name
    let category = element.innerHTML.toLowerCase();

    gallery_items.forEach((ele) => {
      if (ele.classList.contains(category)) {
        ele.classList.add("show");
        ele.classList.remove("hide");
      } else {
        ele.classList.add("hide");
        ele.classList.remove("show");
      }
    });
  });
});

/****************** end gallery section *************************/
