function smoothScroll(e) {
  document.querySelector(e).scrollIntoView({
      behavior: 'smooth'
  });
}