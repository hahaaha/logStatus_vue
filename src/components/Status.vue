<template>
    <div id="status">
        <h3>状态管理</h3>
        <el-button @click="submitStatus('1')">睡觉</el-button>
        <el-button @click="submitStatus('2')">写代码</el-button>
        <el-button @click="submitStatus('3')">吃饭</el-button>
        <el-button @click="submitStatus('4')">起床</el-button>
        <el-button @click="submitStatus('5')">上班</el-button>
        <el-button @click="submitStatus('6')">下班</el-button>
    </div>
</template>
