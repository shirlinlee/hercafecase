<template>
  <div id="login">
    <Header />
    <LoginBox />
  </div>
</template>


<script>
import Header from "../components/Header.vue";
import LoginBox from "../components/LoginBox.vue";

export default {
  name: "App",
  components: {
    Header,
    LoginBox,
  },
};
</script>


<style lang="scss">
@import "./assets/scss/main.scss";
</style>