<template>
    <div id="status">
        <h1>状态管理</h1>
        <el-button @click="submitStatus('1')">睡觉</el-button>
        <el-button @click="submitStatus('2')">写代码</el-button>
        <el-button @click="submitStatus('3')">吃饭</el-button>
        <el-button @click="submitStatus('4')">起床</el-button>
        <el-button @click="submitStatus('5')">上班</el-button>
        <el-button @click="submitStatus('6')">下班</el-button>
    </div>
</template>
<script>
export default {
    methods: {
        submitStatus: function(val) {
            var that = this;
            this.$ajax
                .post(
                    "http://skill.hahahah.me/logStatus/basic/add.do",
                    this.$qs.stringify({ status: val })
                )
                .then(function(response) {
                    if (response.data.status == 0) {
                        that.$message({
                            message: response.data.msg,
                            type: "success"
                        });
                    }
                })
        }
    }
}
</script>


<style>
    #status{
        text-align: center;
    }
</style>


