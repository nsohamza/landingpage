var randomNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
  var guess = document.getElementById("guess").value;
  if (guess == randomNumber) {
    document.getElementById("result").innerHTML = "You guessed it! The number was " + randomNumber;
  } else if (guess > randomNumber) {
    document.getElementById("result").innerHTML = "Too high!";
  } else {
    document.getElementById("result").innerHTML = "Too low!";
  }
}

function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  if (password === 'PassW') {
    // Login successful
    alert('Password Correct');
    document.getElementById('username-display').textContent = username;
  } else {
    // Login failed
    alert('Incorrect password');
  }
}
