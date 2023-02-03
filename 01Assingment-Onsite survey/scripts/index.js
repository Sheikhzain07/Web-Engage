document.getElementById("form").addEventListener("submit", userDetail);

function userDetail() {
  event.preventDefault();

  let email = document.getElementById("email").value;
  let number = document.getElementById("number").value;
  let code = document.getElementById("code").value;
  //   console.log(email);
  localStorage.setItem("emailKey", email);
  localStorage.setItem("numberKey", number);
  localStorage.setItem("codeKey", code);

  if (!email.includes("@") || !email.includes(".com") || email.length < 8) {
    alert("You have entered an invalid email address");
  } else if (number.length !== 10) {
    alert("You have entered an invalid Mobile number");
  } else if (
    email.includes("@") &&
    email.includes(".com") &&
    email.length > 8 &&
    number.length === 10
  ) {
    window.location.href = "./description/description.html";
  }
}
