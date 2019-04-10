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
                    <el-menu-item index="list">
                        <i class="el-icon-tickets"></i>
                        <span slot="title">记录列表</span>
                    </el-menu-item>
                    <el-menu-item index="about">
                        <i class="el-icon-document"></i>
                        <span slot="title">关于</span>
                    </el-menu-item>
                </el-menu>
            </el-col>
                <el-col :span="20">
            <router-view />
        </el-col>
        </el-row>
    </div>
</template>

<script>
// // @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
    mounted: function() {
        var that = this;
        this.$ajax
            .post("http://skill.hahahah.me/logStatus/user/isLogin.do")
            .then(function(response) {
                if (response.data.status == 10) {
                    that.$router.push("/login");
                }
            })
    }
};
</script>
