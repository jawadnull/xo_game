let title = document.querySelector('.title');
let turn ='x';
let squares =[];
function game(id){
 let element = document.getElementById(id);
 if (turn === 'x' && element.innerHTML=='')
 {
    element.innerHTML= 'X';
    turn = 'o';
    title.innerHTML = 'O turn';
 }
 else if (turn === 'o' && element.innerHTML=='')
 {
    element.innerHTML= 'O';
    turn = 'x';
    title.innerHTML = 'X turn';
 }
 winner();
}
function winner(){

    for(let i=1;i<10;i++){
        squares[i]= document.getElementById('item'+i).innerHTML;
    }
    
        if(squares[1] == squares[2] && squares[2] == squares[3] && squares[1] != '' ){endGame(1,2,3);}
        else if(squares[1] == squares[2] && squares[2] == squares[3] && squares[1] != '' ){endGame(1,2,3);}
        else if(squares[4] == squares[5] && squares[5] == squares[6] && squares[5] != '' ){endGame(4,5,6);}
        else if(squares[7] == squares[8] && squares[8] == squares[9] && squares[8] != '' ){endGame(7,8,9);}
        else if(squares[1] == squares[4] && squares[4] == squares[7] && squares[1] != '' ){endGame(4,7,1);}
        else if(squares[7] == squares[8] && squares[8] == squares[9] && squares[8] != '' ){endGame(1,2,3);}
        else if(squares[1] == squares[4] && squares[4] == squares[7] && squares[1] != '' ){endGame(1,2,3);}
        else if(squares[2] == squares[5] && squares[5] == squares[8] && squares[5] != '' ){endGame(1,2,3);}
        else if(squares[3] == squares[6] && squares[6] == squares[9] && squares[6] != '' ){endGame(1,2,3);}
        else if(squares[1] == squares[5] && squares[5] == squares[9] && squares[5] != '' ){endGame(1,2,3);}
        else if(squares[3] == squares[5] && squares[5] == squares[7] && squares[5] != '' ){endGame(1,2,3);}
    
        
   
    
}
function endGame(n1,n2,n3){
    title.innerHTML = `${squares[1]} winner`
    document.getElementById('item'+ n1).style.background = '#000';
    document.getElementById('item'+ n2).style.background = '#000';
    document.getElementById('item'+ n3).style.background = '#000';
 
    setInterval(function(){title.innerHTML += '.'},1000);
    setTimeout(function(){location.reload()},4000);
}   
