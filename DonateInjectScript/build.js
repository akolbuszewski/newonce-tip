const coinButton = () => {
	let tipButton = document.createElement('button');
	tipButton.style.cssText = "background: none; border: none; position: relative; margin: 0;"

	let tipButtonImage = document.createElement('img');
	tipButtonImage.src = "https://i.ibb.co/5RTRKXt/kapimoneta.png"
	tipButtonImage.style.cssText = "width: 43px;position: absolute;top: -31px;left: -13px;"

	tipButton.appendChild(tipButtonImage)

	return tipButton;
}

const fontUpload = () => {
	let link = document.createElement('link');
	link.setAttribute('rel', 'stylesheet');
	link.setAttribute('type', 'text/css');
	link.setAttribute('href', 'https://fonts.googleapis.com/css2?family=VT323&display=swap');
	document.head.appendChild(link);
}

const preventDefault = () => {
	let playerWrapper = document.querySelector('.BottomNavPlayer_playerMeta__3cvLI');
	playerWrapper.style.cssText = 'overflow: visible';
}


const getCurrnetPlayedAlbumCover = () =>{
	const isElementExist = document.querySelector('.Radio_radioImage__1WhXi') || false
	const returnImage = isElementExist ? document.querySelector('.Radio_radioImage__1WhXi').src : "https://cdn.newonce.me/uploads/podcast/251/feed_juras.jpeg"
	
	return returnImage;
}

const tipCountText = () => {
	let tipCountText = document.createElement('p');
	tipCountText.innerHTML = "X 24"
	tipCountText.style.cssText = "font-size: 40px;font-family: 'VT323', monospace;color: white;letter-spacing:4px;padding-left:10px"	

	return tipCountText;
}

const tipImage = () => {
	let tipImage = document.createElement('img');
	tipImage.style.cssText = "height: 43px; margin-top:7px"
	tipImage.src = "https://i.ibb.co/5RTRKXt/kapimoneta.png"

	return tipImage;
}

const tipCounterHolder = () => {
	let tipsCountHolder = document.createElement('div')
	tipsCountHolder.style.cssText = "display: flex;width: 200px;"


	tipsCountHolder.appendChild(tipImage());
	tipsCountHolder.appendChild(tipCountText());

	return tipsCountHolder;
}

const closeButton = () => {
	let svg = `<svg width="24" height="24" fill="none" style="border: none;background: transparent;color: white;transform: rotateX(178deg);" xmlns="http://www.w3.org/2000/svg"><path d="M16.59 16.25L12 11.67l-4.59 4.58L6 14.84l6-6 6 6-1.41 1.41z" fill="currentcolor"></path></svg>`;
	let closeButton = document.createElement('button');
	closeButton.style.cssText = "border: none;background: transparent;";
	closeButton.innerHTML = svg;

	return closeButton;
}

const donateButton = () => {
	let donateButton = document.createElement('button');
	donateButton.style.cssText = "background: inherit;width: 120px;height: 37px;background-position: center;border: none;background-repeat: no-repeat;background-size: cover;background-image: url('https://i.ibb.co/XxwchT3/kapidonate.png');"

	return donateButton;
}

const donateContainerBottomBox = () => {
	let donateContainerBottomBox = document.createElement('div');
	donateContainerBottomBox.style.cssText = "width: 100%;height: 14%;position: absolute;bottom: 0px;background-color: black;display:flex;justify-content: space-around;align-items: center;"

	donateContainerBottomBox.appendChild(tipCounterHolder());
	donateContainerBottomBox.appendChild(donateButton());

	return donateContainerBottomBox;
}

const newonceBorder = () => {
	let newonceBorderImg = document.createElement('img');
	newonceBorderImg.style.cssText = "width:100%"
	newonceBorderImg.src = "https://i.ibb.co/sjGZjxp/kapiramka-abum.png";
	newonceBorderImg.alt = "newonceBorder"

	return newonceBorderImg;
}

const albumCoverHolder = (albumPhoto) => {
	let albumCoverHolder = document.createElement('div');
	albumCoverHolder.style.cssText = `width: 100%;height: 86%;background-repeat: no-repeat;background-image: url(${albumPhoto});background-color: black;background-position: center;`

	albumCoverHolder.appendChild(newonceBorder());

	return albumCoverHolder;
}

const donateContainer = () => {
	let donateContainer = document.createElement('div');	
	donateContainer.style.cssText = "position: fixed;width: 100%;height: 56vh;bottom: 116px;max-height: 540px;"

	donateContainer.appendChild(albumCoverHolder(getCurrnetPlayedAlbumCover()));
	donateContainer.appendChild(donateContainerBottomBox())	

	return donateContainer;
} 
	

const mainInject = () => {
	preventDefault();

	let playerTogglerButton = document.querySelector('.BottomNavPlayer_toggler__2fwVj');
	playerTogglerButton.after(coinButton());

	let footer = document.querySelector("footer");
	footer.after(donateContainer());

}