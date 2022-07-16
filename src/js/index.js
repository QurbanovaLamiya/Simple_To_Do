var submitButton = document.querySelector("#submitButton");
var fullName = document.querySelector("#fullName");
var tbody = document.querySelector("table tbody");
var infoData = [];

submitButton.addEventListener("click", addToDo);

function addToDo() {
  if (fullName.value.trim().length === 0) {
    alert("Please enter your full name");
    return;
  }

  infoData = [...infoData, fullName.value];
  fullName.value = "";
  // console.log(infoData);
  renderTable();
}

function renderTable() {
  tbody.innerHTML = "";
  for (i in infoData) {
    var tr = document.createElement("tr");
    tr.innerHTML = `
                 <th scope="row">${+i + 1}</th>
                    <td>${infoData[i]}</td>
    `;
    tbody.appendChild(tr);
  }
}

window.onkeydown = function (e) {
  if (e.key === "Enter") {
    addToDo();
  }
};
