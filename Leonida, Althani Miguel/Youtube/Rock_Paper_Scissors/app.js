let score = 0;

    function playGame(playerChoice) {
      const choices = ['rock', 'paper', 'scissors'];
      const computerChoice = choices[Math.floor(Math.random() * 3)];

      displayChoice('player', playerChoice);
      displayChoice('computer', computerChoice);

      const result = determineWinner(playerChoice, computerChoice);

      const resultDiv = document.getElementById('result');
      resultDiv.textContent = result;

      updateScore(result);
    }

    function displayChoice(player, choice) {
      const choiceDiv = document.createElement('div');
      choiceDiv.textContent = `${player.charAt(0).toUpperCase() + player.slice(1)} chose ${choice}`;
      document.body.appendChild(choiceDiv);

      setTimeout(() => {
        choiceDiv.remove();
      }, 3000);
    }

    function determineWinner(playerChoice, computerChoice) {
      if (playerChoice === computerChoice) {
        return 'It\'s a tie!';
      } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
      ) {
        return 'You win!';
      } else {
        return 'Computer wins!';
      }
    }

    function updateScore(result) {
      const scoreDiv = document.getElementById('score');
      if (result.includes('win')) {
        score++;
      } else if (result.includes('lose')) {
        score--;
      }
      scoreDiv.textContent = `Score: ${score}`;
    }