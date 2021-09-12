<template>
  <div id="sec02-trigger">
    <div id="sec02-contentWrapper" target="_blank">
      <Sec02ContentEn />
      <Sec02ContentJp />
    </div>
  </div>
</template>

<script>
import Sec02ContentEn from "../../../atoms/main/sec02/Sec02ContentEn.vue";
import Sec02ContentJp from "../../../atoms/main/sec02/Sec02ContentJp.vue";
export default {
  components: {
    Sec02ContentJp,
    Sec02ContentEn,
  },
  mounted() {
    const scene1 = this.$scrollmagic
      .scene({
        triggerElement: "#sec02-trigger",
        triggerHook: 0.4,
        reverse: true,
      })
      .setTween("#sec02-contentWrapper", {
        css: {
          opacity: "1",
          transform: "translateX(50px)",
        },
      });
    this.$scrollmagic.addScene(scene1);
  },
};
</script>

<style scoped>
#sec02-contentWrapper {
  width: 55%;
  height: 80%;
  font-size: 10px;
  font-weight: 100;
  opacity: 0;
  transform: translateX(20);
  transition: ease-in;
}
</style>