const userJSON = localStorage.getItem('user');

if (userJSON) {
    const user = JSON.parse(userJSON);
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const Token = document.getElementById('token');
    const password = document.getElementById('password');

    if (name && email && Token && password) {
        name.innerHTML = `Full Name: ${user.name}`;
        email.innerHTML = `Email: ${user.email}`;
        Token.innerHTML = `Token: ${user.accessToken}`;
        password.innerHTML = `Password: ${user.password}`;
    } else {
        console.error('One or more elements not found.');
    }
} else {
    // Handle the case where user data is not found in local storage
    console.error('User data not found.');

    // Redirect to the signup page if the user is not logged in
    if (window.location.href.includes('profile.html')) {
        window.location.href = 'index.html';
    }
}

// Redirecting to MainPage
const logoutbtnref = document.getElementById('logout');
logoutbtnref.addEventListener('click', (event) => {
    localStorage.clear();
    window.location.href = 'index.html';
});

