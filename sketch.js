var myTrueBall;
// var allMyBalls

function setup() {
  createCanvas(windowWidth, windowHeight);
  myTrueBall = new Ball(random(0.1,windowWidth-0.1), 0, 20);
}

function draw() {
  var rectW = 200 - (frameCount/50);

  background('black');

  push();
  myTrueBall.move();
  myTrueBall.display();
  pop();

  if ((myTrueBall.x < mouseX + (rectW/2) && myTrueBall.x > mouseX - (rectW/2)) && (myTrueBall.y >= windowHeight * 6 / 7 && myTrueBall.y <= windowHeight * 6.05 / 7)) {
    myTrueBall.increaseY = -myTrueBall.increaseY;
  };

  if (myTrueBall.x < 1 || myTrueBall.x > windowWidth) {
    myTrueBall.increaseX = -myTrueBall.increaseX;
  } else if (myTrueBall.y < 1) {
    myTrueBall.increaseY = -myTrueBall.increaseY;
  };

  rect(mouseX - (rectW/2), windowHeight * 6 / 7, rectW, 10);

}

function Ball(_x, _y, _d) {
  //properties
  this.size = _d;
  this.x = _x;
  this.y = _y;
  //hardcoded properties
  this.color = 'red';
  this.increaseX = 5;
  this.increaseY = 5;
  //methods
  this.move = function() {
    this.x += this.increaseX;
    this.y += this.increaseY;
  }

  this.display = function() {
    fill(this.color);
    noStroke()
    ellipse(this.x, this.y, this.size);
  }


}
