import { baseurl } from "./baseUrl.js";

let form = document.getElementById("form");

form.addEventListener("submit", function(event){
    event.preventDefault();
    let email = form.email.value;
    let password = form.password.value;

    fetch((`${baseurl}/users`))
    .then((res)=>res.json())
    .then((data)=>{
        let user = data.filter((el,i)=>el.email === email)
        if(user.length != 0){

            if(user[0].password === password){
                alert("login successful")
                localStorage.setItem("logindata", JSON.stringify(user[0]))
                window.location.href = "todo.html";
            }
            else{
                alert("Incorrect password")
            }
        }
        else{
            alert("User does not rigistered")
            window.location.href = "signup.html"
        }
    })
    .catch((error)=>{
        console.log(error);
        alert("something went wrong, please try again later")
    });

});

