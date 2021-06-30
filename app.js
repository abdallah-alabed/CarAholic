/*  This js file is to create more dynamic to our repo. as we should allow the user to interact with us*/

var username = prompt("Hello, what is your name?")
if (username == null){alert("Thank you For visiting our Website!")}
else alert("Thank you " + username + " For visiting our Website!")

var choice = prompt("Do you like us to recommend a car for you?")
 if (choice == null){alert("please enjoy our website")}
else if (choice == "no" ) { alert ("you can check the cars featured on the home page, enjoy!")}
else if (choice == "yes"){alert("we are still testing this feature, for now please enjoy the content!")}


var q1 = confirm("do you like our website?");
if (q1 == true) {alert("Thank you for the feedback!")} 
else {alert("we are sorry to hear this, please tell us what is wrong in the RateUS link in the website")}

/* used all of th following
prompt
if 
else
else if
alert
confirm */