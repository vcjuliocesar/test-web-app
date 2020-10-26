<template>
  <section class="wrap">
    <div id="chart_div">
      <GChart type="BarChart" :data="chartData" :options="chartOptions" />
    </div>
  </section>
</template>

<script>
import { db } from "../firebaseDB";
let questionsRef = db.ref("questions").orderByKey().limitToFirst(5);
let answersRef = db.ref("answers");
export default {
  name: "ContentComponent",
  data() {
    return {
      chartData: [["questions", "Aciertos","Errores"]],
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
    };
  },
  mounted() {
    questionsRef.once("value", (snapshot) => {
      snapshot.forEach((childsnapshot) => {
        let questionId = parseInt(childsnapshot.key);
        let aciertos=0;
        let errores=0;
        answersRef
          .orderByChild("questionId")
          .equalTo(questionId)
          .once("value", (mediaSnap) => {
            mediaSnap.forEach((childMediaSnap) => {
        
              if(childMediaSnap.val().right){
                  aciertos++;
              }else{
                  errores++;
              }
            
              this.chartData.push([questionId,aciertos, errores]);
            });
          });
      });
    });
  },
};
</script>
