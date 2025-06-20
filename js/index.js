 const carousel = document.querySelector('.brand-carousel');
  let scrollAmount = 0;

  function autoScroll() {
    scrollAmount += 1; 
    if(scrollAmount >= carousel.scrollWidth / 2) {
      scrollAmount = 0;
      carousel.scrollLeft = 0;
    } else {
      carousel.scrollLeft = scrollAmount;
    }
    requestAnimationFrame(autoScroll);
  }

  window.onload = () => {
    autoScroll();
  };

  
  window.addEventListener('load', () => {
  document.getElementById('animatedTitle').classList.add('animate');
  document.getElementById('animatedParagraph').classList.add('animate');
  document.getElementById('animatedImage').classList.add('animate');
});

