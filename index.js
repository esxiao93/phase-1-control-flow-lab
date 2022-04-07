function scuberGreetingForFeet(distance){
  let charge;
  if (distance <= 400) {
    charge = 'This one is on me!';
  } else if (distance > 400 && distance < 2000) {
    charge = 'That will be twenty bucks.';
  } else if (distance > 2000 && distance < 2500) {
    charge = 'I will gladly take your thirty bucks.';
  } else if (distance > 2500) {
    charge = 'No can do.';
  }
  return charge;
}

function ternaryCheckCity(city){
  return city === "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip){
if (tip === "generous") {
  return "Thank you so much.";
} else if (tip === "not as generous") {
      return "Thank you.";
} else {
  return "Bye.";
}
}