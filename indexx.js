function f(k) {
	if (Math.abs(k) > 0.5) {
		let target = 0.5 * (k - Math.sign(k) + 1) * (document.documentElement.offsetHeight - window.innerHeight);
		window.scrollTo({
			top: target,
			behavior: 'smooth'
		});
	}
}

f(-1);

let ticking = false;
window.addEventListener('scroll', () => {
	if (!ticking) {
		requestAnimationFrame(() => {
			let kVal = parseFloat(getComputedStyle(document.body).getPropertyValue('--k'));
			f(kVal);
			ticking = false;
		});
		ticking = true;
	}
}, { passive: true });
