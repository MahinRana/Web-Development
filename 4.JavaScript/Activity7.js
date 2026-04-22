function main(){
    // your code goes here!
    moveInCircle();
    moveToUpperRightCorner();
    dropBeepersInDiagonal();
    dropBeepersInChessPattern();
  }

  function moveInCircle(){
    move();
    turnLeft();
    move();
    turnLeft();
    move();
    turnLeft();
    move();
    turnLeft();
  }
  function move7Times(){
    move();
    move();
    move();
    move();
    move();
    move();
    move();
  }
  function moveToUpperRightCorner(){
    move7Times();
    turnLeft();
    move7Times();
  }
  function dropBeepersInDiagonal(){
    putBeeper();
    move();
    turnLeft();
    move();
    putBeeper();
    move();
    turnRight();
    move();
    putBeeper();
    move();
    turnLeft();
    move();
    putBeeper();
    move();
    turnRight();
    move();
    putBeeper();
    move();
    turnLeft();
    move();
    putBeeper();
    move();
    turnRight();
    move();
    putBeeper();
    move();
    turnLeft();
    move();
    putBeeper();
  }
function dropBeepers(){
    putBeeper();
    move();
    move();
    putBeeper();
    move();
    move();
    putBeeper();
    move();
    move();
    putBeeper();
    move();
  }
  function moveToNextLine(){

      turnLeft();
      move();
      turnLeft();
  }
  function moveToUpperLine(){
    turnRight();
    move();
    turnRight();
  }
function dropBeepersInChessPattern(){
    dropBeepers();
    moveToNextLine();
    dropBeepers();
    moveToUpperLine();
    dropBeepers();
    moveToNextLine();
    dropBeepers();
    moveToUpperLine();
    dropBeepers();
    moveToNextLine();
    dropBeepers();
    moveToUpperLine();
    dropBeepers();
    moveToNextLine();
    dropBeepers();
}