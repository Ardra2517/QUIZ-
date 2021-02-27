var database;
var gameState=0;
var contestantCount;
var allPlayers;
var distance=0;

var question,contestant,quiz;

var q1,q2,q3,questions;

function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  // quiz = new Quiz();
  // quiz.getState();
  // quiz.start();
}


function draw(){
  background("pink");
  // if(contestantCount=== 4){
  //   quiz.update(1);
  // }
  // if(gameState === 1){
  //   clear();
  //   quiz.play();
  // }
  // if(gameState === 2){
  //   quiz.end();
  // }
}
