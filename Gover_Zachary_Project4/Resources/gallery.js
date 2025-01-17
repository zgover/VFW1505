var gallery = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "images/gallery");
var galleryList = gallery.getDirectoryListing();

function showGallery(){
	var win = Ti.UI.createWindow({
		backgroundColor: "rgb(170,49,100)",
		title: 'Gallery'
	});
	
	var nextBtn = Ti.UI.createView ({
		backgroundColor: "000",
		height: 50,
		bottom: 0
	});
	
	var nextLabel = Ti.UI.createLabel ({
		text: "Next Image",
		color: "FFF",
		font: {fontSize: 14, fontFamily: "Arial", fontWeight: "Bold"}
	});
	nextBtn.add(nextLabel);
	
	var presentImage = Ti.UI.createImageView ({
		image: "images/gallery/" + galleryList[0],
		left: 30,
		right: 30
	});
	
	nextBtn.addEventListener("click", function randomizeImage(){
		var randomNumber = Math.floor(Math.random() * galleryList.length);
		presentImage.image = "images/gallery/" + galleryList[randomNumber];
	});
	
	win.add(nextBtn, presentImage);
	navWin.openWindow(win);
}
galleryView.addEventListener("click", showGallery);