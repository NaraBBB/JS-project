// if else / turnery operator / switch


//if else statement

if('Sergii'.length > 5){//It's more than 5 
    console.log("It's more than 5 ");

}else if('Sergii'.length == 5){
console.log("It's equal to 5");

}else{
    console.log("It's less than 5")
}
//turnery operator is all about '?'; and :
'Sergii'.length > 5 ? console.log("It's more than 5 ") : console.log("It's less than 5 ");

//Swtich statement 

var today = new Date().getDay();
console.log(today);

var today = new Date().getDate();
console.log(today);



switch (new Date().getDay()) {
  case 0:
    console.log("Өнөөдөр Ням гариг.");
    break;
  case 1:
    console.log("Өнөөдөр Даваа гариг.");
    break;
  case 2:
    console.log("Өнөөдөр Мягмар гариг.");
    break;
  case 3:
    console.log("Өнөөдөр Лхагва гариг.");
    break;
  default:
    console.log("Бусад өдөр.");//Өнөөдөр Лхагва гариг.
}

