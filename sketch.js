var bob;
function setup() {
  createCanvas(400,400);
bob= createSprite(100,257, 30, 80)
}

function draw() 
{
  background(30);
  if (keyIsDown(RIGHT_ARROW)){
  bob.x= bob.x+5;
  }
  if (keyIsDown(LEFT_ARROW)){
    bob.x= bob.x-5;
    }
    if (keyIsDown(UP_ARROW)){
      bob.y= bob.y-5;
      }
      if (keyIsDown(DOWN_ARROW)){
        bob.y= bob.y+5;
        }
  drawSprites()
  
}




