
const mainInject = () => {
	preventDefault();

	let playerTogglerButton = document.querySelector('.BottomNavPlayer_toggler__2fwVj');
	playerTogglerButton.after(coinButton());

	let footer = document.querySelector("footer");
	footer.after(donateContainer());

}