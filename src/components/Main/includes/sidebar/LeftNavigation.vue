<template>
<nav class="main-menu">
    <div class="main-menu-inner">
        
        <icon-menu />

        
    </div>
</nav>
</template>

<script>
    import IconMenu from "@/components/Main/includes/sidebar/IconMenu.vue";
    export default {
      name: "MainSidebar",
      components: {
        IconMenu,
        ProfileMenu
      }
    };
</script>

<style scoped>
</style>