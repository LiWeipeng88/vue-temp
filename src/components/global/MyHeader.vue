<template>
  <header :style="{backgroundColor:global_theme}">
    <div class="logo">{{BASE_TITLE}}</div>
    <el-menu class="el-menu-demo" mode="horizontal" :background-color="global_theme" text-color="#fff"
             active-text-color="#CCFFCC">
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">一键换肤</template>
        <el-menu-item index="2-1" @click="changeGlobalTheme('#993333')">红色</el-menu-item>
        <el-menu-item index="2-2" @click="changeGlobalTheme('#0D66AB')">蓝色</el-menu-item>
        <el-menu-item index="2-3" @click="changeGlobalTheme('#006666')">绿色</el-menu-item>
      </el-submenu>
      <el-menu-item index="3">
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            消息中心<i class="el-icon-caret-bottom el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item class="clearfix">
              评论
              <el-badge class="mark" :value="12" />
            </el-dropdown-item>
            <el-dropdown-item class="clearfix">
              回复
              <el-badge class="mark" :value="3" />
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-menu-item>
      <el-menu-item index="4">订单管理</el-menu-item>
      <el-button type="info" @click="loginOut()">退出</el-button>
    </el-menu>
  </header>
</template>

<script>
  import {
    mapState,
    mapMutations
  } from 'vuex'
  export default {
    name: 'MyHeader',
    computed: {
      ...mapState(['global_theme'])
    },
    created() {

    },
    mounted() {

    },
    methods: {
      ...mapMutations(['changeGlobalTheme']),
      loginOut() {
        this.$router.push({
          path: '/login'
        })
      }
    }
  }

</script>

<style scoped lang="scss">
  .logo {
    color: #fff;
    font-size: 22px;
  }

  .el-menu-demo {
    display: flex;
    align-items: center;
  }

  .el-dropdown {
    color: #fff;
  }

  .el-menu.el-menu--horizontal {
    border: none;
  }

  .el-menu-item.is-active {
    border-color: #3f9eff !important;
    color: #fff !important;
  }

</style>
