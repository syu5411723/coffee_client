<template>
  <div id="title-trigger">
    <div id="sec02-title-wrapper" target="_blank">
      <Sec02SubThumb />
      <Sec02Thumb />
    </div>
  </div>
</template>

<script>
import Sec02Thumb from "../../../atoms/main/sec02/Sec02Thumb.vue";
import Sec02SubThumb from "../../../atoms/main/sec02/Sec02SubThumb.vue";
export default {
  components: {
    Sec02Thumb,
    Sec02SubThumb,
  },
  mounted() {
    const scene1 = this.$scrollmagic
      .scene({
        triggerElement: "#title-trigger",
        triggerHook: 0.7,
        // reverse:false,
      })
      .setTween("#sec02-title-wrapper", {
        css: {
          opacity: "0",
          left: "-10%",
          transition: "ease-in",
        },
      });
    this.$scrollmagic.addScene(scene1);
  },
};
</script>

<style scoped>
#sec02-title-wrapper {
  opacity: 1;
  position: absolute;
  top: 45%;
  left: 10%;
  transition: ease-in;
}
</style>
