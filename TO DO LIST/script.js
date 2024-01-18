function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');
    if (taskInput.value.trim() !== '') {
        var li = document.createElement('li');
        li.className = 'taskItem';
        var span = document.createElement('span');
        span.textContent = taskInput.value;
        var deleteBtn = document.createElement('button');
        deleteBtn.className = 'deleteBtn';
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = function () {
        taskList.removeChild(li); };
        li.appendChild(span);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
        taskInput.value = '';
    }
}
