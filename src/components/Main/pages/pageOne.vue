<template>
    <div>
        <button type="button" @click.prevent="setActiveModal('UploadAssetModal')">click me</button>
    </div>
</template>

<script>
//Mixins
import { activeModalToggle } from "@/components/Main/Mixins/activeModalToggle.js";
export default {
  name: "AssetSideBar",
  mixins: [activeModalToggle]
  //todo make mixin when file selected show single controls menu
};
</script>

<style scoped>

</style>