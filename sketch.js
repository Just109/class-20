var mr,fr;

function setup() {
  createCanvas(800,400);
  mr = createSprite(200, 100, 50, 50);
  mr.shapeColor = "yellow";
  fr = createSprite(200, 200, 100, 50);
  fr.shapeColor = "yellow";
}

function draw() {
  background("red");
  mr.x = World.mouseX;
  mr.y = World.mouseY;
  if(mr.x - fr.x < mr.width/2 + fr.width/2 &&
    fr.x - mr.x < mr.width/2 + fr.width/2 &&
    mr.y - fr.y < mr.height/2 + fr.height/2 &&
    fr.y - mr.y < mr.height/2 + fr.height/2) {
   mr.shapeColor = "white";
   fr.shapeColor = "white";
}else{
  mr.shapeColor = "yellow";
  fr.shapeColor = "yellow";

}
  drawSprites();
}