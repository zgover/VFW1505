var gallery = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "images");
var galleryList = gallery.getDirectoryListing();

function showGallery(){
	var win = Ti.UI.createWindow({
		backgroundColor: '333',
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
		image: "images/" + galleryList[0],
		left: 30,
		right: 30
	});
	
	console.log(galleryList.length);
	
	nextBtn.addEventListener("click", function randomizeImage(){
		var randomNumber = Math.floor(Math.random() * galleryList.length);
		presentImage.image = "images/" + galleryList[randomNumber];
	});
	
	win.add(nextBtn, presentImage);
	navWin.openWindow(win);
}

function showCrew(){
	var win = Ti.UI.createWindow({
		backgroundColor: '333',
		title: 'Crew'
	});
	navWin.openWindow(win);
}

function showCustomPage(){
	var win = Ti.UI.createWindow({
		backgroundColor: '333',
		title: 'Custom Page'
	});
	navWin.openWindow(win);
}

galleryView.addEventListener("click", showGallery);
crewView.addEventListener("click", showCrew);
customPageView.addEventListener("click", showCustomPage);