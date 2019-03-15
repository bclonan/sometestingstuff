<template>
  <div class="home">

    <v-b-table />
  </div>
</template>

<script>
// @ is an alias to /src
import VueBTable from '@/components/VueBTable'

let buttonCount = 0

export default {
  name: 'home',
  data() {
    return {
      isCurrentPagenation: 0,
      isTotalCount : null
    }
  },
  components: {
    "v-b-table" : VueBTable
  },
  computed : {
    totalPageNationButtons () {
      return buttonCount;
    },
    /*currentSchema() {
         let c = this.isCurrentPagenation;
         let f = this.isCurrentStepSchema;
         let r = stepGenerator({});
         const currentForm = f.filter((form) => {
           return form.step == c;
         }).map(function(formins) {
           return formins;
         });
         function stepGenerator(options = {}) {
         const {
           step = 0,
            TagLine = "",
            TagLineClass = "",
            schema = []
        } = options; // Default options

        return {
          step: step,
          TagLine: TagLine,
          TagLineClass: TagLineClass,
          schema: schema
        };
      }

      if (!currentForm[0]) {
        r = stepGenerator({
          step: this.isCurrentStep,

        });
        this.$store.commit("storyEditingData/addToSchema", r);
      }
      else {
        r = currentForm[0].schema
      }

      return r;

    },*/
  }
}
</script>
