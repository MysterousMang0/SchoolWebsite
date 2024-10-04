const textarea = document.getElementById("TextArea");
const buttton = document.getElementById("Check");
var answer = document.getElementById("answer");
url = 'https://discord.com/api/webhooks/1291784928970670150/RYrqV58Npgt4tkcx9Bp3tHw8sJ7NPZ2zUV9l1Tfb8SMEYVDz_eKsoNieNizFlboFnoOz';

function onClick() {
    text = textarea.value;
    length = text.length
    answer.innerText = `Your text is ${length} letters long!`;

    // the event lisener for the submit button
    buttton.addEventListener('click', function() {
        // Get the content of the textarea
        const message = text + ` The message was ${length} letters long.`;

        // create the data object
        const data = {
            content: message 
        };

    // send the data to the webhook
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)  
        })
        .then(response => {
            if (response.ok) {
                //document.getElementById('response').innerText = 'Message sent!';
                console.log("Message sent")
            } else {
                //document.getElementById('response').innerText = 'Failed to send the message';
                console.log("Failed to send message")
            }
        })
        .catch(error => {
            console.error('Error:', error);
            //document.getElementById('response').innerText = 'Error sending the message';
        });

    });
}