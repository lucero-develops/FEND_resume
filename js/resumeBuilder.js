

var bio ={
	"name": "Michael Lucero",
	"role": "Front-end Developer",
	"contacts": {
		"mobile": "219-629-9352",
		"email": "lucero.develops@gmail.com",
		"github": "lucero-develops",
		"location": "Indianapolis"
	},
	"welcomeMessage": "Life begins where your comfortzone ends!",
	"skills": [
		"Customer Service", "SQL", "HTML", "CSS", "Java Script"],
	"biopic": "images/tokyo.jpg"
}

var education ={
	"schools": [
		{
			"name": "Indiana University",
			"location": "Bloomington, IN",
			"degree": "Bachelors",
			"majors": ["Informatics"],
			"minors": ["Business"],
			"dates": "2009",
			"url": "http://www.informatics.indiana.edu/"
		}
	],
	"onlineCourses":[
		{
			"title": "Intro to Programming NanoDegree Program",
			"school": "Udacity",
			"dates":"Summer 2016",
			"url": "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000"
		},
		{
			"title": "Front-End Web Developer NanoDegree Program",
			"school": "Udacity",
			"dates":"Summer 2017",
			"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		}
	]
}



var work ={
	"jobs": [
		{
			"employer": "Dominion Dealer Solutions",
			"title": "DMS Data Specialist",
			"dates": "September 2011 -Present",
			"location" : "Indianapolis, IN",
			"description": "Provides primary DMS integration support for " +
				"Dominion's CRM software. Executes deployments by understanding " +
				"requirments, managing client expectations, collecting required "+ 
				"data from multi enviroments, and communicating with internal "+
				"departments to achieve deadlines and success."
		},
		{
			"employer": "Dominion Dealer Solutions",
			"title": "Sr. Technical Analyst",
			"dates": "November 2010 - September 2011 ",
			"location" : "Indianapolis, IN",
			"description": "Provided Tier1/Tier2 support clients " +
				"and internal staff using Dominion's CRM software as well " +
				"as Windows Servers, workstations and networks"
		}		
	]
}

var projects ={
	"projects": [
		{
			"title": "Sample project 1",
			"dates": "Sample date 1",
			"description": "I didn't have any projects at the moment so I inserted placers so I can adjust at a later date",
			"images": [
				"images/197x148.gif",
				"images/197x148.gif"
			]
		},
		{
			"title": "Sample project 2",
			"dates": "Sample date 2",
			"description": "I didn't have any projects at the moment so I inserted placers so I can adjust at a later date",
			"images": [
				"images/197x148.gif",
				"images/197x148.gif"
			]
		}		
	]
}


var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").append(formattedName);

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").append(formattedRole);

for(var i=0; i<bio.skills.length; i+=1){
	var formattedSkills = HTMLskills.replace("%data%",bio.skills[i]);
	$("#header").append(formattedSkills);
}

