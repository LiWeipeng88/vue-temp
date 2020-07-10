<template>
  <div class="home">
    <my-header></my-header>
    <section>
      <my-left></my-left>
      <div class="content">
        <router-view style="padding: 14px;"></router-view>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {

      }
    }
  }

</script>
<style lang="scss" scoped>
  .home {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

  header {
    padding: 0px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  section {
    display: flex;
    flex: 1;
  }

  .content {
    width: calc(100vw - 200px);
  }

</style>
