var counter = 0;
var table = [   [0, 0, 0], 
                [0, 0, 0], 
                [0, 0, 0] ];


[...document.querySelectorAll(".table_cell")].forEach(function(item) {
    item.addEventListener("click", function(event) {
        event.stopPropagation();
        if(item.getAttribute("style") == null){
            switch(counter%2){
                case 0:
                    item.setAttribute("style", "background: url(../Images/x.png); background-size: 80% 80%; background-repeat: no-repeat; background-position: center");
                    const idX = Number(item.getAttribute("id"));
                    table[Math.floor(idX / 3)][idX % 3] = 1;
                    break;
                case 1:
                    item.setAttribute("style", "background: url(../Images/zero.png); background-size: 80% 80%; background-repeat: no-repeat; background-position: center");
                    const idY = Number(item.getAttribute("id"));
                    table[Math.floor(idY / 3)][idY % 3] = 2;
                    break;
                default:
                    break;
            }
            counter++;

            if(Number(CheckIfXWins()) != 0){
                switch(Number(CheckIfXWins())){
                    case 1:
                        cell1 = document.getElementById("0");
                        cell2 = document.getElementById("1");
                        cell3 = document.getElementById("2");
                        cell1.setAttribute("style", "background: url(../Images/x_winner.png); background-size: 80% 80%; background-repeat: no-repeat; background-position: center");
                        cell2.setAttribute("style", "background: url(../Images/x_winner.png); background-size: 80% 80%; background-repeat: no-repeat; background-position: center");
                        cell3.setAttribute("style", "background: url(../Images/x_winner.png); background-size: 80% 80%; background-repeat: no-repeat; background-position: center");
                        break;
                    case 2:
                        cell1 = document.getElementById("3");
                        cell2 = document.getElementById("4");
                        cell3 = document.getElementById("5");
                        cell1.setAttribute("style", "background: url(../Images/x_winner.png); background-size: 80% 80%; background-repeat: no-repeat; background-position: center");
                        cell2.setAttribute("style", "background: url(../Images/x_winner.png); background-size: 80% 80%; background-repeat: no-repeat; background-position: center");
                        cell3.setAttribute("style", "background: url(../Images/x_winner.png); background-size: 80% 80%; background-repeat: no-repeat; background-position: center");
                        break;
                    case 3:
                        cell1 = document.getElementById("6");
                        cell2 = document.getElementById("7");
                        cell3 = document.getElementById("8");
                        cell1.setAttribute("style", "background: url(../Images/x_winner.png); background-size: 80% 80%; background-repeat: no-repeat; background-position: center");
                        cell2.setAttribute("style", "background: url(../Images/x_winner.png); background-size: 80% 80%; background-repeat: no-repeat; background-position: center");
                        cell3.setAttribute("style", "background: url(../Images/x_winner.png); background-size: 80% 80%; background-repeat: no-repeat; background-position: center");
                        break;
                    case 4:
                        cell1 = document.getElementById("0");
                        cell2 = document.getElementById("3");
                        cell3 = document.getElementById("6");
                        cell1.setAttribute("style", "background: url(../Images/x_winner.png); background-size: 80% 80%; background-repeat: no-repeat; background-position: center");
                        cell2.setAttribute("style", "background: url(../Images/x_winner.png); background-size: 80% 80%; background-repeat: no-repeat; background-position: center");
                        cell3.setAttribute("style", "background: url(../Images/x_winner.png); background-size: 80% 80%; background-repeat: no-repeat; background-position: center");
                        break;
                    case 5:
                        cell1 = document.getElementById("1");
                        cell2 = document.getElementById("4");
                        cell3 = document.getElementById("7");
                        cell1.setAttribute("style", "background: url(../Images/x_winner.png); background-size: 80% 80%; background-repeat: no-repeat; background-position: center");
                        cell2.setAttribute("style", "background: url(../Images/x_winner.png); background-size: 80% 80%; background-repeat: no-repeat; background-position: center");
                        cell3.setAttribute("style", "background: url(../Images/x_winner.png); background-size: 80% 80%; background-repeat: no-repeat; background-position: center");
                        break;
                    case 6:
                        cell1 = document.getElementById("2");
                        cell2 = document.getElementById("5");
                        cell3 = document.getElementById("8");
                        cell1.setAttribute("style", "background: url(../Images/x_winner.png); background-size: 80% 80%; background-repeat: no-repeat; background-position: center");
                        cell2.setAttribute("style", "background: url(../Images/x_winner.png); background-size: 80% 80%; background-repeat: no-repeat; background-position: center");
                        cell3.setAttribute("style", "background: url(../Images/x_winner.png); background-size: 80% 80%; background-repeat: no-repeat; background-position: center");
                        break;
                    case 7:
                        cell1 = document.getElementById("0");
                        cell2 = document.getElementById("4");
                        cell3 = document.getElementById("8");
                        cell1.setAttribute("style", "background: url(../Images/x_winner.png); background-size: 80% 80%; background-repeat: no-repeat; background-position: center");
                        cell2.setAttribute("style", "background: url(../Images/x_winner.png); background-size: 80% 80%; background-repeat: no-repeat; background-position: center");
                        cell3.setAttribute("style", "background: url(../Images/x_winner.png); background-size: 80% 80%; background-repeat: no-repeat; background-position: center");
                        break;
                    case 8:
                        cell1 = document.getElementById("2");
                        cell2 = document.getElementById("4");
                        cell3 = document.getElementById("6");
                        cell1.setAttribute("style", "background: url(../Images/x_winner.png); background-size: 80% 80%; background-repeat: no-repeat; background-position: center");
                        cell2.setAttribute("style", "background: url(../Images/x_winner.png); background-size: 80% 80%; background-repeat: no-repeat; background-position: center");
                        cell3.setAttribute("style", "background: url(../Images/x_winner.png); background-size: 80% 80%; background-repeat: no-repeat; background-position: center");
                        break;
                    default:
                        console.log("X wins default");
                        break;
                }
            }

            if(Number(CheckIfZeroWins()) != 0){
                switch(Number(CheckIfZeroWins())){
                    case 1:
                        cell1 = document.getElementById("0");
                        cell2 = document.getElementById("1");
                        cell3 = document.getElementById("2");
                        cell1.setAttribute("style", "background: url(../Images/zero_winner.png); background-size: 90% 90%; background-repeat: no-repeat; background-position: center");
                        cell2.setAttribute("style", "background: url(../Images/zero_winner.png); background-size: 90% 90%; background-repeat: no-repeat; background-position: center");
                        cell3.setAttribute("style", "background: url(../Images/zero_winner.png); background-size: 90% 90%; background-repeat: no-repeat; background-position: center");
                        break;
                    case 2:
                        cell1 = document.getElementById("3");
                        cell2 = document.getElementById("4");
                        cell3 = document.getElementById("5");
                        cell1.setAttribute("style", "background: url(../Images/zero_winner.png); background-size: 90% 90%; background-repeat: no-repeat; background-position: center");
                        cell2.setAttribute("style", "background: url(../Images/zero_winner.png); background-size: 90% 90%; background-repeat: no-repeat; background-position: center");
                        cell3.setAttribute("style", "background: url(../Images/zero_winner.png); background-size: 90% 90%; background-repeat: no-repeat; background-position: center");
                        break;
                    case 3:
                        cell1 = document.getElementById("6");
                        cell2 = document.getElementById("7");
                        cell3 = document.getElementById("8");
                        cell1.setAttribute("style", "background: url(../Images/zero_winner.png); background-size: 90% 90%; background-repeat: no-repeat; background-position: center");
                        cell2.setAttribute("style", "background: url(../Images/zero_winner.png); background-size: 90% 90%; background-repeat: no-repeat; background-position: center");
                        cell3.setAttribute("style", "background: url(../Images/zero_winner.png); background-size: 90% 90%; background-repeat: no-repeat; background-position: center");
                        break;
                    case 4:
                        cell1 = document.getElementById("0");
                        cell2 = document.getElementById("3");
                        cell3 = document.getElementById("6");
                        cell1.setAttribute("style", "background: url(../Images/zero_winner.png); background-size: 90% 90%; background-repeat: no-repeat; background-position: center");
                        cell2.setAttribute("style", "background: url(../Images/zero_winner.png); background-size: 90% 90%; background-repeat: no-repeat; background-position: center");
                        cell3.setAttribute("style", "background: url(../Images/zero_winner.png); background-size: 90% 90%; background-repeat: no-repeat; background-position: center");
                        break;
                    case 5:
                        cell1 = document.getElementById("1");
                        cell2 = document.getElementById("4");
                        cell3 = document.getElementById("7");
                        cell1.setAttribute("style", "background: url(../Images/zero_winner.png); background-size: 90% 90%; background-repeat: no-repeat; background-position: center");
                        cell2.setAttribute("style", "background: url(../Images/zero_winner.png); background-size: 90% 90%; background-repeat: no-repeat; background-position: center");
                        cell3.setAttribute("style", "background: url(../Images/zero_winner.png); background-size: 90% 90%; background-repeat: no-repeat; background-position: center");
                        break;
                    case 6:
                        cell1 = document.getElementById("2");
                        cell2 = document.getElementById("5");
                        cell3 = document.getElementById("8");
                        cell1.setAttribute("style", "background: url(../Images/zero_winner.png); background-size: 90% 90%; background-repeat: no-repeat; background-position: center");
                        cell2.setAttribute("style", "background: url(../Images/zero_winner.png); background-size: 90% 90%; background-repeat: no-repeat; background-position: center");
                        cell3.setAttribute("style", "background: url(../Images/zero_winner.png); background-size: 90% 90%; background-repeat: no-repeat; background-position: center");
                        break;
                    case 7:
                        cell1 = document.getElementById("0");
                        cell2 = document.getElementById("4");
                        cell3 = document.getElementById("8");
                        cell1.setAttribute("style", "background: url(../Images/zero_winner.png); background-size: 90% 90%; background-repeat: no-repeat; background-position: center");
                        cell2.setAttribute("style", "background: url(../Images/zero_winner.png); background-size: 90% 90%; background-repeat: no-repeat; background-position: center");
                        cell3.setAttribute("style", "background: url(../Images/zero_winner.png); background-size: 90% 90%; background-repeat: no-repeat; background-position: center");
                        break;
                    case 8:
                        cell1 = document.getElementById("2");
                        cell2 = document.getElementById("4");
                        cell3 = document.getElementById("6");
                        cell1.setAttribute("style", "background: url(../Images/zero_winner.png); background-size: 90% 90%; background-repeat: no-repeat; background-position: center");
                        cell2.setAttribute("style", "background: url(../Images/zero_winner.png); background-size: 90% 90%; background-repeat: no-repeat; background-position: center");
                        cell3.setAttribute("style", "background: url(../Images/zero_winner.png); background-size: 90% 90%; background-repeat: no-repeat; background-position: center");
                        break;
                    default:
                        console.log("O wins default");
                        break;
                }
            }

        }
        if(counter == 9){
            console.log("game ended");
        }
})
});

