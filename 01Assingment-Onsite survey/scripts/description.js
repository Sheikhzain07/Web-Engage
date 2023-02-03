let email = localStorage.getItem("emailKey");
let number = localStorage.getItem("numberKey");
let code = localStorage.getItem("codeKey");

document.getElementById("emailId").innerHTML = email;
// if (number.length === 10) {
document.getElementById("numberId").innerHTML = number;
// }
document.getElementById("codeId").innerHTML = code;
