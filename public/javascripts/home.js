/* global fetch */

const urlQuery = new URLSearchParams(window.location.search);
const query = Object.fromEntries(urlQuery.entries());
if (query.ano == null) {
  query.ano = new Date().getFullYear();
}
if (query.mes == null) {
  query.mes = new Date().getMonth();
}
document.getElementById("proximo").onclick = () => {
  window.location.href = `/home?ano=${query.ano}&mes=${+query.mes + 1}`;
};
document.getElementById("anterior").onclick = () => {
  window.location.href = `/home?ano=${query.ano}&mes=${+query.mes - 1}`;
};

// eslint-disable-next-line no-unused-vars
async function onDeleteClick(id) {
  await fetch("/home", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  });

  window.location.href = `/home?ano=${query.ano}&mes=${query.mes}`;
}
