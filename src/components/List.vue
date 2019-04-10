<template>
  <div id="list">
    <h1>状态记录列表</h1>
    <el-table :data="tableData">
      <el-table-column prop="userId" label="用户id"></el-table-column>
      <el-table-column prop="status" label="状态"></el-table-column>
      <el-table-column prop="createTime" label="日期"></el-table-column>
    </el-table>
    <el-pagination layout="prev,pager,next" :total="page.total" :page-size="page.pageSize" @prev-click="changePageNum" @next-click="changePageNum" @current-change="changePageNum"></el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      page: []
    };
  },
  created: function() {
    var that = this;
    this.$ajax
      .post("http://skill.hahahah.me/logStatus/basic/list.do",this.$qs.stringify({pageSize: 10}))
      .then(function(response) {
        if (response.data.status == 0) {
          let list = response.data.data.list;
          for (let i = 0; i < list.length; i++) {
            list[i].createTime = new Date(list[i].createTime).toLocaleString();
          }
          console.log(response.data.data);
          that.page.total = response.data.data.total;
          that.page.pageSize = response.data.data.pageSize;
          console.log(list);
          that.tableData = list;
        }
      });
  },
  methods: {
    changePageNum: function(num) {
        console.log(num)
      var that = this;
      this.$ajax
        .post("http://skill.hahahah.me/logStatus/basic/list.do", this.$qs.stringify({ pageNum: num,pageSize: 10 }))
        .then(function(response) {
          if (response.data.status == 0) {
            let list = response.data.data.list;
            for (let i = 0; i < list.length; i++) {
              list[i].createTime = new Date(
                list[i].createTime
              ).toLocaleString();
            }
            console.log(response.data.data);
            that.page.total = response.data.data.total;
            that.page.pageSize = response.data.data.pageSize;
            console.log(list)
            that.tableData = list 
          }
        });
    }
  }
};
</script>
<style>
#list{
  width: 90%;
  margin: 0 auto;
}
#list h1 {
  text-align: center;
}
</style>


