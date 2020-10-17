//name space
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;
var bts;
var ball;
function setup() {
  createCanvas(400,400);

  myEngine = Engine.create();
  myWorld = myEngine.world;

  var options = {
    isStatic: true
  }
  bts = Bodies.rectangle(200,390,400,10,options);
  World.add(myWorld, bts);
  console.log(bts);
  //JSON format storing values as key:value
  var ballOption = {
    restitution: 1
  }
  ball = Bodies.circle(200,200,30,ballOption);
  World.add(myWorld, ball);

}


function draw() {
  background(200,255,255);  
  Engine.update(myEngine);
  rectMode(CENTER);
  ellipseMode(RADIUS);
  rect(bts.position.x, bts.position.y, 400,10);
  ellipse(ball.position.x, ball.position.y, 30,30);
}