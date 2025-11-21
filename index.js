
// أضف في index.js
window.addEventListener('scroll', function() {
  const parallax = document.querySelectorAll('.hero-slide');
  parallax.forEach(slide => {
    let scrollPosition = window.pageYOffset;
    slide.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
  });
});
