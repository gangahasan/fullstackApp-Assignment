import { baseurl } from "./baseUrl.js";

let form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let username = form.username.value;
  let email = form.email.value;
  let password = form.password.value;
  let mobile = form.mobile.value;

  let userobj = { username, email, password, mobile };

  fetch(`${baseurl}/users`)
    .then((res) => res.json())
    .then((data) => {
      let user = data.filter((el, i) => {
        return el.email === email;
      });

      if (user.length > 0) {
        alert("User already exists");
        window.location.href = "login.html";
      } else {
        fetch(`${baseurl}/users`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userobj),
        }).then(() => {
          alert("User registered successfully");
          window.location.href = "login.html";
        });
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Something went wrong");
    });
});
