function checkAnswer() {
    // Get the selected answer
    const selectedAnswer = document.querySelector('input[name="q1"]:checked');
    
    if (!selectedAnswer) {
        alert('Please select an answer.');
        return;
    }

    // Compare the selected answer with the correct answer
    const correctAnswer = "A";
    const feedback = document.getElementById("feedback");

    if (selectedAnswer.value === correctAnswer) {
        feedback.textContent = "Correct! The definition of the limit of a sequence is: For every \( \epsilon > 0 \), there exists an \( N \in \mathbb{N} \) such that for all \( n \geq N \), \( |a_n - L| < \epsilon \).";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Incorrect. Try again.";
        feedback.style.color = "red";
    }
}
