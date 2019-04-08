<template>
    <div id="app">
        <el-row>
            <el-col :span="4">
                <el-menu
                    default-active="/"
                    :router= "true"
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

            <!-- <div id="nav">
                <router-link to="/">Home</router-link> |
                <router-link to="/about">About</router-link>
            </div> -->
            <el-col :span="20">
                <router-view />
            </el-col>
        </el-row>
    </div>
</template>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}
</style>
