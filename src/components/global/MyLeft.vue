<template>
  <div style="width:200px" :style="{backgroundColor:global_theme}">
    <el-menu class="el-menu-vertical-demo" :background-color="global_theme" text-color="#fff"
             active-text-color="#CCFFCC" router :default-active="$route.path">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>信息设置</span>
        </template>
        <el-menu-item index="/about"> <i class="el-icon-guide"></i><span>关于我们</span></el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>用户设置</span>
        </template>
        <el-menu-item index="/user/list"> <i class="el-icon-user"></i>用户列表</el-menu-item>
        <el-menu-item index="/user/edit"> <i class="el-icon-edit"></i>信息修改</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
  import {
    mapState
  } from 'vuex'
  export default {
    name: 'MyLeft',
    data() {
      return {}
    },
    computed: {
      ...mapState(['global_theme'])
    },
    created() {

    },
    mounted() {},
    methods: {

    }
  }

</script>

<style scoped lang="scss">
  i {
    color: #eee !important;
  }

  .el-menu {
    border-right: 0px;
  }

  .el-menu-item.is-active {
    background-color: rgba(255, 255, 255, 0.3) !important;
    color: #fff !important;
  }

</style>
