const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", (e) => {
  //  e.preventDefault();
  validateName();
  validateEmail();
  validatePassword();
});

function validateName() {
  const name = document.getElementById("userName").value;
}

function validateEmail() {
  console.log("email");
}

function validatePassword() {
  console.log("password");
}
