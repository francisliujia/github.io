document.addEventListener('DOMContentLoaded', function() {
    const result1 = document.querySelector("#result1");
    const sportButtons = document.querySelectorAll('.sport-button');
    
    sportButtons.forEach(button => {
        button.addEventListener('click', function() {
            const isCorrect = this.dataset.answer === 'correct';
            result1.innerHTML = isCorrect ? "Correct" : "Incorrect";
            this.style.backgroundColor = isCorrect ? 'green' : 'red';
        });
    });

    document.querySelector('#submitResponse').addEventListener('click', function() {
        document.querySelector("#result2").innerHTML = "Thank you for answering the question.";
    });
});




