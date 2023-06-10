function showPassword(){
    const passwordInput = document.getElementById("password1")
    if (passwordInput.type === "password") {
      passwordInput.type ="text";
    } else {
      passwordInput.type = "password"
    }
  }
  function showPassword2(){
    const passwordInput = document.getElementById("password2")
    if (passwordInput.type === "password") {
      passwordInput.type ="text";
    } else {
      passwordInput.type = "password"
    }
  }

  /* Converting the form to a new formData object */
   
  /* Converting the form to a URL-encoded string */
  
const password = document.getElementById('password1');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');
const confirmPassword = document.getElementById('password2');

/* Sending the formData object as payload using Fetch */
 
form.addEventListener('submit', function(e) {
    let messages = []
    // Prevent default behavior:
    const passwordVal = password.value;
    const confirmPasswordVal = confirmPassword.value;
    if(passwordVal.length < 8 ) {
      messages.push('Password is too short')
    }; 
    if (confirmPasswordVal !== passwordVal ){
        messages.push('Password does not match')
    } 
    if(confirmPasswordVal === passwordVal && passwordVal.length >= 8){
        messages.push('Registration Successful!') 
    };
    if (messages.value !== 'Regestration Successful'){
      e.preventDefault();
      errorElement.innerText = messages.join(',')
    }; 
    e.preventDefault()

      // Create payload as new FormData object:
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    console.log(JSON.stringify(data));
    
      // Post the payload using Fetch:
    fetch('http://13.36.56.213/dj-rest-auth/registration/', {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
        // 'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjU1MjE3NzQxLCJpYXQiOjE2NTUyMTc0NDEsImp0aSI6IjM3MTkwMzc4OTNiYzRhZTc5ODdiMjc1MzgyMGFhOTM4IiwidXNlcl9pZCI6NX0.XoQV6RLdbVwV_8j6SXVgnhdrWRU4S94pQmGVolaohnU'
      },
      
      body:JSON.stringify(data),
      redirect: "follow"
    })

  .then(res => res.json())
  .then(data => console.log(data))
  .catch(error => console.log('error', error));

});
//https://httpbin.org/post
// http://13.36.56.213/post
//cors-anywhere.herokuapp.com/
//headers: {
//  'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjU1MjE3NzQxLCJpYXQiOjE2NTUyMTc0NDEsImp0aSI6IjM3MTkwMzc4OTNiYzRhZTc5ODdiMjc1MzgyMGFhOTM4IiwidXNlcl9pZCI6NX0.XoQV6RLdbVwV_8j6SXVgnhdrWRU4S94pQmGVolaohnU'
//},
// http://13.36.56.213/dj-rest-auth/registration/