let task = document.getElementById("task");
let dateInput = document.getElementById("date");
let res = document.getElementById("res");
let addTaskBtn = document.getElementById("addTaskBtn");
let btnLogOut = document.getElementById("logOut");

addTaskBtn.addEventListener("click", () => {
  if (task.value === ""  || dateInput.value === "") {
    alert("Task or Date empty!!!");
    return;
  }

  function formatDate() {
    dateFormated = dateInput.value;
    const [year, month, day] = dateFormated.split("-");
    return `${day}/${month}/${year}`;
  }

  let date = formatDate();

  let cardItem = document.createElement("div");
  cardItem.className = "card-item";

  cardItem.innerHTML = `
    <input type='checkbox' class="checkBox">
      <div class="task_description">
        <p>${task.value}</p>
        <p>${date}</p>     
        <div>
          <button class="btns delete-btn">Delete</button>
        </div>
      </div>
    <br>
  `;

  let checkBox = cardItem.querySelector(".checkBox");
  checkBox.addEventListener("change", function () {
    if (checkBox.checked) {
      console.log("clicked");
      cardItem.classList.add("risk_item");
    } else {
      cardItem.classList.remove("risk_item");
    }
  });

  res.appendChild(cardItem);

  task.value = "";
  dateInput.value = "";
});

res.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete-btn")) {
    // event.target.parentElement.remove();
    event.target.closest(".card-item").remove();
  }
});

btnLogOut.addEventListener("click", () => {
  location.href = "../index.html";
});
