// get elements
const submitButton = document.getElementById('submit');
const textarea = document.getElementById('form');

async function getUrl() {
    try {
        const response = await fetch("https://worker-hello.torvic2021.workers.dev/webhook")
        if (!response.ok) {
            console.error("failed to fetch")
        }
        const data = await response.json()
        console.log(data)
        console.log(response)
        return data
    } catch(error) {
        console.error(error)
    }
}


// the event lisener for the submit button
submitButton.addEventListener('click', function() {

    
    
    const url = getUrl()    
    
    var message = textarea.value

    // check bad words
    // you better skip this part im not proud of it
    let badwords = ["nigger", "kanker", "fack","fuck" , "kut", "godverdommmen", "neuken", "mannen", "kloten", "sex", "gay", "porno",
        "bosnegger", "neger", "negerzoenen", "kankerzooi", "fuck", "pansexueel", "homo", "lesbo", "bosnicht", "mother fucker",
         "lul", "eikel", "hoer", "trut", "kutwijf", "aso", "bitch", "slet", "kanker mongool", "sukkel", "mongool",]

    let found = badwords.some(word => message.includes(word))

    
        // send the user to the error page if they typed a bad word
    if (found) {
        window.location.href = "error.html"
    } else {
        console.log("no bad word found")
        
        const data = {
            content: message
        }
        // send the data to the discord webhook
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)  
        })
        // handel th response
        .then(response => {
            if (response.ok) {
                document.getElementById('response').innerText = 'Message sent!';
            } else {
                document.getElementById('response').innerText = 'Failed to send the message';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('response').innerText = 'Error sending the message';
        })
    }
    
})

 

