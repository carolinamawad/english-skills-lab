function calculateScore() {
    let score = 0;
    const total = 10;

    for (let i = 1; i <= total; i++) {
        const answer = document.querySelector(`input[name="q${i}"]:checked`);
        if (answer) score += parseInt(answer.value);
    }

    let message = "";

    if (score <= 4) {
        message = "Your level seems to be around A2–B1. You’re making progress, and with a bit more practice in grammar and reading, you will improve quickly. Keep going—you’re on the right path!";
    } 
    else if (score <= 7) {
        message = "Your results suggest you are around a solid B1. You understand the main ideas of texts, but continuing to practice complex reading will help you reach B2 confidently.";
    } 
    else {
        message = "Great job! You are performing at a B2 level. You handle detailed texts well and show strong comprehension. Keep sharpening your skills—you’re close to C1 territory!";
    }

    document.getElementById("result").innerHTML = 
        `<strong>Your score: ${score}/${total}</strong><br>${message}`;
}
