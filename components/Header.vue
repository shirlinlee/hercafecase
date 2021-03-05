<template>
  <div class="header">
    <div class="W1440">
      <img src="/images/logo.png" class="logo" alt="" />
      <ul>
        <li><a href="#" target="_blank" rel="noopener">目錄選項</a></li>
        <li><a href="#" target="_blank" rel="noopener">目錄選項</a></li>
        <li><a href="#" target="_blank" rel="noopener">目錄選項</a></li>
        <li><a href="#" target="_blank" rel="noopener">目錄選項</a></li>
        <li><a href="#" target="_blank" rel="noopener">目錄選項</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    isMember: Boolean,
    memberName: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  text-align: left;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
  display: none;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
