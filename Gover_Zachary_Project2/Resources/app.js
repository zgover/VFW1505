// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

var mainWindow = Ti.UI.createWindow ({
	backgroundColor: "#f0f0f0",
});

var navWindow = Ti.UI.iOS.createNavigationWindow ({
	window: mainWindow,
	title: "Hello"
});

navWindow.open();
