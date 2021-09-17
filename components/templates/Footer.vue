<template>
  <div>
    <div class="footer-container">
      <div class="footer-inner" id="footer-trigger">
        <div class="footer-title">Location</div>
        <div id="footer-content">
          <FooterCntJp />
          <FooterCntEn />
        </div>
        <FooterBottom />
      </div>
    </div>
  </div>
</template>
<script>
import {
  FooterBottom,
  FooterCntJp,
  FooterCntEn,
} from "~/components/atoms/footer";

export default {
  components: {
    FooterBottom,
    FooterCntJp,
    FooterCntEn,
  },
  mounted() {
    const scene1 = this.$scrollmagic
      .scene({
        triggerElement: "#footer-trigger",
        triggerHook: 1,
        reverse: true,
      })
      .setTween("#footer-content", {
        css: {
          opacity: "1",
          transform: "translateX(0px)",
        },
      });
    this.$scrollmagic.addScene(scene1);
  },
};
</script>

<style scoped>
.footer-container {
  width: 100%;
  height: 100%;
  margin-bottom: 20px;
}
.footer-inner {
  width: 95%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.footer-title {
  margin-bottom: 30px;
}
#footer-content {
  transform: translateX(-50px);
  opacity: 0;
  font-size: 10px;
  margin-bottom: 70px;
  display: flex;
  width: 100%;
}
#footer-trigger {
  margin-bottom: 30px;
}
.footer-meta-wrapper {
  width: 40%;
}
</style>