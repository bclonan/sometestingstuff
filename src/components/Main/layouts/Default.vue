<template>
<!-- Main dashboard container -->
<div class="columns" :class="[ sidebarStoreMenu ? 'is-pushed' : '']">
  <div class="column is-hidden-mobile"></div>
    <!-- removed column -->
        <router-view />
    <!-- removed column -->
    
</div>
<!-- Main dashboard container -->
</template>

<script>
  export default {
    name: "DefaultContent",
    computed: {
      sidebarStoreMenu() {
        return this.$store.getters["mainPushMenu/showPushMenu"];
      }
    }
  };
</script>