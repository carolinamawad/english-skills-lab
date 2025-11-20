function scrollToSection() {
document.getElementById('activities').scrollIntoView({ behavior: 'smooth' });
}


// Example quiz functionality
function checkAnswer(question, correctOption) {
const selected = document.querySelector(`input[name="${question}"]:checked`);
if (!selected) {
alert("Please select an answer.");
return;
}


if (selected.value === correctOption) {
alert("Correct! Great job.");
} else {
alert("Try again!");
}
}
