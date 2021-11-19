const tipCountText = () => {
	let tipCountText = document.createElement('p');
	tipCountText.innerHTML = "X 24"
	tipCountText.style.cssText = "font-size: 40px;font-family: 'VT323', monospace;color: white;letter-spacing:4px;padding-left:10px"	

	return tipCountText;
}

export default tipCountText;