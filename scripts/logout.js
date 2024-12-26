
export function logout(){
    let logindata = JSON.parse(localStorage.getItem("logindata"));

    if(logindata == null){
        alert("Please login...");
        window.location.href = "login.html";
    }
    
    document.getElementById('username').textContent = `Welcome,${logindata.username}`;

    document.getElementById('logout').addEventListener("click",function(){

        localStorage.removeItem("logindata");
        alert("Redirecting to Home Page");
        window.location.href = "login.html";
        
    });

}
