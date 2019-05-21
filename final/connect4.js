$(document).ready(function () {
    var turn = 1;
    var play = true;
    var pl1score = 0;
    var pl2score = 0;
    $("td").click(function () {
        if ($(this).text() === '' && play === true) {

            if (turn % 2 === 1) {
                $(this).color("red")
            }
            else $(this).color("blue")
            turn++;
        }
        if (checkWin()==='red'){
            $("#output").text("player 1 wins") 
            play = false;
    }
    else if (checkWin()=== "blue"){
        $("#output").text("player 2 wins")

    }
    else if (checkWin()===-1 && turn ===49){
        $("#output").text("dang you are just to good for a winner :(")
        
    }
    })
    $("button").click(function(){
        turn  = 0;
        play = reset; 
        reset();
    })
    });
    var checkWin = function(){
        var spcae =[];
        for (var i=0; i<49;i++){
            
        }

    }