var languageData = {
	"frontend":{
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
	"backend":{
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

var showDescription = function(){
	var descriptionWindow = Ti.UI.createWindow ({
		title: this.title,
		backgroundColor: "fff"
	});
	var descriptionText = Ti.UI.createLabel ({
		text: this.text,
		top: 30,
		left: 20,
		right: 20,
		color: "333",
		font: {fontSize: "16", fontFamily: "Arial"}
	});
	descriptionWindow.add(descriptionText);
	navWindow.openWindow(descriptionWindow);
};

for (var n in languageData){
	for(var item in languageData[n]){
		if(n === "frontend"){
			for (var i = 0; i<languageData[n][item].length; i++){
				var currentRow = Ti.UI.createTableViewRow ({
					title: languageData[n][item][i].name,
					text: languageData[n][item][i].description,
					hasChild: true
				});
				
				currentRow.addEventListener("click", showDescription);
				
				frontEndSection.add(currentRow);
			}
		}
		
		if(n === "backend"){
			for (var i = 0; i<languageData[n][item].length; i++){
				var currentRow = Ti.UI.createTableViewRow ({
					title: languageData[n][item][i].name,
					text: languageData[n][item][i].description,
					hasChild: true
				});
				
				currentRow.addEventListener("click", showDescription);
				
				backEndSection.add(currentRow);
			}
		}
	}
}