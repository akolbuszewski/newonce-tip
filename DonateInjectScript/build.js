let CURRENT_PLAY_ALBUM = {};
let CURRENT_PLAY_ARTIST = {};
let TIP_AMOUNT = 0;
let BLIK_CODE = {};
let TIPS_COUNT = {}
let IS_DESKTOP = false;

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
	//const isElementExist = document.querySelector('.Radio_radioImage__1WhXi') || false
	const returnImage = CURRENT_PLAY_ALBUM ? CURRENT_PLAY_ALBUM : "https://cdn.newonce.me/uploads/podcast/251/feed_juras.jpeg"
	
	return returnImage;
}

const tipCountText = () => {
	let tipCountText = document.createElement('p');
	tipCountText.innerHTML = `X${TIPS_COUNT}`
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
	let rotateValue = IS_DESKTOP ? "0" : "178";
	let svg = `<svg width="24" height="24" fill="none" style="border: none;background: transparent;color: white;transform: rotateX(${rotateValue}deg);" xmlns="http://www.w3.org/2000/svg"><path d="M16.59 16.25L12 11.67l-4.59 4.58L6 14.84l6-6 6 6-1.41 1.41z" fill="currentcolor"></path></svg>`;
	let closeButton = document.createElement('button');
	closeButton.onclick = ()=> {toggleDonateContainer()};
	closeButton.style.cssText = "border: none;background: transparent;";
	closeButton.innerHTML = svg;

	return closeButton;
}

const donateButton = () => {
	let donateButton = document.createElement('button');
	donateButton.classList.add('donateButton');
	donateButton.onclick = () => {toggleDonateFrame()};
	donateButton.style.cssText = "background: inherit;width: 120px;height: 37px;background-position: center;border: none;background-repeat: no-repeat;background-size: contain;background-image: url('https://i.ibb.co/XxwchT3/kapidonate.png');"

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
	button5PLN.onclick = () => {TIP_AMOUNT = 50}
	button50PLN.style.cssText = "background-image: url(https://i.ibb.co/8rpwj8Q/kapi50n.png);";

	button5PLN.classList.add('amountButton')
	button10PLN.classList.add('amountButton')
	button50PLN.classList.add('amountButton')

	amountButtonsHolder.appendChild(button5PLN);
	amountButtonsHolder.appendChild(button10PLN);
	amountButtonsHolder.appendChild(button50PLN);

	donateFrameStep1.appendChild(amountButtonsHolder);

	button5PLN.onclick = () => {
		document.querySelector('.donateFrameStep1').style.display = "none";
		document.querySelector('.donateFrameStep2').style.display = "block";
		TIP_AMOUNT = 500
		setAmoutBlikIcon(TIP_AMOUNT)
	}

	button10PLN.onclick = () => {
		document.querySelector('.donateFrameStep1').style.display = "none";
		document.querySelector('.donateFrameStep2').style.display = "block";
		TIP_AMOUNT = 1000
		setAmoutBlikIcon(TIP_AMOUNT)
	}

	button50PLN.onclick = () => {
		document.querySelector('.donateFrameStep1').style.display = "none";
		document.querySelector('.donateFrameStep2').style.display = "block";
		TIP_AMOUNT = 5000
		setAmoutBlikIcon(TIP_AMOUNT)
	}
	return donateFrameStep1;
}

const setAmoutBlikIcon = (tipAmount) => {
	let plnIcon5 = "https://i.ibb.co/ZKxVkFt/kapi5-1.png";
	let plnIcon10 = "https://i.ibb.co/qjSMhSj/kapi10.png";
	let plnIcon50 = "https://i.ibb.co/DLfYJg4/kapi50.png";

	let amountIcon = document.querySelector('.amountIcon');
	let img = "";

	switch (tipAmount) {
		case 500:
			img = plnIcon5
			break;
		case 1000:
			img = plnIcon10
			break;
		case 5000:
			img = plnIcon50
			break;
		default:
			break;
	}
	
	amountIcon.src = img;

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
	blikIcon.style.cssText = "height: 25px;padding-right: 10px;"
	blikIcon.src="https://i.ibb.co/8DPKtV8/kapiblik.png" 
	let amountIcon = document.createElement('img');
	amountIcon.classList.add('amountIcon')
	console.log("tip"+ TIP_AMOUNT)
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
	
	donateFrameStep2.onkeyup = () => {
		BLIK_CODE = blikInput.value;
		let count = blikInput.value.length 
		console.log(BLIK_CODE)

		if(count >= 6){
			document.querySelector('.donateFrameStep2').style.display = "none";
			document.querySelector('.donateFrameStepLOADING').style.display = "block";

			setTimeout(()=> {
				donate(CURRENT_PLAY_ARTIST, BLIK_CODE, TIP_AMOUNT);
				document.querySelector('.donateFrameStepLOADING').style.display = "none";
				document.querySelector('.donateFrameStep3').style.display = "block";
				console.log('st1')

				setTimeout(()=> {
					console.log('st2')
					document.querySelector('.donateFrame').classList.remove('activeDonateFrame');
					document.querySelector('.donateButton').style.backgroundImage = `url('https://i.ibb.co/NNrrkh7/kapitick.png')`
				}, 4000);
			}, 5000);

			
		}			
	}
	
	return donateFrameStep2;
}

const donateFrameStepLOADING = () => {
	let donateFrameStepLOADING = document.createElement('div');
	donateFrameStepLOADING.classList.add('donateFrameStepLOADING');
	
	donateFrameStepLOADING.style.cssText = 'background-image: url(https://www.pngfind.com/pngs/m/360-3604777_waiting-png-transparent-background-waiting-icon-transparent-png.png);background-size: contain;width: 100%;height: 50%;background-repeat: no-repeat;height: 51%;margin-top: 30px;background-position: center;';
	donateFrameStepLOADING.classList.add('noneActiveFrame');
	
	return donateFrameStepLOADING;
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
	//donateFrame.style.cssText = 'transform: translateX(600px);background-image: url(https://i.ibb.co/m4WhL9p/kapiramka.png);background-size: contain;width: 216px;height: 150px;position: absolute;top: -152px;right: 17px;background-repeat: no-repeat';

	donateFrame.appendChild(donateFrameStep1());
	donateFrame.appendChild(donateFrameStep2());
	donateFrame.appendChild(donateFrameStepLOADING());
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
	donateContainer.style.cssText = `max-width:1023px;transform: translateX(1500px);position: fixed;width: 100%;height: 70vh;bottom: 116px;max-height: 560px;${desktopCSS}`
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

const mainInject = () => {
	const WINDOW_VW_WIDTH = window.innerWidth;
	const DEKSTOP_PLAYER_WIDTH = 496;
	const MAX_WIDTH_FOR_BOTTOM_PLAYER = 1023;
	IS_DESKTOP = (WINDOW_VW_WIDTH < MAX_WIDTH_FOR_BOTTOM_PLAYER) ? false : true;
		
	getNowPlaying().then((response) => {
		console.log(response)
		CURRENT_PLAY_ALBUM = response.artworkUrlLarge;
		CURRENT_PLAY_ARTIST = response.artist;
		TIPS_COUNT = response.numberOfDonations;
		
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
	});
	
	//console.log(CURRENT_PLAY);

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

	.donateFrame{
		transform: translateX(600px);
		background-image: url("https://i.ibb.co/m4WhL9p/kapiramka.png");
		background-size: contain;
		width: 216px;
		height: 150px;
		position: absolute;
		top: -152px;
		right: 17px;
		background-repeat: no-repeat;
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
}

mainInject();

