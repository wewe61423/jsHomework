let delay = parseInt(Math.random()*100);
let i = 0, last, final;   

function doThing(){
    let game = document.getElementsByClassName("game");
    let game_length = game.length;
    if (delay <= 50){     //設定秒數
        doThing2();
        return;
    }
    if(last != undefined){
        game[last].style.backgroundColor = "";
    }
    last = i;
    game[i].style.backgroundColor = "yellow";
    if(i < 6) i++;
    else if(i == 7) i = 0;
    else if(i == 8 || i == 6) i += 2;
    else if(i == 10) i = game_length - 1;
    else if(i > 11) i--;
    else if(i == 11 || i == 9) i-= 2;
    setTimeout(doThing, delay); 
    delay -= delay/2;       //+= delay*2 越來越慢、-= delay/2越來越快
}

function doThing2(){
    let game = document.getElementsByClassName("game");
    let game_length = game.length;
    if (delay >= 5000){    //設定秒數
        return;
    }
    
    if(last != undefined){
        game[last].style.backgroundColor = "";
    }
    last = i;
    game[i].style.backgroundColor = "yellow";
    
    //判斷分數
    switch(i){
        case 0:
            final = "10 分";    //Orange
        break;
        case 1:
            final = "20 分";    //Apple
        break;
        case 2:
            final = "60 分";    //Grape
        break;
        case 3:
            final = "777 分";   //777
        break;
        case 4:
            final = "80 分";    //Ring
        break;
        case 5:
            final = "888 分";   //BARBARBAR
        break;
        case 6:
            final = "40 分";     //Star
        break;
        case 7:
            final = "60 分";    //Grape
        break;
        case 8:
            final = "20 分";    //Apple
        break;
        case 9:
            final = "777 分";   //777
        break;
        case 10:
            final = "40 分";     //Star
        break;
        case 11:
            final = "80 分";    //Ring
        break;
        case 12:
            final = "10 分";    //Orange
        break;
        case 13:
            final = "777 分";   //777
        break;
        case 14:
            final = "888 分";   //BARBARBAR
        break;
        case 15:
            final = "60 分";    //Grape
        break;
        case 16:
            final = "666 分";   //Stars
        break;
        case 17:
            final = "170 分";    //Apples
        break;
    }

    if(i < 6) i++;
    else if(i == 7) i = 0;
    else if(i == 8 || i == 6) i += 2;
    else if(i == 10) i = game_length - 1;
    else if(i > 11) i--;
    else if(i == 11 || i == 9) i-= 2;
    setTimeout(doThing2, delay);
    delay += delay/5;
    //console.log(delay + " & 遊戲table位置: " + i);

    document.getElementById("score").innerHTML=final; //印出最終分數    
}

