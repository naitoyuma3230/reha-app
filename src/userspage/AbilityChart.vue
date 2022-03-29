<script>
import { Radar } from "vue-chartjs";

export default {
  extends: Radar,
  props: {
    ability: Object,
  },
  data() {
    return {
      config: {
        type: "radar",
        data: this.data,
        options: {
          elements: {
            line: {
              borderWidth: 3,
            },
          },
        },
      },
      data: {
        labels: ["data1", "data2", "data3", "data4", "data5"],
        datasets: [
          {
            label: "ストアのデータ",
            data: [
              this.ability.data1,
              this.ability.data2,
              this.ability.data3,
              this.ability.data4,
              this.ability.data5,
            ],
            fill: true,
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgb(255, 99, 132)",
            pointBackgroundColor: "rgb(255, 99, 132)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgb(255, 99, 132)",
          },
          {
            label: "固定値",
            data: [80, 70, 60, 40, 100],
            fill: true,
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderColor: "rgb(54, 162, 235)",
            pointBackgroundColor: "rgb(54, 162, 235)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgb(54, 162, 235)",
          },
        ],
      },
    };
  },
  mounted() {
    this.renderChart(this.data, this.config);
  },
};
</script>
