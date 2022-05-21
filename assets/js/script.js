AOS.init();

let burgerBtn = document.querySelector(".burger-btn");
let headerMenu = document.querySelector(".header__menu");

burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("burger-btn_active");
  headerMenu.classList.toggle("header__menu_active");
});

const spoilers = document.querySelectorAll(".faq__question");

spoilers.forEach((e) => {
  const faqPlus = e.querySelector(".faq__plus");
  const faqLine = e.querySelector(".faq__line");
  const faqText = e.querySelector(".faq__text");

  faqPlus.addEventListener("click", () => {
    faqPlus.classList.toggle("faq__plus_active");
    faqLine.classList.toggle("faq__line_active");
    faqText.classList.toggle("faq__text_active");
  });
});

// for (let i = 0; i < picturesList.length; i++) {
//     picturesList[i].addEventListener('click', function () {
//       showBigPicture(pictures[i]);
//     faqPlus[i].addEventListener("click", () => {
//         faqPlus.classList.toggle("faq__plus_active");
//         faqLine.classList.toggle("faq__line_active");
//         faqText.classList.toggle("faq__text_active");
//     });
// }
