/*
This is empty on purpose! Your code to build the resume will go here.
 */

 //$("#main").append("Michael J Lucero");

 /*var awesomeThoughts =
 	"My name is Michael and I'm Awesome!";

 var funThoughts =
 	awesomeThoughts.replace("AWESOME!", "FUN");
 $("#main").append(funThoughts);
 */

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

