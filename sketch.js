var wall,thickness;
var bullet,speed,weight;


function setup() {
  createCanvas(1600,400);

  speed=random(223,321);
  weight=random(30,52);

  thickness=random(23,83);

bullet=createSprite(50,20,50,5);
bullet.velocityX=speed;
bullet.shapeColor=color(255);


wall=createSprite(1200,200,thickness,height/2);
wall.shapeColor=color(80,80,80);

car=createSprite(50,200,50,50);
car.velocityX=speed;
car.shapeColor=color(255);
}

function draw() {
  background(0);                               
 
  if(hasCollided(bullet,wall))
{
  bullet.velocityX=0;
  var damage=0.5 * weight * speed* speed/(thickness * thickness * thickness);

  if(damage>10)
{
  wall.shapeColor=color(255,0,0);

}
if(damage<10)
{
  wall.shapeColor=color(0,255,0)
}
}      
  drawSprites();
}
                         
function hasCollided(bullet,wall)
{
  bulletRightEdge=bullet.x+bullet.width;
wallLeftEdge=wall.x;
if(bulletRightEdge>=wallLeftEdge)
{
  return true
}
return false;
}