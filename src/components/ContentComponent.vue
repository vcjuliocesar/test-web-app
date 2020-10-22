<template>
  <section class="wrap">
    <div id="chart_div">
      <GChart
        type="chartType"
        :settings="{ packages: ['bar'] }"
        :data="chartData"
        :options="chartOptions"
        :createChart="(el, google) => new google.charts.Bar(el)"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: "ContentComponent",
  data() {
    return {
      chartData: [
        ["Year", "Sales", "Expenses", "Profit"],
        ["2014", 1000, 400, 200],
        ["2015", 1170, 460, 250],
        ["2016", 660, 1120, 300],
        ["2017", 1030, 540, 350],
      ],
      chartOptions: {
        chart: {
          title: "Company Performance",
          subtitle: "Sales, Expenses, and Profit: 2014-2017",
        },
         bars: 'horizontal'
      },
    };
  },
};
</script>
