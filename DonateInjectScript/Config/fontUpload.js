const fontUpload = () => {
	let link = document.createElement('link');
	link.setAttribute('rel', 'stylesheet');
	link.setAttribute('type', 'text/css');
	link.setAttribute('href', 'https://fonts.googleapis.com/css2?family=VT323&display=swap');
	document.head.appendChild(link);
}

export default fontUpload;