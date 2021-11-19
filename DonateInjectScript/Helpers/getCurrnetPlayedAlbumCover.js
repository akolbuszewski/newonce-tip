const getCurrnetPlayedAlbumCover = () =>{
	const isElementExist = document.querySelector('.Radio_radioImage__1WhXi') || false
	const returnImage = isElementExist ? document.querySelector('.Radio_radioImage__1WhXi').src : "https://cdn.newonce.me/uploads/podcast/251/feed_juras.jpeg"
	
	return returnImage;
}

export default getCurrnetPlayedAlbumCover;