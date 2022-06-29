/* global Chart, ejsData */

const ctx = document.getElementById("myChart")?.getContext("2d");
const verticalBar = document.getElementById("verticalBar").getContext("2d");
const charts = [];

charts[0] = new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: ejsData.categorias.map((cat) => cat.nome),
    datasets: [
      {
        data: ejsData.gastosCategoria,
        backgroundColor: ejsData.paletteCat,
      },
    ],
  },
  options: {
    responsive: true,
  },
});

// Chart Bar

charts[1] = new Chart(verticalBar, {
  type: "bar",
  data: {
    labels: [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dez",
    ],
    datasets: [
      {
        data: ejsData.saldoMes,
        backgroundColor: ejsData.paletteMonths,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});
