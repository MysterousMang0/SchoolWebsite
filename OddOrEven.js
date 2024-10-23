const button = document.getElementById("OddOrEvenBtn")
const textAreaOddOrEven = document.getElementById("OddOrEven")
const answerOddOrEven = document.getElementById("OddOrEvenAnswer")

button.addEventListener("click", function() {
    var text = textAreaOddOrEven.value
    
    if (!isInteger(text)){

        answerOddOrEven.innerHTML = "Please enter a Valid number"
    }
    if (isInteger(text)) {
        c = text % 2
        if (c === 1) {
            answerOddOrEven.innerHTML = "Your number is ODD"
        }   
        if (c === 0) {
            answerOddOrEven.innerHTML = "Your number is EVEN"
        }
    }
})
