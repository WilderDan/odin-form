const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", (e) => {
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
    console.log("Passwords do not match.");
    e.preventDefault();
  }
});

window.addEventListener("submit", (e) => {
  console.log("Form submitted.");
});
