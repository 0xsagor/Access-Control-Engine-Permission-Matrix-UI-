const permissions = {
  guest: ["read"],
  user: ["read", "write"],
  admin: ["read", "write", "delete"]
};

const actions = ["read", "write", "delete"];

function render() {
  const role = document.getElementById("role").value;
  const tbody = document.getElementById("matrix");
  tbody.innerHTML = "";

  actions.forEach(action => {
    const allowed = permissions[role].includes(action);

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${action}</td>
      <td class="${allowed ? "allowed" : "denied"}">
        ${allowed ? "Allowed" : "Denied"}
      </td>
    `;
    tbody.appendChild(tr);
  });
}

render();
