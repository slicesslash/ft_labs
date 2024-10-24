const form = document.getElementById("form")

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const amount = document.getElementById("amount").value;
  const percentage = document.getElementById("percentage").value;
  const probability = document.getElementById("probability").value;
  const iron = document.getElementById("iron").value;

  const tbody = document.getElementById("tbody");
  const index = tbody.childElementCount;

  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${index + 1}</td>
    <td>${name}</td>
    <td>${amount}</td>
    <td>${percentage}</td>
    <td>${probability}</td>
    <td>${iron}</td>
  `;

  tbody.appendChild(tr);
});