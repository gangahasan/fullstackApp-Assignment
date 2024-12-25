const navbar = () => {
  let card = `<a href="./index.html">My first app</a>
    <div id="nav-list">
    <a href="./signup.html">Sign Up</a>
    <a href="./login.html">Login</a>
    <a href="./todo.html">Todo</a>
    </div>`;

  document.getElementById("navbar").innerHTML = card;
};
navbar();
