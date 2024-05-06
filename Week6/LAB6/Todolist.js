const list = document.getElementById("list");
const add = document.getElementById("add");

add.onclick = function () {
    var input = document.getElementById("input");
    var text = input.value;
    if (text !== "") {
        var remove = document.createElement("button");
        remove.className = "remove";
        remove.textContent = "remove";
        var todo = document.createElement("div");
        todo.className = "todo";
        todo.textContent = text;
        todo.appendChild(remove);
        list.appendChild(todo);
        input.value = "";

        remove.onclick = function () {
            this.parentNode.remove();
        };
    }
};
