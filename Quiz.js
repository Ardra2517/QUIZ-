class Quiz {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        contestant = new Contestant();
        var contestantCountRef = await database.ref('playerCount').once("value");
        if(contestantCountRef.exists()){
          contestantCount = contestantCountRef.val();
          contestant.getCount();
        }
        quiz = new Quiz()
        quiz.display();
      }
  
      q1 = createSprite(100,200);
  
      q2= createSprite(300,200);
    
      q3 = createSprite(500,200);
  

      questions = [q1, q2, q3];
    }
  
    play(){
      form.hide_details();
  
      contestant.getcontestantInfo();
      
      if(allcontestants !== undefined){
        //var display_position = 100;
        background("#c68767");
        //index of the array
        var index = 0;
  
        //x and y position of the cars
        var x = 175;
        var y;
  
        for(var plr in allcontestants){
          //add 1 to the index for every loop
          index = index + 1 ;
  
          //position the cars a little away from each other in x direction
          x = x + 200;
          //use data form the database to display the cars in y direction
          y = displayHeight - allcontestants[plr].distance;
          questions[index-1].x = x;
          questions[index-1].y = y;
  
          if (index === player.index){
            questions[index - 1].shapeColor = "red";
            camera.position.x = displayWidth/2;
            camera.position.y = questions[index-1].y
          }
         
          //textSize(15);
          //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
        }
  
      }
  
      if(keyIsDown(UP_ARROW) && contestant.index !== null){
        contestant.distance +=10
        contestant.update();
      }
      if(contestant.distance > 3650){
       gameState=2;
      }
      drawSprites();
    }
  
    end(){
      console.log("Game Over!!");
    }
  }
  