function CheckIfXWins(){
    if(table[0][0] == 1 && table[0][1] == 1 && table[0][2] == 1) return 1;    //linia 0
    if(table[1][0] == 1 && table[1][1] == 1 && table[1][2] == 1) return 2;    //linia 1 
    if(table[2][0] == 1 && table[2][1] == 1 && table[2][2] == 1) return 3;    //linia 2 
    if(table[0][0] == 1 && table[1][0] == 1 && table[2][0] == 1) return 4;    //coloana 1
    if(table[0][1] == 1 && table[1][1] == 1 && table[2][1] == 1) return 5;    //coloana 2
    if(table[0][2] == 1 && table[1][2] == 1 && table[2][2] == 1) return 6;    //coloana 3
    if(table[0][0] == 1 && table[1][1] == 1 && table[2][2] == 1) return 7;    //diagonala principala
    if(table[0][2] == 1 && table[1][1] == 1 && table[2][0] == 1) return 8;    //diagonala secundara
    return 0;
}

function CheckIfZeroWins(){
    if(table[0][0] == 2 && table[0][1] == 2 && table[0][2] == 2) return 1;    //linia 0
    if(table[1][0] == 2 && table[1][1] == 2 && table[1][2] == 2) return 2;    //linia 1 
    if(table[2][0] == 2 && table[2][1] == 2 && table[2][2] == 2) return 3;    //linia 2 
    if(table[0][0] == 2 && table[1][0] == 2 && table[2][0] == 2) return 4;    //coloana 1
    if(table[0][1] == 2 && table[1][1] == 2 && table[2][1] == 2) return 5;    //coloana 2
    if(table[0][2] == 2 && table[1][2] == 2 && table[2][2] == 2) return 6;    //coloana 3
    if(table[0][0] == 2 && table[1][1] == 2 && table[2][2] == 2) return 7;    //diagonala principala
    if(table[0][2] == 2 && table[1][1] == 2 && table[2][0] == 2) return 8;    //diagonala secundara
    return 0;
}
