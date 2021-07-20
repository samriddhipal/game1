var sprite;
function setup() {
  createCanvas(400,400);
  sprite=createSprite(200,200,10,10);
}

function draw() 
{

  background("yellow");
  drawSprites();
  if (keyDown("up")) {
    sprite.y=sprite.y-3;
  }
if (keyDown("right")) {
  sprite.x=sprite.x+3
}
}




