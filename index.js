function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function Play() {
    var player1 = prompt("Enter First Player Name :");
    var player2 = prompt("Enter Second Player Name :");
    
    document.getElementById("plyr1").innerHTML = player1;
    document.getElementById("plyr2").innerHTML = player2;

    var rnd1 = getRandom(1, 6);
    var rnd_img1 = "dice" + rnd1 + ".png";
    var rnd_src1 = "images/" + rnd_img1;
    document.getElementById("img1").setAttribute("src", rnd_src1);

    var rnd2 = getRandom(1, 6);
    var rnd_img2 = "dice" + rnd2 + ".png";
    var rnd_src2 = "images/" + rnd_img2;
    document.getElementById("img2").setAttribute("src", rnd_src2);

    if (rnd1 > rnd2) {
        document.getElementById("hd").innerHTML = "! ! ! " + player1 + " Wins ! ! !";

    }
    else if (rnd2 > rnd1) {
        document.getElementById("hd").innerHTML = "! ! ! " + player2 + " Wins ! ! !";
    }
    else {
        document.getElementById("hd").innerHTML = "! ! ! Draw ! ! !";
    }
}

function Reset() {
    document.getElementById("plyr1").innerHTML = "Player 1";
    document.getElementById("plyr2").innerHTML = "Player 2";
    document.getElementById("hd").innerHTML = "Dice Game";
    document.getElementById("img1").setAttribute("src", "images/dice6.png");
    document.getElementById("img2").setAttribute("src", "images/dice6.png");
}