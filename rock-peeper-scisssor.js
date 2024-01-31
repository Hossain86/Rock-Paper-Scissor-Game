let random_num;
    function myrock(){
      random_num=Math.random();
  if(random_num<=(1/3)){
    alert('Computer picks Rock...its tie 😶');
  }else if(random_num>(1/3) && random_num<= (2/3)){
    alert('Computer picks Paper...You lost 🥲');
  }else{
    alert('Computer picks Scissor...You win 😎');
  }
    }
    function mypaper(){
      random_num=Math.random();
  if(random_num<=(1/3)){
    alert('Computer picks Rock...You win 😎');
  }else if(random_num>(1/3) && random_num<= (2/3)){
    alert('Computer picks Paper...Its tie 😶');
  }else{
    alert('Computer picks Scissor...You lost 🥲');
  }
    }
    function myscissor(){
   random_num=Math.random();
  if(random_num<=(1/3)){
    alert('Computer picks Rock...You lost 🥲');
  }else if(random_num>(1/3) && random_num<= (2/3)){
    alert('Computer picks Paper...you win 😎');
  }else{
    alert('Computer picks Scissor...its tie 😶');
  }
    }
