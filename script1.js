const logout = document.getElementById("logout");

logout.addEventListener('click', function(){
    localStorage.clear();
    alert("You are successfully logout");
    window.location.href = "index.html";
});