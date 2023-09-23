const signup = document.getElementById("signup");

signup.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission
    
    var msg = document.getElementById("msg");
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("password").value;
    var cpass = document.getElementById("cpassword").value;

    if (name === '' || email === '' || pass === '') {
        msg.innerHTML = "All Fields are mandatory";
        return; // Stop further execution
    }

    if (pass !== cpass) {
        msg.innerHTML = "Passwod and Confirm password didn't match";
        return; // Stop further execution
    }else{
        msg.innerHTML = "Your account created successfully";
        localStorage.setItem("name1", name);
        localStorage.setItem("email1", email);
        localStorage.setItem("pass1", pass);
        
        login(name, email);
    }

});

function login(name, email) {
    var name1 = localStorage.getItem("name1");
    var email1 = localStorage.getItem("email1");
    
    if (name === name1 && email === email1) {
        window.location.href = "profile.html";
    } else {
        alert("User Not found");
    }
}
