var languageData = {
	"The Mighty Crew":{
		"Crew List":[
			{
				"name": "Marge Simpson",
				"description": "Hypertext Markup Language, a standardized system for tagging text files to achieve font, color, graphic, and hyperlink effects on World Wide Web pages.",
				"image": "Marge_Simpson.png",
				"stupidity": 20,
				"courage": 10
			},
			{
				"name": "Peter Griffin",
				"description": "A cascading style sheet (CSS) is a Web page derived from multiple sources with a defined order of precedence where the definitions of any style element conflict.",
				"image": "Peter_Griffin.png",
				"stupidity": 80,
				"courage": 50
			},
			{
				"name": "Patrick Star",
				"description": "jQuery is a cross-platform JavaScript library designed to simplify the client-side scripting of HTML. jQuery is the most popular JavaScript library in use today. jQuery is free, open-source software licensed under the MIT License.",
				"image": "Patrick_Star.png",
				"stupidity": 50,
				"courage": 20
			}
		]
	}
};

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

function showCrew(){
	var win = Ti.UI.createWindow({
		backgroundColor: '333',
		title: 'Crew'
	});
	
	var crewList = Ti.UI.createTableView ({});
	
	if (Ti.Platform.name === "iPhone OS") {
		crewList.style = Ti.UI.iPhone.TableViewStyle.GROUPED;
	}
	
	var showDescription = function(dataSource){
		var descriptionWindow = Ti.UI.createWindow ({
			title: dataSource.title,
			backgroundColor: "rgb(199,102,91)"
		});
		
		var charImage = Ti.UI.createImageView ({
			image: "images/crew/" + dataSource.image,
			height: 200,
			left: 20,
			top: 20,
			left: 0
		});
		
		var charStats = Ti.UI.createView ({
			right: 20,
			top: 50,
			width: "40%",
			layout: "vertical"
		});
		
		var stupidityLabel = Ti.UI.createLabel ({
			text: "Stupidity: " + dataSource.stupidity,
			left: 0
		});
		
		var stupidityBG = Ti.UI.createView ({
			height: 15,
			width: "100%",
			top: 5,
			backgroundColor: "FFF",
			borderRadius: 8
		});
		
		var stupidityAmount = Ti.UI.createView ({
			height: "100%",
			width: dataSource.stupidity,
			left: 0,
			backgroundColor: "000"
		});
		stupidityBG.add(stupidityAmount);
		
		var courageLabel = Ti.UI.createLabel ({
			text: "Courage: " + dataSource.courage,
			left: 0,
			top: 10
		});
		
		var courageBG = Ti.UI.createView ({
			height: 15,
			width: "100%",
			top: 5,
			backgroundColor: "FFF",
			borderRadius: 8
		});
		
		var courageAmount = Ti.UI.createView ({
			height: "100%",
			width: dataSource.courage,
			left: 0,
			backgroundColor: "000"
		});
		courageBG.add(courageAmount);
		
		var descriptionText = Ti.UI.createLabel ({
			text: dataSource.text,
			top: charImage.top + charImage.height + 20,
			left: 20,
			right: 20,
			color: "333",
			font: {fontSize: "16", fontFamily: "Arial"}
		});
		
		charStats.add(stupidityLabel, stupidityBG, courageLabel, courageBG);
		descriptionWindow.add(charImage, charStats, descriptionText);
		navWin.openWindow(descriptionWindow);
	};
	
	var crewSections = [];
	for (var n in languageData){
		// Custom Header
		var customHeader = Ti.UI.createView ({
			height: 40
		});
		var chText = Ti.UI.createLabel ({
			text: n,
			left: 10,
			font: {fontWeight: "bold"}
		});
		customHeader.add(chText);
		
		// Custom Footer
		var customFooter = Ti.UI.createView ({
			height: 30
		});
		var cfText = Ti.UI.createLabel ({
			text: "Listed crew is on active duty.",
			left: 10,
			font: {fontSize: 13},
			color: 333
		});
		customFooter.add(cfText);
		
		// Create Section and rows
		var currentSection = Ti.UI.createTableViewSection ({
			headerView: customHeader,
			footerView: customFooter
		});
		for(var item in languageData[n]){
			for (var i = 0; i<languageData[n][item].length; i++){
				var currentRow = Ti.UI.createTableViewRow ({
					title: languageData[n][item][i].name,
					text: languageData[n][item][i].description,
					image: languageData[n][item][i].image,
					stupidity: languageData[n][item][i].stupidity,
					courage: languageData[n][item][i].courage,
					hasChild: true
				});
				
				currentSection.add(currentRow);
			}
		}
		crewSections.push(currentSection);
	}
	crewList.setData(crewSections);
	crewList.addEventListener("click", function(event){
		showDescription(event.source);
	});
	
	win.add(crewList);
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