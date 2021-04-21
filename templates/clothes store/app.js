window.addEventListener('DOMContentLoaded', () => {
	const openMenuBtn = document.querySelector('.openMenu');
	const navbar = document.querySelector('.navbar');

	openMenuBtn.addEventListener('click', () => {
		let newDisplay = navbar.style.display === 'block' ? 'none' : 'block';
		navbar.style.display = newDisplay;
	});
	window.addEventListener('resize', () => {
		if (window.matchMedia('(min-width: 768px)').matches) {
			navbar.style.display = 'block';
		}
		if (window.matchMedia('(max-width: 768px)').matches) {
			navbar.style.display = 'none';
		}
	});
});