document.getElementById('btn-submit').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // console.log(email);

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value ;
    // console.log(password);

    if(email == 'n.sakib.sad@gmail.com' && password == '$@k!b222255'){
        // console.log('Valid User');
        window.location.href = 'bank.html';
    }
    else{
        // console.log('Invalid User');
        alert('Invalid User');
    }

})