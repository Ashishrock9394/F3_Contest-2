// Signup Page
const signup = document.getElementById("signup");
const msg = document.getElementById("msg");

function generateAccessToken() {
    let characters = '0123456789abcde';
    let token = '';
    for (let i = 0; i < 16; i++) {
        token += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return token;
}

// Redirect to profile page if a logged-in user tries to navigate to the signup page
const userJSON = localStorage.getItem('user');
if (userJSON && window.location.href.includes('signup.html')) {
    window.location.href = 'profile.html';
}else{
    signup.addEventListener('click', (event) => {
    event.preventDefault();
    var name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const cpassword = document.getElementById('cpassword').value;

    if(name==='' || email==='' || password===''){
        msg.innerHTML = "All Fields are mandatory";
        return;
    }

    if (password === cpassword) {
        const accessToken = generateAccessToken();
        const user = { name, email, password, accessToken };
        localStorage.setItem('user', JSON.stringify(user));
        msg.innerHTML = 'Signup successful. Redirecting...';
        setTimeout(() => {
            window.location.href = 'profile.html';
        }, 2000);
    } else {
        msg.innerHTML = "Passwod and Confirm password didn't match";
    }
});

}