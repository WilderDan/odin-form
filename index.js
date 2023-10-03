const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", (e) => {
  if (!passwordsEqual()) e.preventDefault();
});

window.addEventListener("submit", (e) => {
  console.log("Form submitted.");
  e.preventDefault();
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
