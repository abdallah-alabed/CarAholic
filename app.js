/*  This js file is to create more dynamic to our repo. as we should allow the user to interact with us*/
<<<<<<< HEAD
var username= prompt("please enter your name")
while (username==null){
  alert("this is an interactive website so please enter yourname" );
  username = prompt("please enter your name")
}
alert("Thank you " + username + " For visiting our Website!")
var pass
var choice = prompt("Do you like us to recommend a car for you (yes/no)?")
=======

var username = prompt("Hello, what is your name?")
if (username == null){alert("Thank you For visiting our Website!")}
else alert("Thank you " + username + " For visiting our Website!")

var choice = prompt("Do you like us to recommend a car for you?")
>>>>>>> 1c29397490c8dc39de597d49376d53405b0e617e
 if (choice == null){alert("please enjoy our website")}
else if (choice == "no" ) { alert ("please enjoy our website")}
else if (choice == "yes"){ pass=prompt("how many people will ride in it? (1-7)")}

for ( pass ; pass<=5 ; pass = 10 ) {
document.write("<div>" + "<h3>" + "cars suitable for " + pass + " passengers" + "</h3>" + "<img src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-bmw-x6-m-mmp-1-1604937613.jpg' alt='BMW X6M'>" +
 "<img src='https://assets-eu-01.kc-usercontent.com/bb5aba31-d98c-0160-8548-418b3723c58e/87fb83a0-bb93-41ed-b919-c45d06befbd9/2021_Mercedes_Benz_C_Class_2.jpg?width=1750&fm=jpg&auto=format' alt='Mercedes C-Class'>" + "</div>")
 
}
for (pass; pass>5 && pass<=7 ; pass=10 ){
document.write("<div>" + "<h3>" + "cars suitable for " + pass + " passengers" + "</h3>" + "<img src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-bmw-x6-m-mmp-1-1604937613.jpg' alt='BMW X6M'>" +
 "<img src='https://cdn.slashgear.com/wp-content/uploads/2020/03/Gemera_exterior_2-1280x720.jpg' alt='konn'>" + "</div>")
 
}

var q1 = confirm("do you like our website?");
if (q1 == true) {alert("Thank you for the feedback!")} 
else {alert("we are sorry to hear this, please tell us what is wrong in the RateUS link in the website")}

/* used all of th following
prompt
if 
else
else if
alert
<<<<<<< HEAD
confirm 
for
while


*/
=======
confirm */
>>>>>>> 1c29397490c8dc39de597d49376d53405b0e617e
