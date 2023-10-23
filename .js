//Start Screen
onEvent("loginButton", "click", function( ) {
  setScreen("loginScreen");
});
onEvent("signupButton", "click", function( ) {
  setScreen("signupScreen");
});
//Login Screen
onEvent("loginButton2", "click", function( ) {
  readRecords(getText("loginEmail"), {}, function(records) {
    for (var i =0; i < records.length; i++) {
      if (getText("loginEmail") == (records[i]).EmailOrPhone && getText("loginPassword") == (records[i]).Passwords) {
        setScreen("OTPToUser");
      } else {
        showElement("wrongLogin");
      }
      setProperty("OTPConfirmName", "text",(records[i]).Names);
    }
  });
});
onEvent("loginBackButton", "click", function( ) {
  setScreen("startScreen");
});
//Sign-Up Screen
onEvent("signupButton2", "click", function( ) {
  createRecord(getText("SignupEmail"), {EmailOrPhone:(getText("SignupEmail")), Passwords :(getText("SignupPassword")), Names :(getText("SignupName")), LoginTime: (Date.now())}, function(record) {
    
  });
  if (getText("SignupPassword") == getText("SignupConfirmPassword")) {
    setScreen("startScreen");
  } else {
    showElement("errorPassword");
  }
  setText("SignupEmail", " ");
  setText("SignupPassword", " ");
  setText("SignupConfirmPassword", " ");
  setText("SignupName", " ");
});
onEvent("signupBackButton", "click", function( ) {
  setScreen("startScreen");
});
//OTP to User Screen
onEvent("loginWithOTP2", "click", function( ) {
  showElement("needOTP");
});
onEvent("loginWithOTP", "click", function( ) {
  setScreen("OTPScreen");
  setProperty("OTPUserPhoneNumber", "text", getText("loginEmail") );
});
onEvent("sendOTP", "click", function( ) {
  showElement("loginWithOTP");
  setProperty("OTPCode", "text", randomNumber(1000, 9999));
  hideElement("needOTP");
  hideElement("loginWithOTP2");
});
//OTP Screen
onEvent("OTPButton", "click", function( ) {
  if (getText("inputOTP") == getText("OTPCode"))
    {
      setScreen("OTPConfirmScreen");
    }else
    {
      showElement("OTPinvalid");
    }
});
onEvent("DidntReceiveButton", "click", function( ) {
  setScreen("OTPToUser");
});
onEvent("ResendOTPButton", "click", function( ) {
  setScreen("OTPToUser");
});
//OTP Confirm Screen
onEvent("OTPConfirmButton", "click", function( ) {
  setScreen("homeScreen");
  setProperty("nameTag", "text",getText("OTPConfirmName"));
});
//Home Screen
onEvent("powerButton", "click", function( ) {
  setScreen("profileScreen");
});
onEvent("powerButton2", "click", function( ) {
  setScreen("gameScreen");
});
var count = 0;
onEvent("powerButton3", "click", function( ) {
  createRecord("chatUser", {userChatEmailorPhone:(getText("loginEmail")) , userChatName:(getText("nameTag"))}, function(record) {
    
  });
  readRecords("chatUser", {}, function(records) {
    if (count < records.length) {
      count = count +1;
    }
  });
  setScreen("messageScreen");
  setImageURL("profilePicture4", getImageURL("avatar"));
  setText("userEmailorPhone", getText("loginEmail"));
  setText("userEmailorPhone2", getText("loginEmail"));
});
onEvent("powerButton4", "click", function( ) {
  readRecords(getText("loginEmail"), {}, function(records) {
    for (var i =0; i < records.length; i++) {
      setText("contactInfo", records[i].Names);
      setText("contactInfo2", records[i].EmailOrPhone);
      setImageURL("profilePicture2", getImageURL("avatar"));
    }
  });
  setScreen("emergencyTextScreen");
});
onEvent("exitHome", "click", function( ) {
  readRecords("chatUser", {}, function(records) {
    for (var i =0; i < records.length; i++) {
      deleteRecord("chatUser", {id:((records[i]).id), userChatEmailorPhone:(records[i]).userChatEmailorPhone , userChatName:records[i].userChatName});
    }
  }); 
  setProperty("inputOTP", "text", "- - - -");
  setProperty("OTPCode", "text", " ");
  setScreen("startScreen");
});
//Profile Creation Screen
var avatarNumber = 1;
setNumber("avatarNumber", avatarNumber);
setImageURL("avatar", "avatar1.PNG");
onEvent("rightButton", "click", function( ) {
  if (avatarNumber < 9) {
    avatarNumber = avatarNumber+1;
    setNumber("avatarNumber", avatarNumber);
    if (avatarNumber == 9) {
      setImageURL("avatar", "avatar9.PNG");
    } else if (avatarNumber == 8) {
      setImageURL("avatar", "avatar8.PNG");
    } else if (avatarNumber == 7) {
      setImageURL("avatar", "avatar7.PNG");
    } else if (avatarNumber == 6) {
      setImageURL("avatar", "avatar6.PNG");
    } else if (avatarNumber == 5) {
      setImageURL("avatar", "avatar5.PNG");
    } else if (avatarNumber == 4) {
      setImageURL("avatar", "avatar4.PNG");
    } else if (avatarNumber == 3) {
      setImageURL("avatar", "avatar3.PNG");
    } else if (avatarNumber == 2) {
      setImageURL("avatar", "avatar2.PNG");
    } else {
      setImageURL("avatar", "avatar1.PNG");
    }
  }
});
onEvent("leftButton", "click", function( ) {
  if (avatarNumber > 1) {
    avatarNumber = avatarNumber-1;
    setNumber("avatarNumber", avatarNumber);
    if (avatarNumber == 9) {
      setImageURL("avatar", "avatar9.PNG");
    } else if (avatarNumber == 8) {
      setImageURL("avatar", "avatar8.PNG");
    } else if (avatarNumber == 7) {
      setImageURL("avatar", "avatar7.PNG");
    } else if (avatarNumber == 6) {
      setImageURL("avatar", "avatar6.PNG");
    } else if (avatarNumber == 5) {
      setImageURL("avatar", "avatar5.PNG");
    } else if (avatarNumber == 4) {
      setImageURL("avatar", "avatar4.PNG");
    } else if (avatarNumber == 3) {
      setImageURL("avatar", "avatar3.PNG");
    } else if (avatarNumber == 2) {
      setImageURL("avatar", "avatar2.PNG");
    } else {
      setImageURL("avatar", "avatar1.PNG");
    }
  }
});
onEvent("confirmAvatar", "click", function( ) {
  setImageURL("profilePicture", getImageURL("avatar"));
  showElement("profilePicture");
});
onEvent("backButton", "click", function( ) {
  setScreen("homeScreen");
});
//Game Screen
onEvent("gameButton", "click", function( ) {
  setScreen("galagaGame");
});
onEvent("gameButton2", "click", function( ) {
  setScreen("flappyBirdScreen");
  resetGame();
});
onEvent("exitButton", "click", function( ) {
  setScreen("startScreen");
});
//Galaga Screen
var shotsLoaded = true;
var enemiesLeft = false;
var enemiesUp = false;
var gameStarted = false;
var enimesRemaining = 5;
var startTime ;
var elapsedTime;
var score = 0;
var timer;
var randomXMovement;
var randomYMovement;
var switchCountdown = 0;
onEvent("galagaGame", "keydown", function(event) {
  var shipX = getXPosition("spaceShip");
  var shipY = getYPosition("spaceShip");
  var distance = 20;
  if(event.key == ("Left") || event.key == ("a"))
  {
    shipX = shipX - distance;
  }
  if(event.key == "Right" || event.key == ("d"))
  {
    shipX = shipX + distance;
  }
  if(event.key == ("Up") || event.key == ("w"))
  {
    shipY = shipY - distance;
  }
  if(event.key == "Down" || event.key == ("s"))
  {
    shipY = shipY + distance;
  }
  if(event.key == "Enter" || event.key == "Space" )
  {
    shooting();
  }
  setPosition("spaceShip", shipX, shipY);
  horizontalWrapAround("spaceShip");
});
function horizontalWrapAround(object) {
  var objectX = getXPosition(object);
  var objectY = getYPosition(object);
  var objectWidth = getProperty(object, "width");
  if (objectX < 0 - (objectWidth / 2)) {
    objectX = 320 - (objectWidth / 2);
  }else if ((objectX > 320 - (objectWidth / 2))) {
    objectX = 0 - (objectWidth / 2);
  }
  setPosition(object, objectX, objectY);
}
function shooting() {
  if (shotsLoaded) {
    shotsLoaded = false;
    var shipX = getXPosition("spaceShip");
    var shipY = getYPosition("spaceShip");
    var shipHeight = getProperty("spaceShip", "height");
    var shipWidth = getProperty("spaceShip", "width");
    var lasersHeight = getProperty("lasor", "height");
    var laserX = shipX + (shipWidth/2) - (lasersHeight/2) ;
    var laserY = shipY - 20;
    setPosition("lasor", laserX, laserY);
  }
}
hideElement("time");
onEvent("startbutton", "click", function(event) {
  showElement("bug1");
  showElement("bug2");
  showElement("bug3");
  showElement("bug4");
  showElement("boss1");
  if (!gameStarted) {
    gameStarted = true;
    startTime = getTime();
    setPosition ("lasor", 150, -50);
    timedLoop(50, function() {
      updateTime();
      lasorMovement();
      enemyMoving("bug1");
      enemyMoving("bug2");
      enemyMoving("bug3");
      enemyMoving("bug4");
      enemyMoving("boss1");
      checkBounce("bug1");
      checkBounce("bug2");
      checkBounce("bug3");
      checkBounce("bug4");
      checkBounce("boss1");
      collisonDetection("bug1");
      collisonDetection("bug2");
      collisonDetection("bug3");
      collisonDetection("bug4");
      collisonDetection("boss1");
    });
  }
  hideElement("galagaLogo");
  showElement("leaveButton");
  showElement("settings");
  showElement("undoButton");
  showElement("time");
  setPosition("startbutton", 1000,1000);
});
function updateTime() {
  var currentTime = getTime();
  elapsedTime = currentTime - startTime;
  elapsedTime = (elapsedTime / 100).toFixed(0);
  timer = 500 - elapsedTime;
  setProperty("time", "text", timer);
  if (timer <= 0) {
    stopTimedLoop();
    showElement("gameover");
    hideElement("bug1");
    hideElement("bug2");
    hideElement("bug3");
    hideElement("bug4");
    hideElement("boss1");
    hideElement("lasor");
    setPosition("bug1", 1000, 1000);
    setPosition("bug2", 1000, 1000);
    setPosition("bug3", 1000, 1000);
    setPosition("bug4", 1000, 1000);
    setPosition("boss1", 1000, 1000);
    setPosition("lasor", 1000, 1000);
    stopGames();
  }
}
function lasorMovement() {
  var lasorX = getXPosition("lasor");
  var lasorY = getYPosition("lasor");
  var lasorSpeed = -50;
  lasorY = lasorY + lasorSpeed;
  setPosition("lasor", lasorX, lasorY);
  if (lasorY < 0 ){
    shotsLoaded = true;
  }
}
function enemyMoving(name) {
  var enemyX = getXPosition(name);
  var enemyY = getYPosition(name);
  enemyX += randomXMovement;
  enemyY += randomYMovement;
  setPosition(name,enemyX,enemyY );
  switchCountdown--;
  if (switchCountdown <= 0)
  {
    assignDirection();
  }
  horizontalWrapAround(name);
}
function assignDirection()
{
  randomXMovement = randomNumber(-5, 5);
  randomYMovement = randomNumber(-5, 5);
  switchCountdown = randomNumber(10, 50);
  if (randomXMovement == 0 && randomXMovement == 0){
    assignDirection();
  }
}
function checkBounce(name)
{
  var enemyH = getProperty(name,"height");
  var enemyY = getYPosition(name);
  if (enemyY >= 290 - enemyH)
  {
    randomYMovement = -5;
  }
  if (enemyY <= 0)
  {
    randomXMovement = 5;
  }
}
function collisonDetection(object) {
  var lasorX = getXPosition("lasor");
  var lasorY = getYPosition("lasor");
  var objectX = getXPosition(object);
  var objectY = getYPosition(object);
  var lasorW = getProperty("lasor", "width");
  var lasorH = getProperty("lasor", "height");
  var objectW = getProperty(object, "width");
  var objectH = getProperty(object, "height");
  if(lasorX  + lasorW >= objectX && lasorX <= objectX +objectW )
    {
      if(lasorY  + lasorH >= objectY && lasorY <= (objectY +objectH))
      {
        if(!getProperty(object, "hidden"))
        {
          hideElement(object);
          score += 100;
          setText("Score", score);
          if (getProperty(object, "hidden"))
          {
            setPosition(object, randomNumber(20, 300), randomNumber(30, 290));
            showElement(object);
          }
        }
      }
    }
}
onEvent("settings", "click", function( ) {
  showElement("leftbutton");
  showElement("rightbutton");
  showElement("downButton");
  showElement("upButton");
  showElement("shootButton");
  showElement("leaveButton");
  hideElement("settings");
  showElement("settings2");
});
onEvent("settings2", "click", function( ) {
  hideElement("leftbutton");
  hideElement("rightbutton");
  hideElement("downButton");
  hideElement("upButton");
  hideElement("shootButton");
  showElement("settings");
  hideElement("settings2");
});
onEvent("leftbutton", "click", function() {
  var shipX = getXPosition("spaceShip");
  var shipY = getYPosition("spaceShip");
  var distance = 30;
  shipX = shipX - distance;
  setPosition("spaceShip", shipX, shipY);
  horizontalWrapAround("spaceShip");
});
onEvent("rightbutton", "click", function() {
  var shipX = getXPosition("spaceShip");
  var shipY = getYPosition("spaceShip");
  var distance = 30;
  shipX = shipX + distance;
  setPosition("spaceShip", shipX, shipY);
  horizontalWrapAround("spaceShip");
});
onEvent("upButton", "click", function() {
  var shipX = getXPosition("spaceShip");
  var shipY = getYPosition("spaceShip");
  var distance = 30;
  shipY = shipY - distance;
  setPosition("spaceShip", shipX, shipY);
  horizontalWrapAround("spaceShip");
});
onEvent("downButton", "click", function() {
  var shipX = getXPosition("spaceShip");
  var shipY = getYPosition("spaceShip");
  var distance = 30;
  shipY = shipY + distance;
  setPosition("spaceShip", shipX, shipY);
  horizontalWrapAround("spaceShip");
});
onEvent("leaveButton", "click", function( ) {
  setScreen("gameScreen");
});
onEvent("shootButton", "click", function() {
 shooting();
});
onEvent("undoButton", "click", function( ) {
  setPosition("startbutton", 20, 185);
  hideElement("gameover");
  resetGalaga();
});
function stopGames() {
  setPosition("spaceShip", 150, 400);
  setPosition("lasor", 163, 390);
  setText("Score", " ");
  setText("time", "000");
  timer = 0;
  shotsLoaded = true;
  enemiesLeft = false;
  enemiesUp = false;
  enimesRemaining = 0;
  score = 0;
  stopTimedLoop();
}
function resetGalaga() {
  setPosition("spaceShip", 150, 400);
  setPosition("lasor", 163, 390);
  setPosition("bug1", 250, 170);
  setPosition("bug2", 205, 170);
  setPosition("bug3", 165, 170);
  setPosition("bug4", 185, 130);
  setPosition("boss1", 225, 70);
  hideElement("bug1");
  hideElement("bug2");
  hideElement("bug3");
  hideElement("bug4");
  hideElement("boss1");
  setText("Score", " ");
  setText("time", "000");
  timer = 0;
  shotsLoaded = true;
  enemiesLeft = false;
  enemiesUp = false;
  gameStarted = false;
  enimesRemaining = 5;
  score = 0;
  stopTimedLoop();
}
//Flappy Bird Screen
var xPlayer = getXPosition("flappyBird");
var yPlayer = getYPosition("flappyBird");
var score = 0;
var pipeSpeed = 2;
var awardPoint = [true, true, true];
var pipe1 = ["topPipe", "topCap"];
var pipe2 = ["bottomPipe", "bottomCap"];
var pipes1And2 = 50;
var pipe3 = ["topPipe2", "topCap2"];
var pipe4 = ["bottomPipe2", "bottomCap2"];
var pipes3And4 = 200;
var pipe5 = ["topPipe3", "topCap3"];
var pipe6 = ["bottomPipe3", "bottomCap3"];
var pipes5And6 = 350;
var steps = 20;
onEvent("startButton", "click", function() {
  if (!getProperty("startButton", "hidden")) {
    movePipes();
    setProperty("startButton", "hidden", true);
  }
});
onEvent("flappyBirdScreen", "click", function() {
  steps = steps - 15;
});
function movePipes() {
  timedLoop(15, function() {
    yPlayer = yPlayer + 1;
    setProperty("flappyBird", "y", yPlayer);
    pipes1And2 = (pipes1And2 - pipeSpeed) + loopPipe(pipes1And2, 0);
    pipes3And4 = (pipes3And4 - pipeSpeed) + loopPipe(pipes3And4, 1);
    pipes5And6 = (pipes5And6 - pipeSpeed) + loopPipe(pipes5And6, 2);
    if (pipes1And2 > 350){
      randomizePipeHeight(pipe1, pipe2);
    }
    if (pipes3And4 > 350){
      randomizePipeHeight(pipe3, pipe4);
    }
    if (pipes5And6 > 350){
      randomizePipeHeight(pipe5, pipe6);
    }
    moveOnePipe(pipe1, pipes1And2);
    moveOnePipe(pipe2, pipes1And2);
    moveOnePipe(pipe3, pipes3And4);
    moveOnePipe(pipe4, pipes3And4);
    moveOnePipe(pipe5, pipes5And6);
    moveOnePipe(pipe6, pipes5And6);
    if (checkCollision( ) == true){
      stopTimedLoop();
      gameOver();
    }
    if (steps < 10){
      yPlayer = yPlayer - 3;
      setProperty("flappyBird", "y", yPlayer);
      steps++;
    }
  });
}
function gameOver(){
  timedLoop(15, function() {
    yPlayer = yPlayer + 3;
    setProperty("flappyBird", "y", yPlayer);
    if (yPlayer > 500){
      stopTimedLoop();
    }
  });
}
function checkCollision( ){
  var collision = false;
  collision = pipeImpact(pipe1, pipes1And2);
  if (!collision){
    collision = pipeImpact(pipe3, pipes3And4);
  }
  if (!collision){
    collision = pipeImpact(pipe5, pipes5And6);
  }
  return collision;
}
function pipeImpact(pipe, pipeX){
  var collision = false;
  var yPipeCap = 0;
  if(Math.abs(pipeX - xPlayer) < 45){
    yPipeCap = getProperty(pipe[1], "y");
    if (yPlayer < yPipeCap){
        collision = true;
      } else if (yPlayer > yPipeCap + 70){
        collision = true;
      }
    }
  return collision;
}
function randomizePipeHeight(topPipe, bottomPipe){
  var yPipes = randomNumber(90, 200);
  setProperty(topPipe[0], "height", yPipes);
  setProperty(topPipe[1], "y", yPipes - 20);
  setProperty(bottomPipe[0], "y", yPipes + 100);
  setProperty(bottomPipe[1], "y", yPipes + 80);
}
function moveOnePipe(pipeArray, xLocation) {
  setProperty(pipeArray[0], "x", xLocation);
  setProperty(pipeArray[1], "x", xLocation - 5);
}
function loopPipe(pipes, awardIndex){
  var change = 0;
  if (pipes < 35) {
      if (pipes < -50) {
        change = 400 - pipes;
        awardPoint[awardIndex] = true;
      } else if (awardPoint[awardIndex]) {
        awardPoint[awardIndex] = false;
        score++;
        setProperty("score", "text", score);
      }
    }
  return change;
}
onEvent("exitButton2", "click", function( ) {
  setScreen("gameScreen");
});
onEvent("backButton2", "click", function( ) {
  if (yPlayer >= 500) {
    resetGame();
  }
});
function resetGame() {
  setPosition("flappyBird", 60, 190, 50, 50);
  setPosition("topCap", 155, 156, 40, 20);
  setPosition("topCap2", 305, 156, 40, 20);
  setPosition("topCap3", 5, 156, 40, 20);
  setPosition("topPipe", 160, 0, 30, 170);
  setPosition("topPipe2", 310, 0, 30, 170);
  setPosition("topPipe3", 10, 0, 30, 170);
  setPosition("bottomCap", 155, 270, 40, 20);
  setPosition("bottomCap2", 305, 270, 40, 20);
  setPosition("bottomCap3", 5, 270, 40, 20);
  setPosition("bottomPipe", 160, 271, 30, 170);
  setPosition("bottomPipe2", 310, 271, 30, 170);
  setPosition("bottomPipe3", 10, 271, 30, 170);
  xPlayer = getXPosition("flappyBird");
  yPlayer = getYPosition("flappyBird");
  score = 0;
  pipeSpeed = 2;
  awardPoint = [true, true, true];
  pipe1 = ["topPipe", "topCap"];
  pipe2 = ["bottomPipe", "bottomCap"];
  pipes1And2 = 50;
  pipe3 = ["topPipe2", "topCap2"];
  pipe4 = ["bottomPipe2", "bottomCap2"];
  pipes3And4 = 200;
  pipe5 = ["topPipe3", "topCap3"];
  pipe6 = ["bottomPipe3", "bottomCap3"];
  pipes5And6 = 350;
  steps = 20;
  setText("score", score);
  showElement("startButton");
}
//Message Screen
onEvent("contactDropdown", "click", function( ) {
  readRecords("chatUser", {}, function(records) {
    var user = [];
    for (var i =0; i < records.length; i++) {
        appendItem(user, records[i].userChatName);
    }
    setProperty("contactDropdown", "options", user);
  });
});
onEvent("sendButton2", "click", function( ) {
  createRecord("message", {sender:(getText("nameTag")), receiver :(getText("contactDropdown")), messages :(getText("textingArea3")), timeline: (Date.now())}, function(record) {
    
  });
  setText("textingArea3", " ");
});
onEvent("profileButton", "click", function( ) {
  readRecords("message", {}, function(records) {
    for (var i =0; i < records.length; i++) {
      if (records[i].sender == getText("contactDropdown") && records[i].receiver == getText("nameTag")) {
        setText("messageArea" , getText("messageArea") + ("\n" + (records[i].sender + (" : " + records[i].messages))));
        deleteRecord("message", {id:records[i].id, sender:records[i].sender , receiver:records[i].receiver, messages:records[i].messages, timeline:records[i].timeline });
      }
    }
  });
});
onEvent("backButton3", "click", function( ) {
  readRecords("chatUser", {}, function(records) {
    for (var i = 0; i < records.length; i++) {
      deleteRecord("chatUser", {id:((records[count]).id), userChatEmailorPhone:(records[count]).userChatEmailorPhone , userChatName:records[count].userChatName});
    }
  });
  setScreen("homeScreen");
});
onEvent("groupChatButton", "click", function( ) {
  setScreen("groupChatScreen");
});
//GroupChat Screen
onEvent("sendButton3", "click", function( ) {
  createRecord("messageTwo", {senderTwo:(getText("nameTag")), messagesTwo :(getText("textingArea4")), timeline: (Date.now())}, function(record) {
    
  });
});
onRecordEvent("messageTwo", function(record, eventType) {
  if (eventType === 'create') {
    readRecords("messageTwo", {}, function(records) {
      for (var i =0; i < records.length; i++) {
        setText("messageArea2", getText("messageArea2") + ("\n" + (records[i].senderTwo + (" : " + records[i].messagesTwo))));
        deleteRecord("messageTwo", {id:records[i].id, senderTwo:records[i].senderTwo, messagesTwo:records[i].messagesTwo, timeline:records[i].timeline });
      }
    });
  }
});
onEvent("backButton6", "click", function( ) {
  setScreen("homeScreen");
});
onEvent("singleChatButton", "click", function( ) {
  setScreen("messageScreen");
  setText("messageArea2", " ");
});
//Emergency Text Screen
onEvent("sendButton", "click", function( ) {
  createRecord("Emergency", {EmailandPhone:(getText("contactInfo2")), Name :(getText("contactInfo")), Message :(getText("textingArea")), timeline: (Date.now())}, function(record) {
    
  });
  setText("textingArea", " ");
});
onEvent("backButton4", "click", function( ) {
  setScreen("homeScreen");
});
// Emergency Text Screen Two
onRecordEvent("Emergency", function(record, eventType) {
  if (eventType === 'create') {
    var i;
    readRecords("Emergency", {}, function(records) {
      if (getText("contactInfo2")!=(records[i-1]).EmailandPhone) {
        setText("contactInfo3", records[i-1].Name);
        setText("contactInfo4", records[i-1].EmailandPhone);
        setText("textingArea2", records[i-1].Message);
        setScreen("emergencyTextScreen2");
      }
    });
  }
});
onEvent("backButton5", "click", function( ) {
  setScreen("homeScreen");
});
