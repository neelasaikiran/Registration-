const title = document.getElementById('title');
const username = document.getElementById('username');
const signinBtn = document.getElementById('signinBtn');
const signupBtn = document.getElementById('signupBtn');

signupBtn.onclick = function(){
    title.innerHTML = 'Sign Up';
    username.style.display = "block"
}

signinBtn.onclick = function(){
    title.innerHTML = 'Login';
    username.style.display = "none"
}
