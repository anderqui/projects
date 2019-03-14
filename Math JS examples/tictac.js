$(document).ready(function () {
    var turn = 1;
    var play=true;
    var plscore=0;
    var p2score=0;
    $('td').click(function () {
        if($(this).text()===''&& play=== true){
            if(turn%2===1){
                $(this).text('X')

            }
            else
            $(this).text('O')
            turn++;

        }
        if(checkWin() ==='x'){
            $("#output").text("player 1 Wins")
            play=false;
        }
        else if(checkWin()==='O'){
            $("#output").text("player 2 Wins")
            play=false;
        }
        else if(checkWin()===-1 &&turn ===10){
            $("#output").text("Tied game you have disapointed me")
            play=false;
        }
    })

    $('button').click(function () {
        turn = 1;
        play=true;
        reset();
    })

});

var checkWin = function () {
var space=[];
for(var i =0;i<9;i++){
    space.push($("#space"+i).text());
}
if((space[0]===space[3])&& (space[3]===space[6])){return space[6];}
else if((space[1]===space[4])&& (space[4]===space[7])){return space[7];}
else if((space[2]===space[5])&& (space[5]===space[8])){return space[8];}
else if((space[0]===space[1])&& (space[1]===space[2])){return space[2];}
else if((space[3]===space[4])&& (space[4]===space[5])){return space[5];}
else if((space[0]===space[7])&& (space[7]===space[8])){return space[8];}
else if((space[0]===space[4])&& (space[4]===space[8])){return space[8];}
else if((space[2]===space[4])&& (space[4]===space[6])){return space[6];}
return -1;
}

var reset = function () {
for( var i=0;i<9;i++){
    $('#space'+i).text("");
}
$('#output').text('')
}