function getPin(){
   const pin = generatePin();
   const pinString = pin + '';
   if (pinString.length === 4 ){
      return pin ;
   }
   else{
      return getPin;
   }
};
function generatePin (){
   const random = Math.round(Math.random()*10000);
   return random;
};

document.getElementById('generate-pin').addEventListener('click', function(){
   const pin = getPin();


   // dispaly pin 
   const dispalyPinField = document.getElementById('display-pin');
   dispalyPinField.value = pin;

});

// calculator 
document.getElementById('calculator').addEventListener('click', function(){
   const number = event.target.innerText;
   const typeNumberField = document.getElementById('typed-numbers')
   if (isNaN(number)){
      console.log(number);
      if (number === 'C'){
         typeNumberField.value = '';
      }
      else if (number === '<'){
         const digits = previousTypedNumber.splite('');
         digits.pop();
         const remainingDigits = digits.join();
         typeNumberField.value = remainingDigits;

      }
   }
   else{
     
      const previousTypedNumber = typeNumberField.value;
      const newTypedNumber = previousTypedNumber + number;
      typeNumberField.value = newTypedNumber;
   }
    
      
});

document.getElementById ('verify-pin').addEventListener ('click', function(){
   const dispalyPinField = document.getElementById('display-pin');
   const currentPin = dispalyPinField.value;

   const typedNumberField = document.getElementById('typed-numbers');
        typedNumber = typedNumberField.value;


        const pinSuccessMessage = document.getElementById('pin-success');
        const pinFailureMessage = document.getElementById ('pin-failure');
        if ( typedNumber === currentPin){
         
           pinSuccessMessage.style.display = 'block';
           pinFailureMessage.style.display = 'none';
        }
        else{
         
          pinFailureMessage.style.display = 'block';
          pinSuccessMessage.style.display = 'none';
        }
})