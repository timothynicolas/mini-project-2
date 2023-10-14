

function resetPassword(){

    let email = document.getElementById('inputEmail').value;

    if(email === ''){
        alert('Please enter a valid email address.')
        return;
    }else {
        // If the email is not blank, trigger the modal
        let modal = new bootstrap.Modal(document.getElementById('exampleModal'));
        modal.show();
    }
}




