<template>
  <div>
        <div></div>
    <section>
      <h2 id="work-trigger">Works</h2>
      <div>
        <div>
          <p>技術ブログ</p>
          <a id="work-image" target="_blank" > tst </a>
        </div>
      </div>
    </section>

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
</style>