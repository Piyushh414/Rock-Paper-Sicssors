function getComputerChoice(){
    let x = Math.floor((Math.random() * 3) + 1);

        
        if(x==1){
            return "ROCK";
        }

        else if(x==2){
            return "PAPER";
        }

        else{
            return "SCISSOR";
        }
    }
   
      let x =0;
      let y =0;
    

    function playRound(computerSelection ,  playerSelection) {

         if(computerSelection === "ROCK" && playerSelection === "ROCK")
          return  "Its a draw";

          else if(computerSelection === "PAPER" && playerSelection === "PAPER")
          return  "Its a draw";

          else if(computerSelection === "SCISSOR" && playerSelection === "SCISSOR")
          return  "Its a draw";

          else if(computerSelection === "ROCK" && playerSelection === "PAPER"){
            x = x+1;
            return  "You win  - PAPER beats ROCK  ";}
        

          else if(computerSelection ==="ROCK" && playerSelection === "SCISSOR")
          {y = y+1;
          return    "You lose  - ROCK  beats SCISSOR ";}

          else if(computerSelection === "PAPER" && playerSelection === "ROCK")
          {  y = y+1;
          return    "You lose  - PAPER beats ROCK  ";}

          else if(computerSelection === "PAPER" && playerSelection === "SCISSOR")
          {x = x+1;
          return    "You win - SCISSOR beats PAPER ";}

          else if(computerSelection === "SCISSOR" && playerSelection === "ROCK")
              {x = x+1;
          return    "You win  - ROCK  beats SCISSOR ";}

          else if(computerSelection === "SCISSOR" && playerSelection === "PAPER")
             {y = y+1;
          return    "You lose  - SCISSOR beats PAPER ";}

          else
          return "wrong input";
     }
       
     function game(){
        for (let i = 0; i < 5; i++) {

            computerSelection = getComputerChoice();
            console.log( computerSelection + "is Computer's Choice");

            let playerSelection1 = prompt("What is your choice");
            let playerSelection = playerSelection1.toUpperCase();
            console.log(playerSelection + " is player's Choice");
            

            
            console.log(playRound(computerSelection ,  playerSelection));

            }

            if(x>y)
            return("Player wins")

            else if(y>x)
            return("Computer wins")

            else
            return("Draw")

           
     }   

     console.log(game());
