<template>
  <a><slot /></a>
</template>

<script>
export default {
  name: "Btn",
  props: {},
  mounted() {
    console.log(this.props);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
a {
  margin-right: 15px;
  border-radius: 10px;
  display: inline-block;
  line-height: 45px;
  color: #fff;
  background-color: #565656;
  width: 100%;
  cursor: pointer;
}
</style>
