const menu = [1, 2, 3, 4];
const swiper1 = new Swiper("section .swiper", {
  direction: "horizontal",
  spaceBetween: 30,
  effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className}"><img  src="${`images/image-product-${menu[index]}-thumbnail.jpg`}" /></span>`;
    },
  },
});

const images = document.querySelectorAll(".swiper .swiper-slide img ");
images.forEach((image) => {
  image.onclick = () => {
    if (window.matchMedia("(min-width: 992px)").matches) {
      document.body.insertAdjacentHTML(
        "beforeend",
        `<div class="gallery">
        <div class="swiper">
          <img src="images/icon-close.svg" />
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="images/image-product-1.jpg" alt="" />
            </div>
            <div class="swiper-slide">
              <img src="images/image-product-2.jpg" alt="" />
            </div>
            <div class="swiper-slide">
              <img src="images/image-product-3.jpg" alt="" />
            </div>
            <div class="swiper-slide">
              <img src="images/image-product-4.jpg" alt="" />
            </div>
          </div>
          <div class="swiper-button-prev">
            <img src="images/icon-previous.svg" alt="prev" />
          </div>
          <div class="swiper-button-next">
            <img src="images/icon-next.svg" alt="next" />
          </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>`
      );
      const swiper2 = new Swiper("body > .gallery .swiper", {
        direction: "horizontal",
        spaceBetween: 30,
        effect: "fade",
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          renderBullet: function (index, className) {
            return `<span class="${className}"><img  src="${`images/image-product-${menu[index]}-thumbnail.jpg`}" /></span>`;
          },
        },
      });
      document.querySelector("body > .gallery .swiper > img").onclick =
        function () {
          document.querySelector("body > .gallery").remove();
        };
    }
  };
});
const number = document.querySelector(".description .buy .counter .number");
const plus = document.querySelector(".description .buy .counter .plus");
const minus = document.querySelector(".description .buy .counter .minus");
const btn = document.querySelector(".description .buy button ");
plus.onclick = function () {
  number.innerHTML++;
};
minus.onclick = function () {
  if (number.innerHTML != 0) {
    number.innerHTML--;
  }
};
btn.onclick = function () {
  localStorage.setItem("products", number.innerHTML);
};

const cart = document.querySelector("header .profile .cart");
const cartBox = document.querySelector("header .cart-box");

cart.onclick = () => {
  if (localStorage.getItem("products") == "0") {
    cartBox.innerHTML = `
          <h3>cart</h3>
    <h4>Your Cart Is Empty</h4>
    `;
  } else {
    cartBox.innerHTML = `
      <h3>cart</h3>
        <div class="cart-list">
          <div class="image">
            <img src="./images/image-product-1-thumbnail.jpg" />
          </div>
          <div class='info'>
            <span>
              Fall Limited Edition Sneakers
            </span>
            <span>
              $125 x ${localStorage.getItem("products")} <span>$${
      125 * localStorage.getItem("products")
    }       </span>
            </span>
        </div>
      <img src='./images/icon-delete.svg' /> </div>
      <button>Checkout</button>
    `;
  }

  cartBox.classList.toggle("active");
};

const menuIcon = document.querySelector("header nav .menu");
const close = document.querySelector("header nav ul img");
const list = document.querySelector("header nav ul");
const overlay = document.createElement("div");

menuIcon.onclick = function () {
  overlay.className = "overlay";
  document.body.appendChild(overlay);
  list.classList.add("active");
};
close.onclick = function () {
  overlay.remove()
  list.classList.remove("active");
};
