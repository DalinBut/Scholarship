<!-- <template>
    <div>
      <form @submit.prevent="login">
        <label for="name">Name:</label>
        <input type="text" name="email" v-model="name" required>
        <br>
        <label for="email">Email:</label>
        <input type="email" name="email" v-model="email" required>
        <br>
        <label for="password">Password:</label>
        <input type="password" name="password" v-model="password" required>
        <br>
        <label for="confirm_password">Password:</label>
        <input type="password" name="confirm_password" v-model="confirm_password" required>
        <br>
        <button type="submit">Sign up</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        password: '',
        confirm_password: '',
      }
    },
    methods: {
      async login() {
        try {
          const response = await fetch('https://dev-api-telegram-bot.makcircle.com/api/signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: this.email, password: this.password })
          })
          const data = await response.json()
          console.log(data)
        } catch (error) {
          console.error(error)
        }
      }
    }
  }
  </script> -->
  <template>
    <div
      class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blueGray-700"
    >
      <div class="rounded-t mb-0 px-4 py-3 bg-transparent">
        <div class="flex flex-wrap items-center">
          <div class="relative w-full max-w-full flex-grow flex-1">
            <h6 class="uppercase text-blueGray-100 mb-1 text-xs font-semibold">
              Overview
            </h6>
            <h2 class="text-white text-xl font-semibold">
              Sales value
            </h2>
          </div>
        </div>
      </div>
      <div class="p-4 flex-auto">
        <!-- Chart -->
        <div class="relative h-350-px">
          <canvas id="line-chart"></canvas>
        </div>
      </div>
    </div>
  </template>
  <script>
  import Chart from "chart.js";
  
  export default {
    mounted: function () {
      this.$nextTick(function () {
        var config = {
          type: "line",
          data: {
            labels: [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
            ],
            datasets: [
              {
                label: new Date().getFullYear(),
                backgroundColor: "#9ae6b4",
                borderColor: "#9ae6b4",
                data: [65, 78, 66, 44, 56, 67, 75],
                fill: false,
              },
              {
                label: new Date().getFullYear() - 1,
                fill: false,
                backgroundColor: "#ed64a6",
                borderColor: "#ed64a6",
                data: [40, 68, 86, 74, 56, 60, 87],
              },
            ],
          },
          options: {
            maintainAspectRatio: false,
            responsive: true,
            title: {
              display: false,
              text: "Sales Charts",
              fontColor: "white",
            },
            legend: {
              labels: {
                fontColor: "white",
              },
              align: "end",
              position: "bottom",
            },
            tooltips: {
              mode: "index",
              intersect: false,
            },
            hover: {
              mode: "nearest",
              intersect: true,
            },
            scales: {
              xAxes: [
                {
                  ticks: {
                    fontColor: "rgba(255,255,255,.7)",
                  },
                  display: true,
                  scaleLabel: {
                    display: false,
                    labelString: "Month",
                    fontColor: "white",
                  },
                  gridLines: {
                    display: false,
                    borderDash: [2],
                    borderDashOffset: [2],
                    color: "rgba(33, 37, 41, 0.3)",
                    zeroLineColor: "rgba(0, 0, 0, 0)",
                    zeroLineBorderDash: [2],
                    zeroLineBorderDashOffset: [2],
                  },
                },
              ],
              yAxes: [
                {
                  ticks: {
                    fontColor: "rgba(255,255,255,.7)",
                  },
                  display: true,
                  scaleLabel: {
                    display: false,
                    labelString: "Value",
                    fontColor: "white",
                  },
                  gridLines: {
                    borderDash: [3],
                    borderDashOffset: [3],
                    drawBorder: false,
                    color: "rgba(255, 255, 255, 0.15)",
                    zeroLineColor: "rgba(33, 37, 41, 0)",
                    zeroLineBorderDash: [2],
                    zeroLineBorderDashOffset: [2],
                  },
                },
              ],
            },
          },
        };
        var ctx = document.getElementById("line-chart").getContext("2d");
        window.myLine = new Chart(ctx, config);
      });
    },
  };
  </script>