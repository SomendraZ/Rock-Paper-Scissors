var b11 = document.getElementById("b1");
var b22 = document.getElementById("b2");
var b33 = document.getElementById("b3");
var stp1 = document.getElementById("stp");
var pap1 = document.getElementById("pap");
var scp1 = document.getElementById("scp");
var stc1 = document.getElementById("stc");
var pac1 = document.getElementById("pac");
var scc1 = document.getElementById("scc");
var p1s = document.getElementById("y");
var c1s = document.getElementById("c");
let popup = document.querySelector(".popup");
let mssg = document.getElementById("message");
let paga = document.getElementById("play-again");
var p ;
var c ;
var ps = 0;
var cs = 0; 


b11.onclick = () => {
    stp1.style.display = 'inline';
    pap1.style.display = 'none';
    scp1.style.display = 'none';
    p = 1;
    c = Math.floor(Math.random() * 3) + 1;
    if (c==1){
        stc1.style.display = 'inline';
        pac1.style.display = 'none';
        scc1.style.display = 'none';
        updateScore();
    }
    else if (c==2){
        stc1.style.display = 'none';
        pac1.style.display = 'inline';
        scc1.style.display = 'none';
        cs++;
        updateScore();
    }
    else if (c==3){
        stc1.style.display = 'none';
        pac1.style.display = 'none';
        scc1.style.display = 'inline';
        ps++;
        updateScore();
    }
    if (ps==5 || cs==5) {
        gameOver();
        bottom();
    }

  };

b22.onclick = () => {
    stp1.style.display = 'none';
    pap1.style.display = 'inline';
    scp1.style.display = 'none';
    p = 2;
    c = Math.floor(Math.random() * 3) + 1;
    if (c==1){
        stc1.style.display = 'inline';
        pac1.style.display = 'none';
        scc1.style.display = 'none';
        ps++;
        updateScore();
    }
    else if (c==2){
        stc1.style.display = 'none';
        pac1.style.display = 'inline';
        scc1.style.display = 'none';
        updateScore();
    }
    else if (c==3){
        stc1.style.display = 'none';
        pac1.style.display = 'none';
        scc1.style.display = 'inline';
        cs++;
        updateScore();
    }
    if (ps==5 || cs==5) {
        gameOver();
        bottom();
    }
};

b33.onclick = () => {
    stp1.style.display = 'none';
    pap1.style.display = 'none';
    scp1.style.display = 'inline';
    p = "3";
    c = Math.floor(Math.random() * 3) + 1;
    if (c==1){
        stc1.style.display = 'inline';
        pac1.style.display = 'none';
        scc1.style.display = 'none';
        cs++;
        updateScore();
    }
    else if (c==2){
        stc1.style.display = 'none';
        pac1.style.display = 'inline';
        scc1.style.display = 'none';
        ps++;
        updateScore();
    }
    else if (c==3){
        stc1.style.display = 'none';
        pac1.style.display = 'none';
        scc1.style.display = 'inline';
        updateScore();
    }
    if (ps==5 || cs==5) {
        gameOver();
        bottom();
    }

};

function updateScore() {
    p1s.innerHTML=ps;
    c1s.innerHTML=cs;
}

paga.onclick=()=>{
    window.open('game.html','_self')
}

function gameOver() {
    popup.style.display='inline';
    b11.style.display='none';
    b22.style.display='none';
    b33.style.display='none';

    if (ps>cs) mssg.innerText = "You Won";
    else mssg.innerText='You Lose';
}   

function bottom() {
    document.getElementById( 'bottom' ).scrollIntoView();
    window.setTimeout( function () { top(); }, 2000 );
};