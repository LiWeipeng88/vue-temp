<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card class="box-card">
      <el-button class="get_btn" type="primary" @click="getUserLists()">getUserLists</el-button>
      <el-table :data="listData" border style="width: 100%">
        <el-table-column prop="id" label="ID">
        </el-table-column>
        <el-table-column prop="name" label="name">
        </el-table-column>
        <el-table-column prop="phone" label="phone">
        </el-table-column>
        <el-table-column prop="username" label="username">
        </el-table-column>
        <el-table-column prop="website" label="website">
        </el-table-column>
        <el-table-column prop="address.city" label="address">
        </el-table-column>
        <el-table-column prop="email" label="email">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        listData: []
      }
    },
    created() {

    },
    mounted() {

    },
    methods: {
      async getUserLists() {
        const res = await this.$http.get('/users')
        this.listData = res.data
      }
    }
  }

</script>

<style scoped lang="scss">
  .get_btn {
    margin-bottom: 16px;
  }

</style>
