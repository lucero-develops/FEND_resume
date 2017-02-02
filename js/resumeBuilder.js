

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
			"dates":"2016",
			"url": "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000"
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

$("#main").append(work["title"]);
$("#main").append(education.name);

