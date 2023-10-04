const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", (e) => {
  if (!passwordsEqual()) e.preventDefault();
});

window.addEventListener("submit", (e) => {
  e.preventDefault();

  const welcome = document.createElement("h1");
  welcome.classList.add("neonText");
  welcome.textContent = `Welcome ${e.target[0].value}!`;

  const signUp = document.getElementById("signUp");
  while (signUp.firstChild) signUp.removeChild(signUp.firstChild);
  signUp.appendChild(welcome);
});

window.addEventListener("keyup", (e) => {
  const passwordErrorMessage = document.getElementById("passwordErrorMessage");
  passwordErrorMessage.style.visibility = passwordsEqual()
    ? "hidden"
    : "visible";
});

function passwordsEqual() {
  const passwordValue = document.getElementById("password").value;
  const confirmPasswordValue = document.getElementById("confirmPassword").value;
  return passwordValue === confirmPasswordValue;
}
