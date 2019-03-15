<template>

  <body>
   <default-layout />
   <base-modal>
    
  </body>
</template>

<script>
import DefaultLayout from "@/components/Main/layouts/Default";
//Modals
import baseModal from "@/components/Main/includes/modals/baseModal";
//Funnels
export default {
  name: "home",
  components: {
    "default-layout": DefaultLayout,
    "base-modal": baseModal
  },
  methods : {
  },
  computed: {

  }
};
</script>

<style scoped>

</style>