

var bio ={
	"name": "Lucy",
	"role": "Front-end Developer",
	"contacts": {
		"mobile": "867-5309",
		"email": "error@gmail.com",
		"github": "error",
		"location": "Indianapolis"
	},
	"welcomeMessage": "Life begins where your comfortzone ends!",
	"skills": [
		"SQL", "HTML", "CSS", "Java Script"],
	"biopic": "images/tokyo.jpg"
}

var education ={
	"schools": [
		{
			"name": "Udacity",
			"degree": "   nanoDegree",
			"majors": ["FrontiEnd Web Developer"],
			"dates": "April 2017",
			"location": "Boom, Belgium",
			"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		},
		{
			"name": "Indiana University",
			"location": "Bloomington, IN",
			"degree": "Bachelors",
			"majors": ["Informatics"],
			"dates": "May 2009",
			"url": "http://www.informatics.indiana.edu/"
		},
		{
			"name": "Udacity",
			"degree": "   nanoDegree",
			"majors": ["Intro to Programming"],
			"dates": "May 2016",
			"location": "Barcelona, Spain",
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


bio.display= function(){
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").append(formattedName);

	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").append(formattedRole);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#header, #footer-entry" ).append(formattedMobile);

	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#header, #footer-entry").append(formattedEmail);

	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#header, #footer-entry").append(formattedGithub);

	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#header, #footer-entry").append(formattedLocation);

	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedWelcomeMsg);

	var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
	$("#header").append(formattedPic);

	for(var i=0; i<bio.skills.length; i+=1){
		var formattedSkills = HTMLskills.replace("%data%",bio.skills[i]);
		$("#header").append(formattedSkills);
}
}

work.display = function(){
	for (job in work.jobs){
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;

		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedWorkLocation);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);


	}
}


projects.display = function(){
	for (project in projects.projects){
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0){
			for (image in projects.projects[project].images){
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}


education.display = function(){
	for(school in education.schools){
		$("#education").append(HTMLschoolStart);

		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedSchoolTitle = formattedSchoolName + formattedDegree;

		$(".education-entry:last").append(formattedSchoolTitle);

		var formattedSchoolDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
		$(".education-entry:last").append(formattedSchoolDates);

		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedSchoolLocation);

		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
		$(".education-entry:last").append(formattedMajor);

		/*var formattedMinor = HTMLschoolMinor.replace("%data%", education.schools[school].minors);
		$(".education-entry:last").append(formattedMinor);*/
	}
}

function locationizer(work_obj) {
	var locationArray = [];

	for (job in work_obj.jobs){
		var newLocation = work_obj.jobs[job].location;
		locationArray.push(newLocation);
	}
	return locationArray;
}

// Did locationizer() work? This line will tell you!
console.log(locationizer(work));

function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() +
		name[0].slice(1).toLowerCase();
	return name [0] + " " +name[1];
}

$('#main').append(internationalizeButton);

$("#mapDiv").append(googleMap);


bio.display()
work.display()
projects.display()
education.display()