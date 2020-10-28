<template>
  <section class="wrap">
    <div id="chart_div">
      <GChart type="BarChart" :data="chartData" :options="chartOptions"/>
    </div>
    <br />
    <button class="btn btn-primary" id="next" v-on:click="next()">next</button>
  </section>
</template>

<script>
import { db } from "../firebaseDB";
let questionsRef = db.ref("questions");
let answersRef = db.ref("answers");

export default {
  name: "ContentComponent",
  data() {
    return {
      chartData: [["questions", "Aciertos", "Errores"],["",0,0]],
      chartOptions: {
        title: "Aciertos y Errores por Pregunta",
        chartArea: { width: "80%" },
        isStacked: true,
        hAxis: {
          title: "Aciertos / Errores",
          minValue: 0,
        },
        vAxis: {
          title: "Pregunta",
        },
      },
      start: 5,
      limit: 8,
    };
  },
  created() {
    this.readData();
  },
  methods: {
    readData: function() {
      questionsRef
        .orderByKey()
        .limitToFirst(this.limit)
        .on("child_added", (snap) => {
          answersRef
            .orderByChild("questionId")
            .equalTo(parseInt(snap.key))
            .once("value", (childSnap) => {
              let aciertos = 0;
              let errores = 0;
              childSnap.forEach((elem) => {
                if (elem.val().right) {
                  aciertos++;
                } else {
                  errores++;
                }
              });
              
              this.chartData.push([snap.key, aciertos, errores]);
              console.log(
                snap.key + " aciertos:" + aciertos + " errors:" + errores
              );
            });
        });
    },
    next: function() {
      let temp=[["questions", "Aciertos", "Errores"],["",0,0]];
      this.updatechartData=[];
      questionsRef
        .orderByKey()
        .startAt(this.start.toString())
        .limitToFirst(this.limit)
        .on("child_added", (snap) => {
          answersRef
            .orderByChild("questionId")
            .equalTo(parseInt(snap.key))
            .once("value", (childSnap) => {
              let aciertos = 0;
              let errores = 0;
              childSnap.forEach((elem) => {
                if (elem.val().right) {
                  aciertos++;
                } else {
                  errores++;
                }
              });
              temp.push([snap.key, aciertos, errores]);
              console.log(
                snap.key + " aciertosx:" + aciertos + " errors:" + errores
              );
            });
        });
      this.start=this.start+5;
      this.chartData=temp;
    },
  },
};
</script>
