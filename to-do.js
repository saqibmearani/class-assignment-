var firebaseConfig = {
  apiKey: "AIzaSyB5rp4ma8LKKNhND_wc93ZbE2pzb5zl3Zc",
  authDomain: "mini-ecommerce-d51b3.firebaseapp.com",
  databaseURL: "https://mini-ecommerce-d51b3-default-rtdb.firebaseio.com",
  projectId: "mini-ecommerce-d51b3",
  storageBucket: "mini-ecommerce-d51b3.appspot.com",
  messagingSenderId: "650817796731",
  appId: "1:650817796731:web:49b9173613beffe6db80de"
};

firebase.initializeApp(firebaseConfig);

var db = firebase.database();
var tasksRef = db.ref("tasks");

const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  tasksRef.push({
    text: taskText
  });

  taskInput.value = "";
}

tasksRef.on("child_added", function (data) {
  const taskId = data.key;
  const taskText = data.val().text;

  const listItem = document.createElement("li");

  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;

  taskSpan.addEventListener("click", () => {
    taskSpan.classList.toggle("completed");
  });

  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.style.background = "#e53935";
  removeButton.style.color = "#fff";
  removeButton.style.border = "none";
  removeButton.style.cursor = "pointer";

  removeButton.addEventListener("click", () => {
    db.ref("tasks/" + taskId).remove();
  });

  listItem.appendChild(taskSpan);
  listItem.appendChild(removeButton);
  listItem.setAttribute("id", taskId);

  taskList.appendChild(listItem);
});

tasksRef.on("child_removed", function (data) {
  const removedItem = document.getElementById(data.key);
  if (removedItem) {
    removedItem.remove();
  }
});
