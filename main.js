"use strict";

const speakerVariants = [
  {
    className: "green",
    image: "img/grøn.png",
    name: "Sage Green",
    price: "1999,-",
    alt: "Højtaler i Sage Green",
    background: "#e7ebe3",
  },
  {
    className: "purple",
    image: "img/lilla.png",
    name: "Lavender Mist",
    price: "1999,-",
    alt: "Højtaler i Lavender Mist",
    background: "#E7E4E9",
  },
  {
    className: "white",
    image: "img/hvid.png",
    name: "Moonlight White",
    price: "1999,-",
    alt: "Højtaler i Moonlight White",
    background: "#F5F4F3",
  },
  {
    className: "rose",
    image: "img/lyserød.png",
    name: "Dusty Rose",
    price: "1999,-",
    alt: "Højtaler i Dusty Rose",
    background: "#F5E9E8",
  },
];

// produkt farve og tekst skifte
document.addEventListener("DOMContentLoaded", () => {
  const speakerWrapper = document.querySelector(".speaker-wrapper");
  const background = document.querySelector(".product-bg");
  const buttons = document.querySelectorAll(".color-circle");

  speakerVariants.forEach((variant) => {
    document.querySelectorAll("." + variant.className).forEach((btn) => {
      btn.addEventListener("click", () => {
        buttons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        speakerWrapper.innerHTML = `
          <img src="${variant.image}" class="speaker-image" alt="${variant.alt}">
          <div class="speaker-info">
            <p>${variant.name}</p>
            <p>${variant.price}</p>
          </div>
        `;

        background.style.background = variant.background;
      });
    });
  });
});

// kurv 
const cartButton = document.getElementById("cartButton");
const cartClose = document.getElementById("cartClose");
const cartModal = document.getElementById("cartModal");

if (cartButton && cartClose) {
  cartButton.addEventListener("click", () => {
    cartModal.classList.toggle("show");
  });

  cartClose.addEventListener("click", () => {
    cartModal.classList.remove("show");
  });
}


 // anmeldelser 
 // knap der fører videre til næste anmeldelse
document.getElementById("nextReview").onclick = function () {
  if (document.getElementById("review1").classList.contains("active")) {
    document.getElementById("review1").classList.remove("active");
    document.getElementById("review2").classList.add("active");
  } else if (document.getElementById("review2").classList.contains("active")) {
    document.getElementById("review2").classList.remove("active");
    document.getElementById("review3").classList.add("active");
  } else {
    document.getElementById("review3").classList.remove("active");
    document.getElementById("review1").classList.add("active");
  }
};

// knap der fører tilbage til forrige anmeldelse
document.getElementById("prevReview").onclick = function () {
  if (document.getElementById("review1").classList.contains("active")) {
    document.getElementById("review1").classList.remove("active");
    document.getElementById("review3").classList.add("active");
  } else if (document.getElementById("review2").classList.contains("active")) {
    document.getElementById("review2").classList.remove("active");
    document.getElementById("review1").classList.add("active");
  } else {
    document.getElementById("review3").classList.remove("active");
    document.getElementById("review2").classList.add("active");
  }
};
