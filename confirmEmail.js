
function verifyEmail(){
    var email = document.getElementById("email").value;
    var confirmEmail = document.getElementById("confirmEmail").value;

    if (email !== confirmEmail) {
        alert("Emails do not match, verify entries match.");
        Event.preventDefault();
    }
}