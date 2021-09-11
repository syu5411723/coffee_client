<template>
  <div>
    <div class="dammy"></div>
    <section>
      <h2 id="work-trigger" class="section-title effect-fade-side">Works</h2>
      <div class="article-body works">
        <div class="article-content">
          <p>技術ブログ</p>
          <a id="work-image" target="_blank"> tst </a>
        </div>
      </div>
    </section>
    <div class="dammy"></div>
  </div>
</template>
<script>
export default {
  mounted() {
    const scene1 = this.$scrollmagic
      .scene({
        triggerElement: "#work-trigger",
        triggerHook: 0.5,
        reverse: true,
      })
      .setTween("#work-image", {
        css: {
          opacity: "1",
        },
      });
    // ---- ↓ triggerのヘルプを表示 ----
    // .addIndicators({ name: 'OK' })

    this.$scrollmagic.addScene(scene1);
  },
};
</script>
<style  scoped>
#work-image {
  opacity: 0;
}
.dammy {
  width: 100c;
  height: 100vh;
}
</style>