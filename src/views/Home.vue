<template>
    <div class="home">
        <el-row>
            <el-col :span="4">
                <el-menu
                    default-active="/"
                    :router="true"
                >
                    <el-menu-item index="/">
                        <i class="el-icon-menu"></i>
                        <span slot="title">首页</span>
                    </el-menu-item>
                    <el-menu-item index="about">
                        <i class="el-icon-document"></i>
                        <span slot="title">关于</span>
                    </el-menu-item>
                </el-menu>
            </el-col>
        </el-row>
        <router-view />
    </div>
</template>

<script>
// // @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
    name: "home",
    mounted: function() {
        var that = this;
        this.$ajax
            .post("http://skill.hahahah.me/logStatus/user/isLogin.do")
            .then(function(response) {
                if (response.data.status == 10) {
                    that.$router.push("/login");
                }
            });
    },
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
                });
        }
    }
};
</script>
