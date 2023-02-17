const poll = document.getElementById("poll");
const chartContainer = document.getElementById("chart-container");
const chart = document.getElementById("chart").getContext("2d");

const data = {
  labels: ["Red", "Blue", "Green"],
  datasets: [{
    label: "Votes",
    data: [0, 0, 0],
    backgroundColor: ["red", "blue", "green"]
  }]
};

const options = {
  responsive: true,
  maintainAspectRatio: false
};

const myChart = new Chart(chart, {
  type: "bar",
  data: data,
  options: options
});

function vote() {
  const selectedOption = poll.querySelector("input[name=color]:checked");
  if (selectedOption) {
    const selectedValue = selectedOption.value;
    const selectedOptionIndex = data.labels.indexOf(selectedValue);
    data.datasets[0].data[selectedOptionIndex]++;
    myChart.update();
    selectedOption.checked = false;
    chartContainer.style.display = "block";
  }
}
