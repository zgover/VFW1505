var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;
var gallery = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "images");
var galleryList = gallery.getDirectoryListing();
var rowCount = 4;
var margin = 5;
var size = (pWidth - (margin * (rowCount+1))) / rowCount;
var globalOrientation = [
	Ti.UI.PORTRAIT,
	Ti.UI.LANDSCAPE_LEFT,
	Ti.UI.LANDSCAPE_RIGHT
];

var mainWin = Ti.UI.createWindow ({
	title: "Project 3",
	backgroundColor: "F0F0F0",
	orientationModes: globalOrientation
});

var navWin = Ti.UI.iOS.createNavigationWindow ({
	window: mainWin
});

var mainWinView = Ti.UI.createView ({
	left: 30,
	right: 30,
	height: 100,
	backgroundColor: "fff",
	borderRadius: 10
});

var mainWinLabel = Ti.UI.createLabel ({
	text: "View Images",
	font: {fontWeight: "bold", fontSize: 17}
});

mainWinView.add(mainWinLabel);

var viewContainer = Ti.UI.createScrollView ({
	width: pWidth,
	height: pHeight-70,
	contentWidth: pWidth,
	layout: "horizontal",
	showVerticalIndicator: true
});

var neededFiles = require("externalResources");

mainWin.add(mainWinView);
navWin.open();