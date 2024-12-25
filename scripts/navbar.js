const navbar= ()=>{
    let card= 
    `<a href="./index.html">My first app</a>
    <div id="nav-list">
    <a href="./signUp.html">signUp</a>
    <a href="./login.html">login</a>
    <a href="./todo.html">todo</a>
    </div>`


    document.getElementById("navbar").innerHTML=card;
}
navbar();
