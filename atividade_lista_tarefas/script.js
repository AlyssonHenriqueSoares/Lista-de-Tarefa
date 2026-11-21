var InputUser = document.getElementById('taskInput');
var Botão = document.getElementById('addTaskBtn');
var Lista = document.getElementById('taskList');

Botão.addEventListener('click', adicionarTarefa);

function adicionarTarefa() {
    console.log("Botão clicado");
    if (InputUser.value === "") {
        alert("Por favor, digite uma tarefa.");
    } else {
        var li = document.createElement('li');
        var btnDel = document.createElement('button');
        li.innerHTML = InputUser.value;
        btnDel.innerHTML = "X";
        li.appendChild(btnDel);
        Lista.appendChild(li);
        btnDel.addEventListener('click', function() {
            li.remove();
        });
    }
}