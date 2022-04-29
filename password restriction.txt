if (password.length < 8) {
    errors.push({
      msg: "password must be more than 8 characteres"
    });
  }

  else{
    var count_special_characters = 0;
    var count_number = 0;
    var count_uppercase_letter = 0;

    for(var i = 0; i < password.length ; i++){
      
      if (password[i] >= '!' && password[i] <= '/') {
        count_special_characters += 1;
      }
     
      else if (password[i] >= 'A' && password[i] <= 'Z') {
        count_uppercase_letter += 1;
      }

      else if (password[i] >= '0' && password[i] <= '9') {
        count_number += 1;
      }
    }

    if(!count_special_characters || !count_uppercase_letter || !count_number){
      errors.push({
        msg: "Password must contain a capital letter, a number and at least one symbol"
      })
    }
    
  }
