const labels = ["January", "February", "March", "April", "May", "June", "July"]

const data = {
  labels: labels,
  datasets: [
    {
      label: "First dataset",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [0, 10, 5, 2, 20, 30, 45],
    },
    {
      label: "Second dataset",
      backgroundColor: "rgb(255, 240, 132)",
      borderColor: "rgb(255, 240, 132)",
      data: [0, 20, 15, 12, 25, 30, 30],
    },
  ],
}

const config = {
  type: "line",
  data: data,
  options: {},
}

const myChart = new Chart(document.getElementById("myChart"), config)
