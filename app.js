// Select the canvas element
const ctx = document.getElementById("lineChart").getContext("2d");

// Generate random data between 0 and 40,000 for each month
const randomData = Array.from({ length: 12 }, () =>
  Math.floor(Math.random() * 40000)
);

// Create the line chart
const myLineChart = new Chart(ctx, {
  type: "line", // Specify the chart type
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ], // X-axis labels
    datasets: [
      {
        data: randomData, // Random Y-axis data points
        borderColor: "#0077b6", // Line color
        // backgroundColor: "rgba(75, 192, 192, 0.2)", // Fill color under the line
        borderWidth: 2, // Line width
        tension: 0.4, // Smoothness of the line
      },
    ],
  },
  options: {
    responsive: true, // Make the chart responsive
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
    },
    scales: {
      x: {
        title: {
          display: true,
        },
      },
      y: {
        title: {
          display: true,
        },
        beginAtZero: true, // Start Y-axis at zero
        ticks: {
          stepSize: 10000, // Set the interval to 10,000
          max: 40000, // Set the maximum value to 40,000
          callback: function (value) {
            return `$${value / 1000}k`; // Format Y-axis values as $0k, $10k, etc.
          },
        },
      },
    },
  },
});

// Add a click event listener to the canvas element
// Select the canvas element for the bar chart
const barCtx = document.getElementById("barChart").getContext("2d");

// Generate random data for seven days
const randomDataTwo = Array.from({ length: 7 }, () =>
  Math.floor(Math.random() * 1000)
);

// Data for the bar chart
const barData = {
  labels: ["Sun", "Mon", "Tue", "Wedn", "Thu", "Fri", "Sat"], // X-axis labels
  datasets: [
    {
      label: "Daily Stock", // Label for the dataset
      data: randomDataTwo, // Random Y-axis data points
      backgroundColor: "#0077b6", // Bar color
      borderColor: "white", // Border color
      borderWidth: 1, // Border width
    },
  ],
};

// Options for the bar chart
const barOptions = {
  responsive: true, // Make the chart responsive
  plugins: {
    legend: {
      display: false, // Hide the legend
    },
  },
  scales: {
    x: {
      title: {
        display: false,
        text: "Days of the Week", // X-axis title
        color: "black", // X-axis title color
      },
      ticks: {
        color: "black", // X-axis tick color
      },
      grid: {
        display: false, // Disable gridlines for the X-axis
      },
    },
    y: {
      title: {
        display: false,
        text: "Revenue (in USD)", // Y-axis title
        color: "black", // Y-axis title color
      },
      beginAtZero: true, // Start Y-axis at zero
      ticks: {
        color: "black", // Y-axis tick color
        callback: function (value) {
          return `$${value}`; // Format Y-axis values as $0, $100, etc.
        },
      },
      grid: {
        display: false, // Disable gridlines for the Y-axis
      },
    },
  },
};

// Create the bar chart
const myBarChart = new Chart(barCtx, {
  type: "bar", // Specify the chart type
  data: barData,
  options: barOptions,
});
