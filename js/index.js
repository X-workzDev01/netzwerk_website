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


  fetch('data/banner.json')
    .then(response => response.json())
    .then(data => {
      const carouselInner = document.getElementById('promo-carousel-inner');
      data.banners.forEach((image, index) => {
        const activeClass = index === 0 ? 'active' : '';
        const slide = `
          <div class="carousel-item ${activeClass}">
            <div class="position-relative overflow-hidden" style="height: 280px;">
              <img src="${image}" class="w-100 h-100 object-fit-cover" alt="Promo Banner">
              <div class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style="background: rgba(0,0,0,0.4);">
                <div class="container text-white">
                  <div class="row align-items-center">
                    <div class="col-md-8">
                      <h2 class="display-5 fw-bold mb-3">Upgrade Your IT Infrastructure</h2>
                      <p class="lead mb-4">Limited time offer - Get 20% off on all enterprise solutions</p>
                      <a href="enquiry.html" class="btn btn-primary btn-lg px-4">Get Quote</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>`;
        carouselInner.insertAdjacentHTML('beforeend', slide);
      });
    })
    .catch(error => {
      console.error("Error loading banner images:", error);
    });

