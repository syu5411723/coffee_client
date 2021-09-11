<template>
  <div>
    <!-- <Sample /> -->
    <!-- <sample-02 /> -->
    <!-- <Header />
    <Sec1 />  -->
    <!-- <Sec2 /> -->
    <!-- <Sec3 :menus="menus" :otherMenus="otherMenus" />
    <Sec4 />
    <img-wrapper /> -->
    <Footer />
  </div>
</template>

<script>
import {
  Header,
  Footer,
  Sec1,
  Sec2,
  Sec3,
  Sec4,
  ImgWrapper,
  Sample,

} from "~/components/templates";
import Sample02 from '~/components/molecules/main/sec02/Sample02.vue';


export default {
  components: {
    Header,
    Footer,
    Sec1,
    Sec2,
    Sec3,
    Sec4,
    ImgWrapper,
    Sample,
    Sample02,
  },
  props: ["menus", "otherMenus"],
  name: "App",
};
</script>

<style>
</style>