let userBalance = 1000;
let loggedIn = false;

function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Simple login check (in a real app, you'd check against a database)
  if (username === 'user' && password === 'password') {
    loggedIn = true;
    document.getElementById('login-section').style.display = 'none';
    document.getElementById('game-section').style.display = 'block';
    document.getElementById('balance').textContent = userBalance;
  } else {
    alert('Invalid username or password');
  }
}

function placeBet() {
  const betAmount = parseInt(document.getElementById('betAmount').value);

  if (betAmount > userBalance) {
    alert('Insufficient balance!');
    return;
  }

  // Simulate a random win/loss
  const isWin = Math.random() > 0.5;
  if (isWin) {
    userBalance += betAmount;
    document.getElementById('gameResult').textContent = `You win! New balance: ${userBalance}`;
  } else {
    userBalance -= betAmount;
    document.getElementById('gameResult').textContent = `You lose! New balance: ${userBalance}`;
  }

  document.getElementById('balance').textContent = userBalance;
}
