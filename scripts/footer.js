 const footer =()=>{
    let footer = `
        <style>
        // #footerbar {
        // background-color: #333;
        // color: white;
        // text-align: center;
        // bottom: 0;
        // position: fixed;
        // }
        </style>
        <div id="footerbar">
            <p>&copy; 2024 My Website. Made by Ganga. All rights reserved.</p>

        </div>`;
    document.getElementById('footer').innerHTML = footer;
}
footer();