
var scoreNumber = 0;
var buttonStyle = "buttonStyleClass btn btn-success";
function addButtons() {
  $('#chooseAButton').empty();
  $('#answer').empty();
  $('#listButtons').empty();
  $('#answer').empty();
  var nrButtons = $('#buttonsNumber').val();
  var x = Math.floor((Math.random() * nrButtons) + 0);
  while(nrButtons--) {
    if (nrButtons == x) {
      $('#listButtons').append(`
        <div class="container">
          <br>
          <button class= "` + buttonStyle + `" type="button" onclick="rightButton(); addScore();">Choose one</button>
          <br>
        </div>
      `);
    } else {
      $('#listButtons').append(`
        <div class="container">
          <br>
          <button class= "` + buttonStyle + `" type="button" onclick="wrongButton();">Choose one</button>
          <br>
        </div>
      `);
    }
  }
  return false;
}

function rightButton() {
  $('#listButtons').empty();
  $('#answer').append(`
      <br>
      <br>
      <p style="font-family:courier; text-align:center; font-size:300%; color: green;">You chose the RIGHT button!</p>
    `);
  return false;
}

function wrongButton() {
  $('#listButtons').empty();
  $('#answer').append(`
      <br>
      <br>
      <p style="font-family:courier; text-align:center; font-size:300%; color: green;">You chose the WRONG button!</p>
    `);
  return false;
}

function addScore() {
  $('#score').empty();
  document.getElementById('score').innerHTML = "Score: " + ++scoreNumber;
  document.getElementById("score").className = "card-header";
  if (scoreNumber == 5) {
    alert("Congrats! You've got 5 points! You can buy something!");
    chooseButton();
  }
}

function chooseButton() {
  $('#listButtons').empty();
  $('#answer').empty();
  $('#chooseAButton').empty();
  $('#chooseAButton').append(`
    <div class="container">
      <div class="card-footer text-muted">
        <button type="button" class="btn btn-primary" onclick="buyPrimary();">Buy this botton style</button>
        <br> <p>COST: 5 puncte</p>

        <button type="button" class="btn btn-info" onclick="buyInfo();">Buy this botton style</button>
        <br> <p>COST: 5 puncte</p>

        <button type="button" class="btn btn-warning" onclick="buyWarning();">Buy this botton style</button>
        <br> <p>COST: 10 puncte</p>

        <button type="button" class="btn btn-secondary" onclick="buySecondary();">Buy this botton style</button>
        <br> <p>COST: 10 puncte</p>

        <button type="button" class="btn btn-light" onclick="buyLight();">Buy this botton style</button>
        <br> <p>COST: 15 puncte</p>

        <button type="button" class="btn btn-danger" onclick="buyDanger();">Buy this botton style</button>
        <br> <p>COST: 20 puncte</p>

        <button type="button" class="btn btn-dark" onclick="buyDark();">Buy this botton style</button>
        <br> <p>COST: 20 puncte</p>

        <button type="button" class="btn btn-success" onclick="deleteChooseButtons();">KEEP THE SCORE and GO BACK</button>
      </div>
    </div>
  `);
}
function buyPrimary() {
  if (scoreNumber >= 5) {
    scoreNumber -= 5;
    document.getElementById('score').innerHTML = "Score: " + scoreNumber;
    $('#chooseAButton').empty();
    buttonStyle = "buttonStyleClass btn btn-primary";
  } else {
    alert("You don't have 5 points :(");
  }
}

function buyInfo() {
  if (scoreNumber >= 5) {
    scoreNumber -= 5;
    document.getElementById('score').innerHTML = "Score: " + scoreNumber;
    $('#chooseAButton').empty();
    buttonStyle = "buttonStyleClass btn btn-info";
  } else {
    alert("You don't have 5 points :(");
  }
}

function buyWarning() {
  if (scoreNumber >= 10) {
    scoreNumber -= 10;
    document.getElementById('score').innerHTML = "Score: " + scoreNumber;
    $('#chooseAButton').empty();
    buttonStyle = "buttonStyleClass btn btn-warning";
  } else {
    alert("You don't have 10 points :(");
  }
}

function buySecondary() {
  if (scoreNumber >= 10) {
    scoreNumber -= 10;
    document.getElementById('score').innerHTML = "Score: " + scoreNumber;
    $('#chooseAButton').empty();
    buttonStyle = "btn btn-secondary";
  } else {
    alert("You don't have 10 points :(");
  }
}

function buyLight() {
  if (scoreNumber >= 15) {
    scoreNumber -= 15;
    document.getElementById('score').innerHTML = "Score: " + scoreNumber;
    $('#chooseAButton').empty();
    buttonStyle = "btn btn-light";
  } else {
    alert("You don't have 15 points :(");
  }
}

function buyDanger() {
  if (scoreNumber >= 20) {
    scoreNumber -= 20;
    document.getElementById('score').innerHTML = "Score: " + scoreNumber;
    $('#chooseAButton').empty();
    buttonStyle = "btn btn-danger";
  } else {
    alert("You don't have 20 points :(");
  }
}

function buyDark() {
  if (scoreNumber >= 20) {
    scoreNumber -= 20;
    document.getElementById('score').innerHTML = "Score: " + scoreNumber;
    $('#chooseAButton').empty();
    buttonStyle = "btn btn-dark";
  } else {
    alert("You don't have 20 points :(");
  }
}

function deleteChooseButtons() {
  $('#chooseAButton').empty();
}
