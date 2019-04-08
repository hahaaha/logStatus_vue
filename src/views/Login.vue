<template>
    <div id="login">
        <h1>用户登录</h1>
        <el-input v-model="input" placeholder="请输入内容"></el-input>
        <el-input placeholder="请输入密码" v-model="password" show-password></el-input>
        <el-button type="success" @click="login">登录</el-button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            input: '',
            password: ''
        }
    },
    methods: {
        login: function () {
            var that = this
            this.$ajax
                .post(
                    "http://skill.hahahah.me/logStatus/user/login.do",
                    this.$qs.stringify({
                        userName:this.input,
                        password:this.password
                    })
                )
                .then(function(response) {
                    console.log(response) 
                    if(response.data.status == 0){ 
                        that.$message({
                            message: response.data.msg,
                            type: 'success'
                        })
                        that.$router.push("/")
                    }
                    else if(response.data.status == 1) {
                        that.$message({
                            message: response.data.msg,
                            type: 'warning'
                        })
                    }
                })
        }
    }
}
</script>
<style>
    #login {
        text-align: center;
    }
</style>


