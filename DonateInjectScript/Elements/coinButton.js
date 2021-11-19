const coinButton = () => {
	let tipButton = document.createElement('button');
	tipButton.style.cssText = "background: none; border: none; position: relative; margin: 0;"

	let tipButtonImage = document.createElement('img');
	tipButtonImage.src = "https://i.ibb.co/5RTRKXt/kapimoneta.png"
	tipButtonImage.style.cssText = "width: 43px;position: absolute;top: -31px;left: -13px;"

	tipButton.appendChild(tipButtonImage)

	return tipButton;
}

export default coinButton;