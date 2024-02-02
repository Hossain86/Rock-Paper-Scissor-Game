let random_num;
const result={
  win: 0,
  loss: 0,
  tie:0
}
//console.log(result.win)
    function myrock(){
      random_num=Math.random();
  if(random_num<=(1/3)){
    result.tie+=1;
    alert(`Computer picks Rock...its tie 😶
Wins: ${result.win}, Lost: ${result.loss}, Tie: ${result.tie}`);
    
  }else if(random_num>(1/3) && random_num<= (2/3)){
    result.loss+=1;
    alert(`Computer picks Paper...You lost 🥲
Wins: ${result.win}, Lost: ${result.loss}, Tie: ${result.tie}`);
    
  }else{
    result.win+=1;
    alert(`Computer picks Scissor...You win 😎
Wins: ${result.win}, Lost: ${result.loss}, Tie: ${result.tie}`);
    
  }
    }
    function mypaper(){
      random_num=Math.random();
  if(random_num<=(1/3)){
    result.win+=1;
    alert(`Computer picks Rock...You win 😎
Wins: ${result.win}, Lost: ${result.loss}, Tie: ${result.tie}`);
    
  }else if(random_num>(1/3) && random_num<= (2/3)){
    result.tie+=1;
    alert(`Computer picks Rock...its tie 😶
Wins: ${result.win}, Lost: ${result.loss}, Tie: ${result.tie}`);
    
  }else{
    result.loss+=1;
    alert(`Computer picks Scissor...You lost 🥲
Wins: ${result.win}, Lost: ${result.loss}, Tie: ${result.tie}`);
    
  }
    }
    function myscissor(){
   random_num=Math.random();
  if(random_num<=(1/3)){
    result.loss+=1;
    alert(`Computer picks Rock...You lost 🥲
Wins: ${result.win}, Lost: ${result.loss}, Tie: ${result.tie}`);
    
  }else if(random_num>(1/3) && random_num<= (2/3)){
     result.win+=1;
    alert(`Computer picks Paper...you win 😎
Wins: ${result.win}, Lost: ${result.loss}, Tie: ${result.tie}`);
   
  }else{
    result.tie+=1;
    alert(`Computer picks Rock...its tie 😶
Wins: ${result.win}, Lost: ${result.loss}, Tie: ${result.tie}`);
  }
    }
