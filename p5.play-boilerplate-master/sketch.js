var moving

var fixed


function setup() {
  createCanvas(800,400);
  
  moving=createSprite(400, 200, 50, 50);
  fixed=createSprite(400,200,50,50)
  
}

function draw() {
  background(200,200,200);  
  moving.y=World.mouseY
  moving.x=World.mouseX
  
if(collision(moving,fixed)){
  moving.shapeColor="red"
  fixed.shapeColor="red"
}

  drawSprites();
}
function collision(object1,object2){
  if(object1.x-object2.x<object1.width/2+object2.width/2
    &&object2.x-object1.x<object2.width/2+object1.width/2
    &&object1.y-object2.y<object1.height/2+object2.height/2
    &&object2.y-object1.y<object2.height/2+object1.height/2){
     return  true 
    }
}