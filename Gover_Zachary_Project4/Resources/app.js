var homeFont = {fontSize: 24, fontFamily: "Verdana", fontWeight: "noraml"};

var mainWin = Ti.UI.createWindow ({
	title: "VFW Final Project",
	backgroundColor: "333",
	layout: "vertical"
});

var navWin = Ti.UI.iOS.createNavigationWindow ({
	window: mainWin
});

var galleryView = Ti.UI.createView ({
	height: 80,
	backgroundColor: "rgb(170,49,100)"
});

var galleryLabel = Ti.UI.createLabel ({
	text: "GALLERY",
	color: "FFF",
	font: homeFont,
	left: 15
});
galleryView.add(galleryLabel);

var crewView = Ti.UI.createView ({
	height: 80,
	backgroundColor: "rgb(199,102,91)"
});

var crewLabel = Ti.UI.createLabel ({
	text: "CREW",
	color: "FFF",
	font: homeFont,
	left: 15
});
crewView.add(crewLabel);

var customPageView = Ti.UI.createView ({
	height: 80,
	backgroundColor: "rgb(104,138,152)"
});

var customPageLabel = Ti.UI.createLabel ({
	text: "CUSTOM PAGE",
	color: "FFF",
	font: homeFont,
	left: 15
});
customPageView.add(customPageLabel);

var footerTextView = Ti.UI.createView ({
	height: 80
});

var footerText = Ti.UI.createLabel ({
	text: "VFW Term 1505 // Zachary Gover",
	color: "FFF",
	font: {fontSize: 11, fontFamily: "Verdana", fontWeight: "normal"}
});
footerTextView.add(footerText);

var galleryInclude = require("gallery");
var crewInclude = require("crew");
var customPageInclude = require("custom-page");

mainWin.add(galleryView, crewView, customPageView, footerTextView);
navWin.open();
