var bullet,wall,speed,weight,thickness
function setup() {
  createCanvas(1600,400);
  speed = random(80,180)
  weight = random(30,52);
thickness=random(22,83)
 bullet =  createSprite(50, 200, 50, 5);
 bullet.velocityX = speed
 bullet.shapeColor= "red"
 wall = createSprite(1200,200,thickness,height/2)
 wall.shapeColor = "black"
}

function draw() {
  background(25,100,255);  
  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0
   var  damage= 0.5*weight*speed*speed/thickness*thickness*thickness;
   if(damage>10) 
 {
   bullet.shapeColor = color(255,0,0);
 }
 if(damage<10)
 {
   bullet.shapeColor=color(0,255,0)
 }
  }
  
  
  
  drawSprites();
}
function hasCollided(lbullet,lwall){
  bulletRightEdge = lbullet.x+lbullet.width
var wallLeftEdge=lwall.x
if(bulletRightEdge>=wallLeftEdge){
  return true
}
return false
}
