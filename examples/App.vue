<template>
  <div id="app">
    <span>示例：</span>
    <div id="components-affix-demo-target" class="scrollable-container" ref="container">
      <div class="background">
        <bravo-affix :target="() => this.$refs.container" :top="20" :left="20">
          <div style="padding: 5px 10px;background-color: #334880;color:#fff;width: 260px">
            Fixed at the top of container
          </div>
        </bravo-affix>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  mounted() {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#components-affix-demo-target.scrollable-container {
  height: 200px;
  overflow: scroll;
  margin: 0 200px;
}
#components-affix-demo-target .background {
  padding-top: 60px;
  height: 500px;
  width: 200vh;
  background-image: url('https://zos.alipayobjects.com/rmsportal/RmjwQiJorKyobvI.jpg');
}

</style>
