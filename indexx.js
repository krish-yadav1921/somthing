function f(k) {
  if (Math.abs(k) > 0.5) {
    scrollTo({
      top: 0.5 * (k - Math.sign(k) + 1) * (document.documentElement.scrollHeight - window.innerHeight),
      behavior: 'smooth'
    });
  }
}

f(-1);

let ticking = false;
addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      const k = +getComputedStyle(document.body).getPropertyValue('--k');
      f(k);
      ticking = false;
    });
    ticking = true;
  }
});
