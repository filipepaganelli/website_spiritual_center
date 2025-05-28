// Abre e fecha o menu no celular
document.getElementById("menu-toggle").addEventListener("click", function () {
  const menu = document.getElementById("menu");
  if (menu.style.display === "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
});


const images = document.querySelectorAll('.carousel-images img');
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');

let current = 0;

function showImage(index) {
  images.forEach((img, i) => {
    img.classList.toggle('active', i === index);
  });
}

leftArrow.addEventListener('click', () => {
  current = (current - 1 + images.length) % images.length;
  showImage(current);
});

rightArrow.addEventListener('click', () => {
  current = (current + 1) % images.length;
  showImage(current);
});
