document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    addTaskBtn.addEventListener("click", function() {
        const taskText = taskInput.value.trim();
        if (taskText === "") return;

        const li = document.createElement("li");
        li.textContent = taskText;

        const priorityLabel = document.createElement("span");
        priorityLabel.textContent = "Priority: 5";
        priorityLabel.classList.add("priority-label");
        li.appendChild(priorityLabel);

        const priorityBtn = document.createElement("button");
        priorityBtn.textContent = "Set Priority";
        priorityBtn.classList.add("priority");
        priorityBtn.addEventListener("click", function() {
            let priority = prompt("Enter priority (1-10):", "5");
            priority = parseInt(priority);
            if (priority >= 1 && priority <= 10) {
                priorityLabel.textContent = `Priority: ${priority}`;
                li.dataset.priority = priority;
                sortTasks();
            }
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.addEventListener("click", function() {
            taskList.removeChild(li);
        });

        li.appendChild(priorityBtn);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
        taskInput.value = "";
    });

    function sortTasks() {
        Array.from(taskList.children)
            .sort((a, b) => (b.dataset.priority || 5) - (a.dataset.priority || 5))
            .forEach(task => taskList.appendChild(task));
    }
});