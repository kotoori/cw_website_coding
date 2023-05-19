var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slideshow")[0].getElementsByTagName("img");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; // すべてのスライドを非表示にする
  }

  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1; // 最初のスライドに戻る
  }

  slides[slideIndex - 1].style.display = "block"; // 現在のスライドを表示する

  // 3秒ごとにスライドを切り替える
  setTimeout(showSlides, 3000);
}
