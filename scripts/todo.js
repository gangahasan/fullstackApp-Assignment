import { baseurl } from "./baseUrl.js";
import { logout } from "./logout.js";

logout();

let userdata = JSON.parse(localStorage.getItem("logindata"));

let form = document.getElementById("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  let task = form.task.value;
  let deadline = form.deadline.value;
  let priority = form.priority.value;

  let todoObj = { task, deadline, priority };

  fetch(`${baseurl}/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todoObj),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      alert("Todo added successfully");
      window.location.href = "todo.html";
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Something went wrong");
    })
    .finally(() => {
      form.reset();
    });
});
