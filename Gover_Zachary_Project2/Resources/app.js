// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

var languageData = {
	"front-end":{
		"languages":[
			{
				"name": "HTML",
				"description": "Hypertext Markup Language, a standardized system for tagging text files to achieve font, color, graphic, and hyperlink effects on World Wide Web pages."
			},
			{
				"name": "CSS",
				"description": "A cascading style sheet (CSS) is a Web page derived from multiple sources with a defined order of precedence where the definitions of any style element conflict."
			},
			{
				"name": "jQuery",
				"description": "jQuery is a cross-platform JavaScript library designed to simplify the client-side scripting of HTML. jQuery is the most popular JavaScript library in use today. jQuery is free, open-source software licensed under the MIT License."
			}
		]
	},
	"back-end":{
		"languages":[
			{
				"name": "PHP",
				"description": "PHP is a script language and interpreter that is freely available and used primarily on Linux Web servers. PHP, originally derived from Personal Home Page Tools, now stands for PHP: Hypertext Preprocessor, which the PHP FAQ describes as a 'recursive acronym.'"
			},
			{
				"name": "C#",
				"description": "C# is one of the programming languages designed for the Common Language Infrastructure. C# is intended to be a simple, modern, general-purpose, object-oriented programming language."
			},
			{
				"name": "Java",
				"description": "The Java programming language is a high-level language that can be characterized by all of the following buzzwords: Simple. Object oriented. Distributed. Multithreaded."
			}
		]
	}
};

var mainWindow = Ti.UI.createWindow ({
	title: "Programming",
	backgroundColor: "#f0f0f0",
});

var navWindow = Ti.UI.iOS.createNavigationWindow ({
	window: mainWindow
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
