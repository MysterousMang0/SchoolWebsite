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
        let Cookies = localStorage.getItem("Cookies")
        // get the aprovel of the user
        let aprove = prompt("Do you consent to cookies? type yes if you do so.")
        // check if the usere aproves
        if (aprove && aprove.toLowerCase() === "yes") {
            setCookie("_COOKIE")
            alert("You agreed to set a cookie :)")
            localStorage.setItem("Cookies", "true")
            console.log("the item was set")
            
        } 
        if (aprove && aprove.toLowerCase() !== "yes") {
            alert("You did not agree to cookies :(")
            window.location.href = "error.html"
            localStorage.setItem("Cookies", "false")
        }
      }

      if (cookie !== "") {
        return 0
      }


       
        
}
