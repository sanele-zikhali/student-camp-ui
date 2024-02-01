// const slides = [
//   {
//     id: 1,
//     name: "Burger + Pepsi Drink",
//     image: "food1.png",
//     price: 34.0,
//   },
//   {
//     id: 2,
//     name: "Burger With Fries",
//     image: "food2.png",
//     price: 56.0,
//   },
// ];

// let nextBtn = document.getElementById("btn-next");
// let prevBtn = document.getElementById("btn-prev");
// let foodName = document.getElementById("food-name");
// let image = document.getElementById("image");
// let currentPos = 0;

// window.addEventListener("DOMContentLoaded", () => {
//   setSlider(currentPos);
// });

// setInterval(setSlider(), 3000);

// function setSlider(currentPos) {
//   let activeCurrent = slides[currentPos];
//   currentPos++;
//   if (currentPos > slides.length - 1) {
//     currentPos = 0;
//   } else if (currentPos < 0) {
//     currentPos = slides.length - 1;
//   }
//   image.setAttribute("src", activeCurrent.image);
// }
