const taskInput = document.getElementById("taskInput");
const addTask = document.getElementById("addTask");
const taskList = document.getElementById("taskList");
const toggleTheme = document.getElementById("toggleTheme");
const taskCategory = document.getElementById("taskCategory");

// Load saved tasks from Local Storage
window.addEventListener("load", () => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    savedTasks.forEach(taskData => addNewTask(taskData.text, taskData.category));
});

// Add Task Event
addTask.addEventListener("click", () => {
    if (taskInput.value.trim() !== "") {
        addNewTask(taskInput.value, taskCategory.value);
        saveTasks();
        taskInput.value = "";
    }
});

// Function to Add a New Task
function addNewTask(taskText, category) {
    const li = document.createElement("li");
    li.textContent = `${taskText} (${category})`;
    li.draggable = true;

    // Edit Button
    const editBtn = document.createElement("button");
    editBtn.textContent = "✏️";
    editBtn.classList.add("edit-btn");
    editBtn.addEventListener("click", () => editTask(li));

    // Delete Button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", () => {
        li.remove();
        saveTasks();
    });

    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    // Drag & Drop Events
    li.addEventListener("dragstart", (e) => e.dataTransfer.setData("text/plain", li.innerHTML));
    li.addEventListener("dragover", (e) => e.preventDefault());
    li.addEventListener("drop", (e) => {
        e.preventDefault();
        const draggedData = e.dataTransfer.getData("text/plain");
        li.innerHTML = draggedData;
        saveTasks();
    });
}

// Function to Edit a Task
function editTask(taskElement) {
    const newText = prompt("Edit your task:", taskElement.firstChild.textContent);
    if (newText !== null) {
        taskElement.firstChild.textContent = newText;
        saveTasks();
    }
}

// Function to Save Tasks in Local Storage
function saveTasks() {
    const tasks = [];
    document.querySelectorAll("#taskList li").forEach(li => {
        tasks.push({ text: li.firstChild.textContent, category: li.dataset.category });
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Dark Mode Toggle
let darkMode = false;
toggleTheme.addEventListener("click", () => {
    darkMode = !darkMode;
    document.body.classList.toggle("dark-mode", darkMode);
});
