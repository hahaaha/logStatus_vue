<template>
    <div class="home">
        <h3>状态管理</h3>
        <el-button @click="submitStatus('1')">吃饭</el-button>
        <el-button @click="submitStatus('2')">睡觉</el-button>
        <el-button @click="submitStatus('3')">起床</el-button>
        <el-button @click="submitStatus('4')">上班</el-button>
        <el-button @click="submitStatus('5')">下班</el-button>
    </div>
</template>

<script>
// // @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
    name: "home",
    methods: {
        submitStatus: function(val) {
            var that = this
            this.$ajax
                .post(
                    "http://skill.hahahah.me/logStatus/basic/add.do",
                    this.$qs.stringify({ status: val })
                )
                .then(function(response) {
                    console.log(response);
                    if (response.data.status == 0) {
                        console.log(response.data.msg)
                        that.$message({
                            message: response.data.msg,
                            type: 'success'
                            })

                    }
                });
        }
    }
};
</script>
