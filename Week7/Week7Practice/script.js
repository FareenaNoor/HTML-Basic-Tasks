const btn=document.getElementById("btn");
const ctn = document.getElementById("container");
btn.onclick = function (){
    var box = document.createElement("div");
    box.className="textarea";
    const text = document.getElementById("txt");
    var txte = text.value;
    box.textContent=txte;
    ctn.appendChild(box);
    

}