<template>
    <div id="login">
        <h1>用户登录</h1>
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="用户名">
                <el-input v-model="form.input" placeholder="请输入内容"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input placeholder="请输入密码" v-model="form.password" show-password></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="login">登录</el-button>
            </el-form-item>
        </el-form>
        
        
        
    </div>
</template>
<script>
export default {
    data() {
        return {
            form: {
                input: '',
                password: ''
            }
           
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
        width: 990px;
        margin: 0 auto;
    }
</style>


