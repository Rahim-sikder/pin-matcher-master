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

})