var username= prompt("please enter your name")
while ( username == null || username=="" ){
  alert("this is an interactive website so please enter yourname" )
  username= prompt("please enter your name")}

alert("Thank you " + username + " For visiting our Website!")

var pass
var choice = confirm("Do you like us to recommend a car for you?")
 while (choice==false){alert("trust me it will be worth it!")
 choice = confirm("Do you like us to recommend a car for you ?")
 }
if (choice == true) {pass=prompt("how many people will ride in it? (1-7)")}
while (pass<1 || pass>7){alert("its a car website not a bus website!");
pass=prompt("how many people will ride in it? (1-7)") }

if ( pass<=5 && pass>=1 ){
document.write("<div>" + "<h3>" + "cars suitable for " + pass + " passengers" + "</h3>" + "<img src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-bmw-x6-m-mmp-1-1604937613.jpg' alt='BMW X6M'>" +
 "<img src='https://assets-eu-01.kc-usercontent.com/bb5aba31-d98c-0160-8548-418b3723c58e/87fb83a0-bb93-41ed-b919-c45d06befbd9/2021_Mercedes_Benz_C_Class_2.jpg?width=1750&fm=jpg&auto=format' alt='Mercedes C-Class'>" + "</div>")}
else if ( pass>5 && pass<=7 ){
document.write("<div>" + "<h3>" + "cars suitable for " + pass + " passengers" + "</h3>" + "<img src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-bmw-x6-m-mmp-1-1604937613.jpg' alt='BMW X6M'>" +
 "<img src='https://cdn.slashgear.com/wp-content/uploads/2020/03/Gemera_exterior_2-1280x720.jpg' alt='konn'>" + "</div>")}

var q1 = confirm("do you like our website?");
while (q1 == false) {alert=('we have to hear your opinion') 
q1 = confirm("do you like our website?")}

if (q1==true ) {var star=prompt("how may start do we deserve");
document.write("you gave us " + star + " stars") ;
document.write(review(star))}



{var k=prompt("do you want to see my favourite car? (yes/no) ")
while (k == "no" || k==null){alert("you have to see it"); k=prompt("do you want to see my favourite car? (yes/no) ")
}
var co=prompt("how many times do you want to see the car? ")}
for (co ;  co > 0 ;  co-- ){ 
  document.write("<img src='https://www.topgear.com/sites/default/files/images/news-article/carousel/2021/05/7fbe63354cf866f1da63f8561a8364d6/manhart-golf-gti-290-website-3.jpeg' alt='golf'>")}
   
   var games=confirm('do you want to play a game?')
   if (games==true){ game() }


  function game(){
    var x=prompt('enter your daily miles you travel');
    var y=prompt('how many days you work?');
    var mpw=x * y;
    document.write('you drive '+ mpw +' per week')
    if (mpw<20)
    {document.write('  any car is suitable for you')}
    else if (mpw>20 && mpw<50)
    {document.write('  electric cars are suitable for you')}
    else {document.write('  hybrid or gasoline cars are suitable for you')}
  }

function review (x){
  var out='';
  for(var z=0; z<x ;z++){
   out= out + "<img src='https://www.easy-drawings-and-sketches.com/images/ink-pen-star-drawing-21876363.jpg'>"
  }

return out
}

