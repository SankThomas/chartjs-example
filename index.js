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

/*
Intergrating chartjs in a react app (from https://www.educative.io/edpresso/how-to-use-chartjs-to-create-charts-in-react)

// npm install chartjs react-chartjs-2

import React from "react"
import { Line } from "react-chartjs-2"

const state = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      label: "Rainfall",
      fill: false,
      lineTension: 0.5,
      backgroundColor: "rgba(75,192,192,1)",
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 2,
      data: [65, 59, 80, 81, 56],
    },
  ],
}

export default function App() {
  return (
    <div>
      <Line
        data={state}
        options={{
          title: {
            display: true,
            text: "Average Rainfall per month",
            fontSize: 20,
          },
          legend: {
            display: true,
            position: "right",
          },
        }}
      />
    </div>
  )
}

*/
