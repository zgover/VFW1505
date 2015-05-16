// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

var languageData = ({
	"front-end":{}
});

var mainWindow = Ti.UI.createWindow ({
	title: "Programming",
	backgroundColor: "#f0f0f0",
});

var navWindow = Ti.UI.iOS.createNavigationWindow ({
	window: mainWindow,
});

var languages = Ti.UI.createTableView ({
	
});

if (Ti.Platform.name === "iPhone OS") {
	languages.style = Ti.UI.iPhone.TableViewStyle.GROUPED;
}

var frontEndSection = Ti.UI.createTableViewSection ({
	headerTitle: "Front-end",
	footerTitle: "Client Side Languages"
});

var backEndSection = Ti.UI.createTableViewSection ({
	headerTitle: "Back-end",
	footerTitle: "Server Side Languages"
});

var languageSections = [frontEndSection,backEndSection];
languages.setData(languageSections);

mainWindow.add(languages);
navWindow.open();
