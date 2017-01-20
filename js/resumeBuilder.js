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

var formattedName = HTMLheaderName.replace("%data%", "Michael Lucero");
$("#header").append(formattedName);

var role = "Web Developer"
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").append(formattedRole);

