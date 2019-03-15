<template>
<div class="modal" v-if="activeModalOverlayToggled === 'baseModal' ? 'is-active' : '']">

  <!-- Modal content -->
  <div class="modal-content">
    <span class="close" @click="resetActiveModalOverlay" :class="[ activeModalOverlayToggled === 'baseModal' ? 'modal-show' : 'modal']>&times;</span>
    <p>Some text in the Modal..</p>
    <p>{{someData}}</p>
  </div>

</div>
</template>

<script>

    import { activeModalToggle } from "@/components/Main/Mixins/activeModalToggle.js";

    export default {
      name: "BasicModal",
      mixins: [activeModalToggle, activeTabMixin],
      props: ['someData'],
      data() {
        return {
          data : null
        };
      }
    };
</script>

<style scoped>
.modal-show {
  display: block; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>