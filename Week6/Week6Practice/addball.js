const addbtn = document.getElementById("add");
addbtn.onclick = function buttonpressed(){
    var outer = document.getElementById("container");
    var ball = document.createElement("div");
    ball.className="ball";
    outer.appendChild(ball);
}