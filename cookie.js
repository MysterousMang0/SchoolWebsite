// execute the function when the window loads
window.onload = function() {
    // declare the setCookie function
    function setCookie(name) {
        let id = Math.random()
        id = id * 10000000000000000
        const date = new Date("December, 30, 2025 1:15:00")
        let expires = "expires=" + date
        document.cookie = name + "=" + id + ";" + expires;
        console.log("the cookie was set")
    };

    function getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i <ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
      }

      

      let cookie = getCookie("_COOKIE")
  
      

      if (cookie === ""){
        //let aprove = false
        //let Cookies = localStorage.getItem("Cookies")
        // get the aprovel of the user
        
        const div = document.createElement("div")
        div.id = "cookieDiv"
        div.innerHTML = `<p>we use cookies. do you aprove?</p>
        <button id="yes">Accept</button> <br>
        <button id="no">No</button>`

        document.body.appendChild(div)
        
        document.getElementById("yes").addEventListener("click", function(){
          div.remove()
          setCookie("_COOKIE")
          alert("You agreed to set a cookie :)")
          localStorage.setItem("Cookies", "true")
          console.log("the item was set")
          
        }) 
        
        document.getElementById("no").addEventListener("click", function(){
          div.remove
          alert("You did not agree to cookies :(")
          window.location.href = "error.html"
          localStorage.setItem("Cookies", "false")
          
        })
      
        // check if the usere aproves
      }
      if (cookie !== "") {
        return 0
      }
    








        
}

    


