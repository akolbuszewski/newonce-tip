const coinButton = () => {
	let tipButton = document.createElement('button');
	tipButton.classList.add('coinButton');
	tipButton.style.cssText = "background: none; border: none; position: relative; margin: 0;"
	tipButton.onclick = ()=> {toggleDonateContainer()};
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
	tipCountText.innerHTML = "X24"
	tipCountText.style.cssText = "font-size: 40px;font-family: 'VT323', monospace;color: white;padding-left:3px"	

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
	tipsCountHolder.style.cssText = "display: flex;width: 109px;"


	tipsCountHolder.appendChild(tipImage());
	tipsCountHolder.appendChild(tipCountText());

	return tipsCountHolder;
}

const closeButton = () => {
	let svg = `<svg width="24" height="24" fill="none" style="border: none;background: transparent;color: white;transform: rotateX(178deg);" xmlns="http://www.w3.org/2000/svg"><path d="M16.59 16.25L12 11.67l-4.59 4.58L6 14.84l6-6 6 6-1.41 1.41z" fill="currentcolor"></path></svg>`;
	let closeButton = document.createElement('button');
	closeButton.onclick = ()=> {toggleDonateContainer()};
	closeButton.style.cssText = "border: none;background: transparent;";
	closeButton.innerHTML = svg;

	return closeButton;
}

const donateButton = () => {
	let donateButton = document.createElement('button');
	donateButton.onclick = () => {toggleDonateFrame()};
	donateButton.style.cssText = "background: inherit;width: 120px;height: 37px;background-position: center;border: none;background-repeat: no-repeat;background-size: cover;background-image: url('https://i.ibb.co/XxwchT3/kapidonate.png');"

	return donateButton;
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
	
const donateFrame = () => {
	let donateFrame = document.createElement('div');
	donateFrame.classList.add('donateFrame');
	donateFrame.style.cssText = 'transform: translateX(250px);background-image: url(https://i.ibb.co/m4WhL9p/kapiramka.png);background-size: contain;width: 216px;height: 150px;position: absolute;top: -152px;right: 17px;background-repeat: no-repeat';


	return donateFrame;
}

//Choosing the amount
const donateFrameStep1 = () => {
	let donateFrameStep1 = document.createElement('div');
	return donateFrameStep1;
}

const donateFrameStep2 = () => {
	let donateFrameStep2 = document.createElement('div');
	return donateFrameStep2;
}

const donateFrameStep3 = () => {
	let donateFrameStep3 = document.createElement('div');
	return donateFrameStep3;
}

const donateContainerBottomBox = () => {
	let donateContainerBottomBox = document.createElement('div');
	donateContainerBottomBox.style.cssText = "width: 100%;height: 14%;position: absolute;bottom: 0px;background-color: black;display:flex;justify-content: right;align-items: center;"

	donateContainerBottomBox.appendChild(donateFrame());
	donateContainerBottomBox.appendChild(tipCounterHolder());
	donateContainerBottomBox.appendChild(donateButton());
	donateContainerBottomBox.appendChild(closeButton());

	return donateContainerBottomBox;
}

const donateContainer = () => {

	let donateContainer = document.createElement('div');
	donateContainer.classList.add('donateContainer');	
	donateContainer.style.cssText = "transform: translateY(500px);position: fixed;width: 100%;height: 53vh;bottom: 116px;max-height: 540px;"
	
	donateContainer.appendChild(albumCoverHolder(getCurrnetPlayedAlbumCover()));
	donateContainer.appendChild(donateContainerBottomBox())	

	return donateContainer;
} 

const toggleDonateContainer = () => {
	let donateContainer = document.querySelector('.donateContainer');
	let coinButton = document.querySelector('.coinButton');

	const check = donateContainer.classList.contains("activeDonateContainer");
	if(check){
		donateContainer.classList.remove('activeDonateContainer');
		coinButton.classList.remove('activeCoinBuuton');
	}
	else{
		donateContainer.classList.add('activeDonateContainer');
		coinButton.classList.add('activeCoinBuuton');
	}	
}

const toggleDonateFrame = () => {
	let donateFrame = document.querySelector('.donateFrame');

	const check = donateFrame.classList.contains("activeDonateFrame");
	if(check){
		donateFrame.classList.remove('activeDonateFrame');
	}
	else{
		donateFrame.classList.add('activeDonateFrame');
	}
}

const addCSS = s => document.head.appendChild(document.createElement("style")).innerHTML=s;

const mainInject = () => {
	preventDefault();
	fontUpload();
	addCSS(`
	.activeDonateContainer{ 
		transform: translateY(0px) !important
	}
	
	.activeCoinBuuton{
		display:none;
	}

	.activeDonateFrame{
		transform: translateX(0px) !important;
	}
	`)

	let playerTogglerButton = document.querySelector('.BottomNavPlayer_toggler__2fwVj');
	playerTogglerButton.after(coinButton());

	let footer = document.querySelector("footer");
	footer.after(donateContainer());
}

