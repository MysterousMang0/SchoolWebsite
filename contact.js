// get elements
const submitButton = document.getElementById('submit');
const textarea = document.getElementById('form');
const url = 'https://discord.com/api/webhooks/1284469453920272387/ny3L5CpMZN3SXeqsNM_Q5PVwCtGYwF1UkiVXWbXB52Y80xpk6FEd8uZT3BqiYbTJVwBC';

// the event lisener for the submit button
submitButton.addEventListener('click', function() {
    // Get the content of the textarea
    const message = textarea.value;

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
    });
});

