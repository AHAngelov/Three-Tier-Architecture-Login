function validateForm(event) {
    event.preventDefault();
  
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');
  
    if (username === 'Angel' && password === 'Angel21') { 
      errorMessage.innerText = '';
      alert('Yes'); 
    } else { 
      errorMessage.innerText = 'NO!';
    }
  }