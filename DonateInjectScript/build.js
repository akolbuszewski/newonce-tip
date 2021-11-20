const coinButton = (isDesktop) => {
	let tipButton = document.createElement('button');
	tipButton.classList.add('coinButton');
	let desktopCSS = isDesktop ? "position: absolute;top: 30px;left: -16px;" : "";

	tipButton.style.cssText = `background: none; border: none; position: relative; margin: 0;${desktopCSS}`
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

//Choosing the amount
const donateFrameStep1 = () => {
	let donateFrameStep1 = document.createElement('div');
	donateFrameStep1.classList.add('donateFrameStep1');

	donateFrameStep1.style.cssText = 'background-image: url(https://i.ibb.co/ZBkdk0M/kapikwota.png);background-size: contain;width: 100%;height: 100%;background-repeat: no-repeat';
	//donateFrameStep1.classList.add('noneActiveFrame');

	let amountButtonsHolder = document.createElement('div');
	amountButtonsHolder.style.cssText = "position: absolute;width: 150px;height: 40px;background-color: red;bottom: 40px;left: 30px;display: flex;justify-content: space-around;"

	let button5PLN = document.createElement('button');
	button5PLN.classList.add('button5PLN')
	button5PLN.style.cssText = "background-image: url('https://i.ibb.co/K6WSY30/kapi5N.png')";
	let button10PLN = document.createElement('button');
	button10PLN.classList.add('button10PLN');
	button10PLN.style.cssText = "background-image: url(https://i.ibb.co/f28S0nT/kapi10n.png);";
	let button50PLN = document.createElement('button');
	button50PLN.classList.add('button50PLN');
	button50PLN.style.cssText = "background-image: url(https://i.ibb.co/8rpwj8Q/kapi50n.png);";

	button5PLN.classList.add('amountButton')
	button10PLN.classList.add('amountButton')
	button50PLN.classList.add('amountButton')

	amountButtonsHolder.appendChild(button5PLN);
	amountButtonsHolder.appendChild(button10PLN);
	amountButtonsHolder.appendChild(button50PLN);

	donateFrameStep1.appendChild(amountButtonsHolder);

	donateFrameStep1.onclick = () => {
		document.querySelector('.donateFrameStep1').style.display = "none";
		document.querySelector('.donateFrameStep2').style.display = "block";
	}
	return donateFrameStep1;
}

//Blik 
const donateFrameStep2 = () => {
	let donateFrameStep2 = document.createElement('div');
	donateFrameStep2.classList.add('donateFrameStep2');

	donateFrameStep2.style.cssText = 'overflow: auto;background-image: url(https://i.ibb.co/YX4Fsjs/kapikod.png);background-size: contain;width: 100%;height: 100%;background-repeat: no-repeat';
	donateFrameStep2.classList.add('noneActiveFrame');

	let step2ContentHolder = document.createElement('div');
	step2ContentHolder.style.cssText = "width: 80%;margin: 55px auto;display: flex;justify-content: center;flex-wrap: wrap;"
	let step2ContentHolderIconsHolder = document.createElement('div');
	let step2ContentHolderInputHolder = document.createElement('div');
	
	let blikIcon = document.createElement('img');
	blikIcon.style.cssText = "height: 25px;"
	blikIcon.src="https://i.ibb.co/8DPKtV8/kapiblik.png" 
	let amountIcon = document.createElement('img');
	amountIcon.src="https://i.ibb.co/ZKxVkFt/kapi5-1.png"
	amountIcon.style.cssText = "height: 25px;"

	let blikInput = document.createElement('input');
	blikInput.style.cssText = 'padding: 10px;font-size: 20px;text-align: center;font-weight: bolder;width: 80%;display: block;margin: 0 auto;border: none;background-image: url("https://i.ibb.co/Ytfh73r/kapiramka-blik.png");background-size: contain;background-repeat: no-repeat;background-position: center;height: 30px;'

	

	step2ContentHolderIconsHolder.appendChild(blikIcon)
	step2ContentHolderIconsHolder.appendChild(amountIcon)

	step2ContentHolderInputHolder.appendChild(blikInput)

	step2ContentHolder.appendChild(step2ContentHolderIconsHolder);
	step2ContentHolder.appendChild(step2ContentHolderInputHolder);

	donateFrameStep2.append(step2ContentHolder)	
	
	donateFrameStep2.onkeydown = () => {
		let count = blikInput.value.length 
			console.log(count)
		if(count >= 5)
			document.querySelector('.donateFrameStep2').style.display = "none";
			document.querySelector('.donateFrameStep3').style.display = "block";
		}
	
	return donateFrameStep2;
}

//Thank u
const donateFrameStep3 = () => {
	let donateFrameStep3 = document.createElement('div');
	donateFrameStep3.classList.add('donateFrameStep3');
	
	donateFrameStep3.style.cssText = 'background-image: url(https://i.ibb.co/cbzLNkL/kapidziekujemy.png);background-size: contain;width: 100%;height: 100%;background-repeat: no-repeat';
	donateFrameStep3.classList.add('noneActiveFrame');
	
	return donateFrameStep3;
}

const donateFrame = () => {
	let donateFrame = document.createElement('div');
	donateFrame.classList.add('donateFrame');
	donateFrame.style.cssText = 'transform: translateX(600px);background-image: url(https://i.ibb.co/m4WhL9p/kapiramka.png);background-size: contain;width: 216px;height: 150px;position: absolute;top: -152px;right: 17px;background-repeat: no-repeat';

	donateFrame.appendChild(donateFrameStep1());
	donateFrame.appendChild(donateFrameStep2());
	donateFrame.appendChild(donateFrameStep3());

	return donateFrame;
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

const donateContainer = (viewportWidth, desktopPlayerWidth,isDekstop) => {

	let donateContainer = document.createElement('div');
	donateContainer.classList.add('donateContainer');
	let desktopCSS = isDekstop ? "bottom:0;top:96px;overflow:hidden" : "" 	
	donateContainer.style.cssText = `max-width:1023px;transform: translateX(1500px);position: fixed;width: 100%;height: 53vh;bottom: 116px;max-height: 540px;${desktopCSS}`
	if(viewportWidth > 1023){
		donateContainer.appendChild(albumCoverHolder(getCurrnetPlayedAlbumCover()));
		donateContainer.style.maxWidth = `${desktopPlayerWidth}px`; 
		console.log(desktopPlayerWidth);
	}
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

const API_URL = 'https://newonce-tip-api.vercel.app/api';

const getNowPlaying = async () => {
    try {
        const response = await fetch(`${API_URL}/now-playing`);
        const data = await response.json()
        return data;
    } catch (e) {
        console.error(e);
    }
}

const donate = async (artist, blikCode, amount) => {
    try {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({artist, blikCode, amount});

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        const response = await fetch(`${API_URL}/donate`, requestOptions);
        const data = await response.json();
        return data
    } catch (e) {
        console.error(e);
    }
}

let CURRENT_PLAY = {};

const mainInject = () => {
	const WINDOW_VW_WIDTH = window.innerWidth;
	const DEKSTOP_PLAYER_WIDTH = 496;
	const MAX_WIDTH_FOR_BOTTOM_PLAYER = 1023;
	const IS_DESKTOP = (WINDOW_VW_WIDTH < MAX_WIDTH_FOR_BOTTOM_PLAYER) ? false : true;
	
	
	getNowPlaying().then((response) => {
		console.log(response)
		CURRENT_PLAY = response
	});
	
	console.log(CURRENT_PLAY);

	preventDefault();
	fontUpload();
	addCSS(`
	.activeDonateContainer{ 
		transform: translateX(0px) !important
	}
	
	.activeCoinBuuton{
		display:none;
	}

	.activeDonateFrame{
		transform: translateX(0px) !important;
	}

	.noneActiveFrame{
		display:none;
	}

	.amountButton{
		width: 50px;
		background-repeat: no-repeat;
		background-size: contain;
		background-position: center;
		border: none;
		background-color: white;
	}
	`)
	if(!IS_DESKTOP){
		let playerTogglerButton = document.querySelector('.BottomNavPlayer_toggler__2fwVj');
		playerTogglerButton.after(coinButton());

		let footer = document.querySelector("footer");
		footer.after(donateContainer(WINDOW_VW_WIDTH, DEKSTOP_PLAYER_WIDTH));
	}else{
		let desktopPlayerButtpm = document.querySelector('.TopNavPlayer_volumeButton__2RgNk');
		desktopPlayerButtpm.before(coinButton(true))
		desktopPlayerButtpm.after(donateContainer(WINDOW_VW_WIDTH, DEKSTOP_PLAYER_WIDTH,IS_DESKTOP));
	}
}

