const closeButton = () => {
	let svg = `<svg width="24" height="24" fill="none" style="border: none;background: transparent;color: white;transform: rotateX(178deg);" xmlns="http://www.w3.org/2000/svg"><path d="M16.59 16.25L12 11.67l-4.59 4.58L6 14.84l6-6 6 6-1.41 1.41z" fill="currentcolor"></path></svg>`;
	let closeButton = document.createElement('button');
	closeButton.style.cssText = "border: none;background: transparent;";
	closeButton.innerHTML = svg;

	return closeButton;
}

export default closeButton;