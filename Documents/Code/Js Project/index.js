const form = document.querySelector('#form');

const password = document.querySelector('#Password');

const error = document.querySelector('.error');

const submit = document.querySelector('.submit');

const tel = document.querySelector('#telephone-number');

const email = document.querySelector('#email')

console.log(email)

 form.addEventListener('submit', (e) => {
    e.preventDefault()
    //console.log(password.value)
 

      //let messages = []
      if(password.value.length <= 8) {
         alert('your password is too short');
     };

     if(tel.value.length < 10 || isNaN) {
         alert('your telephone number is invalid');
     };

    //  if(email.value !== toLowerCase ()) {
    //      alert('Email should be in small letters');
    //  };

  document.querySelector('.submit').addEventListener ('click', function () {
      alert ('successfully submitted, kindly wait for a response');
  });

});
