const tipCounterHolder = () => {
	let tipsCountHolder = document.createElement('div')
	tipsCountHolder.style.cssText = "display: flex;width: 200px;"


	tipsCountHolder.appendChild(tipImage());
	tipsCountHolder.appendChild(tipCountText());

	return tipsCountHolder;
}

export default tipCounterHolder;