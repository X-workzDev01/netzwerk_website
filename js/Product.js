// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize AOS (Animate On Scroll)
  AOS.init({
    duration: 1500, // Animation duration in ms
    once: true     // Only animate once per scroll
  });

  // Auto-scroll for brand carousel (if present on the product page)
  const carousel = document.querySelector('.brand-carousel');
  if (carousel) {
    let scrollAmount = 0;

    function autoScroll() {
      scrollAmount += 1;
      if (scrollAmount >= carousel.scrollWidth / 2) {
        scrollAmount = 0;
        carousel.scrollLeft = 0;
      } else {
        carousel.scrollLeft = scrollAmount;
      }
      requestAnimationFrame(autoScroll);
    }

    autoScroll();
  }

  // Optional: Add manual animation class to specific product page elements
  const title = document.getElementById('animatedTitle');
  const paragraph = document.getElementById('animatedParagraph');
  const image = document.getElementById('animatedImage');

  if (title) title.classList.add('animate');
  if (paragraph) paragraph.classList.add('animate');
  if (image) image.classList.add('animate');
});


 function showProductModal(element) {
    const title = element.getAttribute("data-title");
    const description = element.getAttribute("data-description");
    const image = element.getAttribute("data-image");

    document.getElementById("productModalLabel").textContent = title;
    document.getElementById("modalImage").src = image;
    document.getElementById("modalDescription").textContent = description;

    const modal = new bootstrap.Modal(document.getElementById("productModal"));
    modal.show();
  }