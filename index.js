function scuberGreetingForFeet(feet){
  // Write your code here!
  // Use if and else if statements to return the correct greeting based on the distance the passenger desires to travel
  if (feet <= 400){
    return 'This one is on me!';
  }else if(feet > 2000 && feet < 2500){
    return 'I will gladly take your thirty bucks.';
  }else {
    return 'No can do.';
  }

  
}

function ternaryCheckCity(city){
  // Write your code here!
  // 'returns "Ok, sounds good." when the city is NYC'
  const message = (city === 'NYC') ? 'Ok, sounds good.' : 'No go.';
  return message;
  
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  
  switch (tip){
    // if the tip is generous'
    case ('generous'):
      return 'Thank you so much.'
      break;
    // if the tip is not as generous'
    case ('not as generous'):
      return 'Thank you.'
      break;
    // if anything else'
    default:
      return 'Bye.'
  }
  
}