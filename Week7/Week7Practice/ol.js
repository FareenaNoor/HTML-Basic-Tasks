const mylist = document.getElementById("ol1");
console.log(mylist.innerText);
console.log(mylist.innerHTML);
const pa = document.getElementsByTagName("p");
pa[0].innerText= "fareena";
const qs = document.querySelectorAll("#div1> p");
qs[0].innerText="fareena";
console.log("fareena");

